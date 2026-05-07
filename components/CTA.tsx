"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "var(--bg-secondary)",
        padding: "160px 40px",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corner accents */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          width: 40,
          height: 40,
          borderTop: "1px solid var(--border)",
          borderLeft: "1px solid var(--border)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          width: 40,
          height: 40,
          borderTop: "1px solid var(--border)",
          borderRight: "1px solid var(--border)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          width: 40,
          height: 40,
          borderBottom: "1px solid var(--border)",
          borderLeft: "1px solid var(--border)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          width: 40,
          height: 40,
          borderBottom: "1px solid var(--border)",
          borderRight: "1px solid var(--border)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 56,
          }}
        >
          <div
            style={{ width: 24, height: 1, background: "var(--border)" }}
          />
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
            Let&apos;s Build Together
          </span>
          <div
            style={{ width: 24, height: 1, background: "var(--border)" }}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease, delay: 0.08 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4.5vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "var(--text)",
            textTransform: "uppercase",
            maxWidth: 780,
            margin: "0 auto 48px",
          }}
        >
          Some ideas deserve more than a consulting firm.
          They deserve operators who&apos;ve{" "}
          <span style={{ color: "#FF3000" }}>done it before.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, ease, delay: 0.14 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            fontWeight: 400,
            color: "var(--text-muted)",
            maxWidth: 440,
            margin: "0 auto 56px",
            lineHeight: 1.7,
          }}
        >
          30-minute consultation. No pitch, no fluff. We&apos;ll tell you exactly what
          we&apos;d do differently — and whether we&apos;re the right fit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease, delay: 0.2 }}
        >
          <a
            href="mailto:hello@theproductbuilders.co"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "var(--text)",
              color: "var(--bg)",
              fontFamily: "var(--font-display)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "20px 48px",
              textDecoration: "none",
              minHeight: 60,
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
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M1 8h14M8 1l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
