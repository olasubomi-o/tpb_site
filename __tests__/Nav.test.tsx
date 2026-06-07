import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock next/navigation
const mockUsePathname = jest.fn();
jest.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

// Mock next/link to render a plain <a> so href is inspectable
jest.mock("next/link", () => {
  const Link = ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  );
  Link.displayName = "Link";
  return Link;
});

import Nav from "../components/Nav";

describe("Nav — navigation href resolution", () => {
  beforeEach(() => {
    // Suppress localStorage errors in jsdom
    Object.defineProperty(window, "localStorage", {
      value: { getItem: jest.fn(() => null), setItem: jest.fn() },
      writable: true,
    });
  });

  describe("when on the home page (/)", () => {
    beforeEach(() => mockUsePathname.mockReturnValue("/"));

    it("logo links to /", () => {
      render(<Nav />);
      const logo = screen.getByLabelText("The Product Builders home");
      expect(logo).toHaveAttribute("href", "/");
    });

    it("anchor nav links keep their hash hrefs", () => {
      render(<Nav />);
      const servicesLinks = screen.getAllByText("Services");
      // At least one rendered link should point to #services
      const hasHashLink = servicesLinks.some(
        (el) => el.closest("a")?.getAttribute("href") === "#services"
      );
      expect(hasHashLink).toBe(true);
    });

    it("Work With Us links to #contact on home page", () => {
      render(<Nav />);
      const cwu = screen.getAllByText("Work With Us");
      expect(cwu[0].closest("a")).toHaveAttribute("href", "#contact");
    });
  });

  describe("when on a case study page (/case-studies/some-slug)", () => {
    beforeEach(() => mockUsePathname.mockReturnValue("/case-studies/some-slug"));

    it("logo still links to /", () => {
      render(<Nav />);
      const logo = screen.getByLabelText("The Product Builders home");
      expect(logo).toHaveAttribute("href", "/");
    });

    it("anchor nav links are prefixed with / to redirect home", () => {
      render(<Nav />);
      const servicesLinks = screen.getAllByText("Services");
      const hasAbsoluteLink = servicesLinks.some(
        (el) => el.closest("a")?.getAttribute("href") === "/#services"
      );
      expect(hasAbsoluteLink).toBe(true);
    });

    it("About nav link resolves to /#about from a subpage", () => {
      render(<Nav />);
      const aboutLinks = screen.getAllByText("About");
      const hasAbsoluteLink = aboutLinks.some(
        (el) => el.closest("a")?.getAttribute("href") === "/#about"
      );
      expect(hasAbsoluteLink).toBe(true);
    });

    it("Work With Us links to /#contact from a subpage", () => {
      render(<Nav />);
      const cwu = screen.getAllByText("Work With Us");
      expect(cwu[0].closest("a")).toHaveAttribute("href", "/#contact");
    });

    it("Case Studies link (page route) is unchanged", () => {
      render(<Nav />);
      const caseStudiesLinks = screen.getAllByText("Case Studies");
      const hasCorrectHref = caseStudiesLinks.some(
        (el) => el.closest("a")?.getAttribute("href") === "/case-studies"
      );
      expect(hasCorrectHref).toBe(true);
    });
  });
});
