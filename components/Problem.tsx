"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

const problems = [
  {
    number: "01",
    text: "You have a product vision. What you're missing is the execution muscle to bring it to market without burning time and budget on wrong turns.",
  },
  {
    number: "02",
    text: "AI is reshaping your competitive landscape and your organization is moving slower than it should.",
  },
  {
    number: "03",
    text: "You've worked with agencies and consultants before. They delivered decks. Not results.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problem"
      ref={ref}
      className="section-py"
      style={{
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease }}
          style={{ marginBottom: 80 }}
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
            01 /
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
            The Challenge
          </span>
        </motion.div>

        <div className="responsive-grid-1-2">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, ease, delay: 0.08 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "var(--text)",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              Sound
              <br />
              familiar?
            </h2>
          </motion.div>

          {/* Right: pain points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {problems.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.3,
                  ease,
                  delay: 0.1 + i * 0.08,
                }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: 32,
                  padding: "40px 0",
                  borderBottom:
                    i < problems.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: "#FF3000",
                    paddingTop: 4,
                  }}
                >
                  {p.number} /
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(18px, 2vw, 26px)",
                    fontWeight: 400,
                    lineHeight: 1.35,
                    color: "var(--text)",
                  }}
                >
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
