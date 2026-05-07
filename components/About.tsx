"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

const founders = [
  {
    name: "Olasubomi",
    title: "Co-Founder · AI & Systems",
    bio: "Shipped AI systems and product infrastructure inside Fortune 500 environments. Knows the difference between AI that creates competitive advantage and AI that creates expensive demos. Bridges deep technical fluency with board-level strategic clarity.",
    initials: "OL",
  },
  {
    name: "Oluwaseun",
    title: "Co-Founder · Growth & Commercialization",
    bio: "Has taken products from whiteboard to first dollar across enterprise and startup environments. The commercialization engine of the firm — from market positioning and pilot design to signed contracts and repeatable revenue.",
    initials: "OS",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "var(--bg-secondary)",
        padding: "120px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
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
            05 /
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
            The Founders
          </span>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease, delay: 0.08 }}
          style={{ maxWidth: 640, marginBottom: 80 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "var(--text)",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            The Operators
            <br />
            Behind The Work
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              fontWeight: 400,
              color: "var(--text-muted)",
              lineHeight: 1.75,
            }}
          >
            Two operators. One conviction: the best product partners are the
            ones who&apos;ve already made your mistakes — and shipped anyway.
          </p>
        </motion.div>

        {/* Founder cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 0,
            border: "1px solid var(--border)",
          }}
        >
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease, delay: 0.12 + i * 0.08 }}
              style={{
                background: "var(--bg-secondary)",
                padding: "56px 48px",
                borderRight: i < founders.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              {/* Initials placeholder */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  border: "1px solid #FF3000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 36,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#FF3000",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {f.initials}
                </span>
              </div>

              {/* Info */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 2.5vw, 32px)",
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                {f.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#FF3000",
                  marginBottom: 28,
                }}
              >
                {f.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 400,
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                }}
              >
                {f.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
