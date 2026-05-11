"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

const weeks = [
  { num: "01", title: "Customer Discovery & Problem Validation" },
  { num: "02", title: "Product Positioning & Market Architecture" },
  { num: "03", title: "Building Your MVP Roadmap" },
  { num: "04", title: "Go-to-Market Strategy & Channel Design" },
  { num: "05", title: "Sales, Pilots & Early Revenue Loops" },
  { num: "06", title: "First Customer: From Conversation to Contract" },
];

const audienceTags = ["Accelerators", "Enterprise Teams", "Founders", "Innovation Labs"];

export default function Course() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="course"
      ref={ref}
      className="section-py"
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="responsive-grid-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, ease }}
          >
            {/* Coming soon badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                border: "1px solid #FF3000",
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  background: "#FF3000",
                  animation: "pulse 2s infinite",
                }}
              />
              <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#FF3000",
                }}
              >
                Coming Soon
              </span>
            </div>

            {/* Section label */}
            <div style={{ marginBottom: 32 }}>
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
                06 /
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginLeft: 12,
                }}
              >
                The Course
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "var(--text)",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              From Idea to First Customers{" "}
              <span style={{ color: "#FF3000" }}>Using AI</span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                fontWeight: 400,
                color: "var(--text-muted)",
                lineHeight: 1.75,
                marginBottom: 40,
                maxWidth: 480,
              }}
            >
              An intensive course built for accelerator cohorts and enterprise
              innovation teams. Every module comes from real operator experience.
            </p>

            {/* Audience tags */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
              {audienceTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 10,
                    fontWeight: 400,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    padding: "5px 10px",
                    border: "1px solid var(--border)",
                    display: "inline-block",
                  }}
                >
                  [ {tag} ]
                </span>
              ))}
            </div>

            {/* Email waitlist */}
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 10,
                    fontWeight: 400,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: 16,
                  }}
                >
                  Get early access
                </p>
                <div style={{ display: "flex", gap: 0, maxWidth: 440 }}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    style={{
                      flex: 1,
                      background: "var(--bg-secondary)",
                      border: "none",
                      borderBottom: "2px solid var(--border)",
                      color: "var(--text)",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      padding: "14px 16px",
                      outline: "none",
                      minHeight: 52,
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderBottomColor = "#FF3000";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.setProperty(
                        "border-bottom-color",
                        "var(--border)"
                      );
                    }}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      background: "var(--text)",
                      color: "var(--bg)",
                      border: "none",
                      fontFamily: "var(--font-display)",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "14px 24px",
                      cursor: loading ? "not-allowed" : "pointer",
                      whiteSpace: "nowrap",
                      minHeight: 52,
                      minWidth: 44,
                      opacity: loading ? 0.6 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) (e.currentTarget as HTMLElement).style.background = "#FF3000";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "var(--text)";
                    }}
                  >
                    {loading ? "..." : "Notify Me"}
                  </button>
                </div>
                {error && (
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "#FF3000",
                      marginTop: 10,
                    }}
                  >
                    {error}
                  </p>
                )}
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: "20px 24px",
                  border: "1px solid #FF3000",
                  background: "rgba(255,48,0,0.05)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#FF3000",
                  }}
                >
                  You&apos;re on the list. We&apos;ll reach out before enrollment opens.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right: curriculum */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, ease, delay: 0.1 }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 32,
              }}
            >
              6-Week Curriculum
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid var(--border)",
              }}
            >
              {weeks.map((w, i) => (
                <motion.div
                  key={w.num}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, ease, delay: 0.2 + i * 0.05 }}
                  style={{
                    display: "flex",
                    gap: 32,
                    padding: "24px 28px",
                    borderBottom:
                      i < weeks.length - 1 ? "1px solid var(--border)" : "none",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#FF3000",
                      minWidth: 32,
                    }}
                  >
                    W{w.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "var(--text)",
                      lineHeight: 1.3,
                    }}
                  >
                    {w.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
