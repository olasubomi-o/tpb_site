"use client";

import { motion } from "framer-motion";

const credentials = [
  { name: "Apple", domain: "apple.com" },
  { name: "Mastercard", domain: "mastercard.com" },
  { name: "Toyota", domain: "toyota.com" },
  { name: "Warner Bros", domain: "warnerbros.com" },
  { name: "NCR", domain: "ncr.com" },
  { name: "GoPuff", domain: "gopuff.com" },
  { name: "Eli Lilly", domain: "lilly.com" },
  { name: "BASF", domain: "basf.com" },
];

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Pixel dot matrix */}
      <div
        className="pattern-dots"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "160px 40px 80px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 56,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#FF3000",
            }}
          >
            Product Strategy · AI · Technology
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease, delay: 0.05 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 120px)",
            fontWeight: 700,
            lineHeight: 1.0,
            color: "var(--text)",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            maxWidth: 1000,
            marginBottom: 0,
          }}
        >
          Fortune 500
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 120px)",
            fontWeight: 700,
            lineHeight: 1.0,
            color: "var(--text)",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            maxWidth: 1000,
            marginBottom: 0,
          }}
        >
          Operators.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease, delay: 0.15 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 120px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            maxWidth: 1000,
            marginBottom: 56,
          }}
        >
          <span style={{ color: "#FF3000" }}>Now Building</span>{" "}
          <span style={{ color: "#FF3000" }}>With You.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px, 1.4vw, 18px)",
            fontWeight: 400,
            color: "var(--text-muted)",
            maxWidth: 540,
            lineHeight: 1.7,
            marginBottom: 48,
          }}
        >
          We&apos;ve shipped inside Apple, Mastercard, Toyota, and Warner Bros.
          Now we bring that operator edge to your product: faster decisions,
          fewer wrong turns, outcomes that matter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease, delay: 0.25 }}
          style={{ display: "flex", gap: 15, flexWrap: "wrap" }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--text)",
              color: "var(--bg)",
              fontFamily: "var(--font-display)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "16px 36px",
              textDecoration: "none",
              minHeight: 52,
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
            Book a Strategy Call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "transparent",
              color: "var(--text)",
              fontFamily: "var(--font-display)",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "16px 36px",
              textDecoration: "none",
              border: "1px solid var(--border)",
              minHeight: 52,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#FF3000";
              (e.currentTarget as HTMLElement).style.color = "#FF3000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
          >
            View Services
          </a>
        </motion.div>

        {/* Credential bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          style={{
            marginTop: 96,
            paddingTop: 40,
            borderTop: "1px solid var(--border)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 24,
            }}
          >
            Operators from
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px 16px",
              alignItems: "center",
            }}
          >
            {credentials.map(({ name, domain }) => (
              <span
                key={name}
                style={{
                  padding: "8px 16px",
                  border: "1px solid var(--border)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.15s ease-out, opacity 0.15s ease-out",
                  cursor: "default",
                  opacity: 0.5,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.setProperty("border-color", "#FF3000");
                  (e.currentTarget as HTMLElement).style.setProperty("opacity", "1");
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.setProperty("border-color", "var(--border)");
                  (e.currentTarget as HTMLElement).style.setProperty("opacity", "0.5");
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.logo.dev/${domain}?token=${process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN}&size=80&format=png&greyscale=true`}
                  alt={name}
                  height={20}
                  style={{
                    height: 20,
                    width: "auto",
                    maxWidth: 80,
                    objectFit: "contain",
                    display: "block",
                  }}
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = "none";
                    const fallback = img.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "inline";
                  }}
                />
                <span
                  style={{
                    display: "none",
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {name}
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 9,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 48,
            background: "var(--border)",
          }}
        />
      </motion.div>
    </section>
  );
}
