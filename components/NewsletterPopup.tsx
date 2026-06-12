"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "tpb_newsletter_dismissed";
const DELAY_MS = 10000;

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      timer = setTimeout(() => setVisible(true), DELAY_MS);
    }

    const open = () => setVisible(true);
    window.addEventListener("tpb:open-newsletter", open);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("tpb:open-newsletter", open);
    };
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={dismiss}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(8, 8, 8, 0.7)",
              zIndex: 10000,
              backdropFilter: "blur(2px)",
            }}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Subscribe to our newsletter"
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 10001,
              background: "var(--bg-secondary)",
              borderTop: "1px solid var(--border)",
              padding: "48px 24px",
            }}
          >
            {/* Corner accents */}
            <div style={{ position: "absolute", top: 20, left: 20, width: 24, height: 24, borderTop: "1px solid var(--border)", borderLeft: "1px solid var(--border)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 20, right: 20, width: 24, height: 24, borderTop: "1px solid var(--border)", borderRight: "1px solid var(--border)", pointerEvents: "none" }} />

            {/* Close */}
            <button
              onClick={dismiss}
              aria-label="Close newsletter popup"
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "none",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                padding: 4,
                lineHeight: 1,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
              {/* Eyebrow */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 20, height: 1, background: "var(--border)" }} />
                <span style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FF3000" }}>
                  The Product Builders Newsletter
                </span>
                <div style={{ width: 20, height: 1, background: "var(--border)" }} />
              </div>

              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.01em", textTransform: "uppercase", color: "var(--text)", lineHeight: 1.15, margin: "0 0 16px" }}>
              The AI briefing for product leaders and executives{" "}
                <span style={{ color: "#FF3000" }}>who want to lead</span>
              </h2>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 32px" }}>
              Each week, get the AI developments that actually matter for your business, practical things you didn't know AI could do, and quick translations of the jargon everyone's throwing around — all in under 5 minutes. No hype, no noise, just what you need to make smarter calls.              </p>

              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="https://theproductbuilders.substack.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#FF3000",
                    color: "#F5F5F0",
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "16px 36px",
                    textDecoration: "none",
                    border: "1px solid #FF3000",
                    minHeight: 52,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--text)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--text)";
                    (e.currentTarget as HTMLElement).style.color = "var(--bg)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#FF3000";
                    (e.currentTarget as HTMLElement).style.borderColor = "#FF3000";
                    (e.currentTarget as HTMLElement).style.color = "#F5F5F0";
                  }}
                >
                  Subscribe Free
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                <button
                  onClick={dismiss}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "none",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "16px 24px",
                    border: "1px solid var(--border)",
                    cursor: "pointer",
                    minHeight: 52,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--text-muted)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  }}
                >
                  Not now
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
