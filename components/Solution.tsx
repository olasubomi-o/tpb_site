"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

const items = [
  {
    title: "Operators, not consultants",
    body: "Every person on our team has sat in the room where the hard decisions get made and lived with the consequences. When we say we've done this before, we mean exactly that.",
  },
  {
    title: "Accountable to outcomes",
    body: "We don't hand you a 90-page deck and disappear. We embed, we build, and we measure against outcomes not deliverables. One healthcare client went from zero to first paying customer in 5 months. That's the standard we hold ourselves to.",
  },
  {
    title: "AI that moves the needle",
    body: "We've deployed AI systems inside enterprise environments and trained the workforces that use them. We know which use cases generate ROI and which ones generate noise. We'll help you build what actually matters to your business.",
  },
  {
    title: "Built for this moment",
    body: "The window to build durable competitive advantage is open but not indefinitely. Whether you're an enterprise accelerating transformation or a founder who needs execution partners, the organizations that act now are the ones that lead next.",
  },
];

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="solution"
      ref={ref}
      className="section-py"
      style={{
        background: "var(--bg)",
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
            02 /
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
            The Difference
          </span>
        </motion.div>

        <div className="responsive-grid-5-7">
          {/* Left: Bold statement */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, ease, delay: 0.08 }}
          >
            <h2
              className="sticky-on-desktop"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4.5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "var(--text)",
                textTransform: "uppercase",
                position: "sticky",
                top: 120,
              }}
            >
              We don&apos;t
              <br />
              <span style={{ color: "#FF3000" }}>advise.</span>
              <br />
              We build.
            </h2>
          </motion.div>

          {/* Right: paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, ease, delay: 0.12 }}
            style={{ display: "flex", flexDirection: "column", gap: 0 }}
          >
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, ease, delay: 0.15 + i * 0.06 }}
                style={{
                  paddingBottom: 40,
                  paddingTop: i > 0 ? 40 : 0,
                  borderBottom:
                    i < items.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#FF3000",
                    marginBottom: 16,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: 1.75,
                    color: "var(--text-secondary)",
                  }}
                >
                  {item.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
