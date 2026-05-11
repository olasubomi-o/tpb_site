"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Workshop", href: "#course" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("tpb-theme") as "dark" | "light" | null;
    const initial = saved ?? "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("tpb-theme", next);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "var(--bg-nav-scrolled)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition:
            "background 0.15s ease-out, border-color 0.15s ease-out",
        }}
      >
        <div
          className="container-inner"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo wordmark */}
          <a
            href="#"
            style={{ textDecoration: "none" }}
            aria-label="The Product Builders home"
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13,
                fontWeight: 700,
                color: "var(--text)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              The Product Builders
            </span>
          </a>

          {/* Desktop links */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: 36 }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  minHeight: 44,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <span className="nav-default">{l.label}</span>
                <span className="nav-hover">{l.label}</span>
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              style={{
                background: "none",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                padding: "6px 12px",
                cursor: "pointer",
                minHeight: 44,
                minWidth: 44,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "border-color 0.15s ease-out, color 0.15s ease-out",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#FF3000";
                (e.currentTarget as HTMLElement).style.color = "#FF3000";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-muted)";
              }}
            >
              {theme === "dark" ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M6 1v1M6 10v1M1 6h1M10 6h1M2.5 2.5l.7.7M8.8 8.8l.7.7M2.5 9.5l.7-.7M8.8 3.2l.7-.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 6.5A4.5 4.5 0 0 1 5.5 2a4.5 4.5 0 1 0 4.5 4.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              )}
              {theme === "dark" ? "Light" : "Dark"}
            </button>

            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--bg)",
                background: "var(--text)",
                padding: "10px 24px",
                textDecoration: "none",
                minHeight: 44,
                display: "inline-flex",
                alignItems: "center",
                border: "1px solid var(--text)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FF3000";
                (e.currentTarget as HTMLElement).style.borderColor = "#FF3000";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--text)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--text)";
              }}
            >
              Work With Us
            </a>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden" style={{ alignItems: "center", gap: 12 }}>
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              style={{
                background: "none",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                padding: "6px 10px",
                cursor: "pointer",
                minHeight: 44,
                minWidth: 44,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {theme === "dark" ? (
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M6 1v1M6 10v1M1 6h1M10 6h1M2.5 2.5l.7.7M8.8 8.8l.7.7M2.5 9.5l.7-.7M8.8 3.2l.7-.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M10 6.5A4.5 4.5 0 0 1 5.5 2a4.5 4.5 0 1 0 4.5 4.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                display: "flex",
                flexDirection: "column",
                gap: 5,
                minHeight: 44,
                minWidth: 44,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: 22,
                    height: 1,
                    background:
                      menuOpen && i === 1 ? "transparent" : "var(--text)",
                    transition: "all 0.15s ease-out",
                    transform: menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(4px, 4px)"
                        : i === 2
                        ? "rotate(-45deg) translate(4px, -4px)"
                        : "none"
                      : "none",
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 72,
            left: 0,
            right: 0,
            background: "var(--bg)",
            zIndex: 99,
            padding: "32px 24px 40px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-display)",
                fontSize: 28,
                fontWeight: 700,
                color: "var(--text)",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                padding: "14px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-flex",
              marginTop: 24,
              fontFamily: "var(--font-display)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--bg)",
              background: "var(--text)",
              padding: "14px 32px",
              textDecoration: "none",
              minHeight: 44,
              alignItems: "center",
            }}
          >
            Work With Us
          </a>
        </div>
      )}
    </>
  );
}
