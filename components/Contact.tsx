"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "1px solid var(--border)",
  color: "var(--text)",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  fontWeight: 400,
  padding: "14px 16px",
  outline: "none",
  transition: "border-color 0.15s ease-out",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 10,
  fontWeight: 400,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: "var(--text-muted)",
  display: "block",
  marginBottom: 8,
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mrevprbk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "120px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corner accents */}
      {[
        { top: 40, left: 40, borderTop: "1px solid var(--border)", borderLeft: "1px solid var(--border)" },
        { top: 40, right: 40, borderTop: "1px solid var(--border)", borderRight: "1px solid var(--border)" },
        { bottom: 40, left: 40, borderBottom: "1px solid var(--border)", borderLeft: "1px solid var(--border)" },
        { bottom: 40, right: 40, borderBottom: "1px solid var(--border)", borderRight: "1px solid var(--border)" },
      ].map((style, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            pointerEvents: "none",
            ...style,
          }}
        />
      ))}

      <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div style={{ width: 24, height: 1, background: "var(--border)" }} />
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
            Get In Touch
          </span>
          <div style={{ width: 24, height: 1, background: "var(--border)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease, delay: 0.08 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3.5vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "var(--text)",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Start the conversation.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, ease, delay: 0.14 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "var(--text-muted)",
            lineHeight: 1.7,
            marginBottom: 64,
            maxWidth: 480,
          }}
        >
          Tell us about your project. We respond within one business day.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Smith"
                style={{
                  ...inputStyle,
                  borderColor: focusedField === "name" ? "var(--text)" : "var(--border)",
                }}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                style={{
                  ...inputStyle,
                  borderColor: focusedField === "email" ? "var(--text)" : "var(--border)",
                }}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" style={labelStyle}>Company</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Acme Corp"
              style={{
                ...inputStyle,
                borderColor: focusedField === "company" ? "var(--text)" : "var(--border)",
              }}
              onFocus={() => setFocusedField("company")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <div>
            <label htmlFor="message" style={labelStyle}>What are you building?</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project, challenges, and what you're hoping to accomplish..."
              style={{
                ...inputStyle,
                resize: "vertical",
                borderColor: focusedField === "message" ? "var(--text)" : "var(--border)",
              }}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          {status === "error" && (
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FF3000",
              }}
            >
              Something went wrong. Please try again or email us directly at hello@theproductbuilders.com
            </p>
          )}

          {status === "success" ? (
            <div
              style={{
                padding: "20px 24px",
                border: "1px solid var(--border)",
                background: "var(--bg-secondary)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text)",
                }}
              >
                Message received — we&apos;ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <div>
              <button
                type="submit"
                disabled={status === "submitting"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  background: status === "submitting" ? "var(--text-muted)" : "var(--text)",
                  color: "var(--bg)",
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "20px 48px",
                  border: "none",
                  cursor: status === "submitting" ? "not-allowed" : "pointer",
                  minHeight: 60,
                  transition: "background 0.15s ease-out",
                }}
                onMouseEnter={(e) => {
                  if (status !== "submitting")
                    (e.currentTarget as HTMLElement).style.background = "#FF3000";
                }}
                onMouseLeave={(e) => {
                  if (status !== "submitting")
                    (e.currentTarget as HTMLElement).style.background = "var(--text)";
                }}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                {status !== "submitting" && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M1 8h14M8 1l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
