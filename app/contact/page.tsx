"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

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
        const json = await res.json().catch(() => ({}));
        setErrorMessage(
          json?.errors?.[0]?.message ?? "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontFamily: "var(--font-body)",
    fontSize: 15,
    padding: "14px 16px",
    outline: "none",
    transition: "border-color 0.15s ease-out",
    appearance: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-display)",
    fontSize: 10,
    fontWeight: 400,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    marginBottom: 8,
  };

  return (
    <>
      <Nav />
      <main style={{ minHeight: "100vh", background: "var(--bg)", paddingTop: 72 }}>
        <section
          ref={ref}
          style={{
            maxWidth: 720,
            margin: "0 auto",
            padding: "80px 24px 120px",
          }}
        >
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

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease, delay: 0.06 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "var(--text)",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Tell us about
            <br />
            <span style={{ color: "#FF3000" }}>your needs.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, ease, delay: 0.12 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: 56,
              maxWidth: 480,
            }}
          >
            30-minute consultation. No pitch, no fluff. We&apos;ll tell you exactly
            what we&apos;d do differently and whether we&apos;re the right fit.
          </motion.p>

          {/* Success state */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease }}
              style={{
                border: "1px solid var(--border)",
                padding: "48px 40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  border: "1px solid #FF3000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10l4 4 8-8"
                    stroke="#FF3000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text)",
                  marginBottom: 8,
                }}
              >
                Message Sent
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--text-muted)",
                }}
              >
                We&apos;ll be in touch within one business day.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease, delay: 0.18 }}
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Name row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 20,
                }}
                className="contact-name-grid"
              >
                <div>
                  <label htmlFor="firstName" style={labelStyle}>
                    First Name <span style={{ color: "#FF3000" }}>*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="Jane"
                    style={inputStyle}
                    onFocus={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "var(--text)")
                    }
                    onBlur={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                    }
                  />
                </div>
                <div>
                  <label htmlFor="lastName" style={labelStyle}>
                    Last Name <span style={{ color: "#FF3000" }}>*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Smith"
                    style={inputStyle}
                    onFocus={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "var(--text)")
                    }
                    onBlur={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                    }
                  />
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: 20 }}>
                <label htmlFor="email" style={labelStyle}>
                  Email <span style={{ color: "#FF3000" }}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  style={inputStyle}
                  onFocus={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--text)")
                  }
                  onBlur={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                  }
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: 32 }}>
                <label htmlFor="message" style={labelStyle}>
                  Tell us about your needs <span style={{ color: "#FF3000" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Describe your project, goals, or challenges..."
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: 140,
                    fontFamily: "var(--font-body)",
                  }}
                  onFocus={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--text)")
                  }
                  onBlur={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                  }
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p
                  role="alert"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "#FF3000",
                    marginBottom: 20,
                    border: "1px solid rgba(255,48,0,0.3)",
                    padding: "10px 14px",
                  }}
                >
                  {errorMessage}
                </p>
              )}

              {/* Submit */}
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
                  if (status !== "submitting") {
                    (e.currentTarget as HTMLElement).style.background = "#FF3000";
                  }
                }}
                onMouseLeave={(e) => {
                  if (status !== "submitting") {
                    (e.currentTarget as HTMLElement).style.background = "var(--text)";
                  }
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
            </motion.form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
