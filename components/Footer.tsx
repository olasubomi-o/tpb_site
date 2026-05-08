"use client";

import Link from "next/link";

const serviceLinks = [
  { label: "Product Development", href: "/services/technology" },
  { label: "Product Strategy", href: "/services/strategy" },
  { label: "Product Design", href: "/services/design" },
  { label: "Workforce Training", href: "/services/workforce-training" },
  { label: "AI Implementation", href: "/services/ai" },
];

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Workshop", href: "/#course" },
  { label: "Contact", href: "/#contact" },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 14,
  fontWeight: 400,
  color: "var(--text-muted)",
  textDecoration: "none",
  transition: "color 0.15s ease-out",
  minHeight: 28,
  display: "inline-flex",
  alignItems: "center",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "80px 40px 48px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 80,
            paddingBottom: 64,
            borderBottom: "1px solid var(--border)",
            marginBottom: 40,
          }}
          className="grid-cols-1 md:grid-cols-[2fr_1fr_1fr]"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: 20,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              The Product Builders
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 400,
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: 320,
                marginBottom: 32,
              }}
            >
              Operators from Fortune 500 and startups. Now
              building the products and capabilities that define your next decade.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg
                width="12"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{ color: "#FF3000", flexShrink: 0 }}
              >
                <path
                  d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <circle cx="7" cy="5" r="1.2" fill="currentColor" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                New York City
              </span>
            </div>
          </div>

          {/* Services links */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 24,
              }}
            >
              Services
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={linkStyle}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 24,
              }}
            >
              Company
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={linkStyle}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
            }}
          >
            &copy; {year} The Product Builders. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
            }}
          >
            hello@theproductbuilders.com
          </p>
        </div>
      </div>
    </footer>
  );
}
