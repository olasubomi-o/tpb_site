import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/contact",
}));

// Mock next/link
jest.mock("next/link", () => {
  const Link = ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  );
  Link.displayName = "Link";
  return Link;
});

// Mock framer-motion to render children without animation
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <p {...props}>{children}</p>,
    form: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <form {...props}>{children}</form>,
  },
  useInView: () => true,
}));

// Mock child components
jest.mock("../components/Nav", () => {
  const Nav = () => <nav data-testid="nav" />;
  Nav.displayName = "Nav";
  return Nav;
});

jest.mock("../components/Footer", () => {
  const Footer = () => <footer data-testid="footer" />;
  Footer.displayName = "Footer";
  return Footer;
});

import ContactPage from "../app/contact/page";

const mockFetch = jest.fn();
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockClear();
  Object.defineProperty(window, "localStorage", {
    value: { getItem: jest.fn(() => null), setItem: jest.fn() },
    writable: true,
  });
});

describe("ContactPage", () => {
  it("renders all required form fields", () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tell us about your needs/i)).toBeInTheDocument();
  });

  it("all fields are required", () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/first name/i)).toBeRequired();
    expect(screen.getByLabelText(/last name/i)).toBeRequired();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/tell us about your needs/i)).toBeRequired();
  });

  it("email field has type=email", () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/email/i)).toHaveAttribute("type", "email");
  });

  it("renders the submit button", () => {
    render(<ContactPage />);
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("shows 'Sending...' while submitting", async () => {
    mockFetch.mockImplementation(() => new Promise(() => {})); // never resolves
    render(<ContactPage />);

    await userEvent.type(screen.getByLabelText(/first name/i), "Jane");
    await userEvent.type(screen.getByLabelText(/last name/i), "Smith");
    await userEvent.type(screen.getByLabelText(/email/i), "jane@example.com");
    await userEvent.type(screen.getByLabelText(/tell us about your needs/i), "I need help with product strategy.");

    fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form")!);

    await waitFor(() =>
      expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled()
    );
  });

  it("shows success state after successful submission", async () => {
    mockFetch.mockResolvedValueOnce({ ok: true });
    render(<ContactPage />);

    await userEvent.type(screen.getByLabelText(/first name/i), "Jane");
    await userEvent.type(screen.getByLabelText(/last name/i), "Smith");
    await userEvent.type(screen.getByLabelText(/email/i), "jane@example.com");
    await userEvent.type(screen.getByLabelText(/tell us about your needs/i), "I need help.");

    fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form")!);

    await waitFor(() => expect(screen.getByText(/message sent/i)).toBeInTheDocument());
    expect(screen.queryByRole("button", { name: /send message/i })).not.toBeInTheDocument();
  });

  it("posts to Formspree endpoint on submit", async () => {
    mockFetch.mockResolvedValueOnce({ ok: true });
    render(<ContactPage />);

    await userEvent.type(screen.getByLabelText(/first name/i), "Jane");
    await userEvent.type(screen.getByLabelText(/last name/i), "Smith");
    await userEvent.type(screen.getByLabelText(/email/i), "jane@example.com");
    await userEvent.type(screen.getByLabelText(/tell us about your needs/i), "Test message.");

    fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form")!);

    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    expect(mockFetch).toHaveBeenCalledWith(
      "https://formspree.io/f/mrevprbk",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("shows error message on failed submission", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ errors: [{ message: "Form is not active" }] }),
    });
    render(<ContactPage />);

    await userEvent.type(screen.getByLabelText(/first name/i), "Jane");
    await userEvent.type(screen.getByLabelText(/last name/i), "Smith");
    await userEvent.type(screen.getByLabelText(/email/i), "jane@example.com");
    await userEvent.type(screen.getByLabelText(/tell us about your needs/i), "Test message.");

    fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form")!);

    await waitFor(() => expect(screen.getByRole("alert")).toBeInTheDocument());
    expect(screen.getByRole("alert")).toHaveTextContent("Form is not active");
  });

  it("shows generic error on network failure", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"));
    render(<ContactPage />);

    await userEvent.type(screen.getByLabelText(/first name/i), "Jane");
    await userEvent.type(screen.getByLabelText(/last name/i), "Smith");
    await userEvent.type(screen.getByLabelText(/email/i), "jane@example.com");
    await userEvent.type(screen.getByLabelText(/tell us about your needs/i), "Test message.");

    fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form")!);

    await waitFor(() => expect(screen.getByRole("alert")).toBeInTheDocument());
    expect(screen.getByRole("alert")).toHaveTextContent(/network error/i);
  });
});
