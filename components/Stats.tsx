"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

function useCountUp(target: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

const stats = [
  { value: 15, suffix: "+", label: "Years Operating at Fortune 500 Scale", unit: "" },
  { value: 250, suffix: "+", label: "Professionals Trained", unit: "" },
  { value: 9, suffix: "", label: "Organizations Transformed", unit: "" },
  { value: 5, suffix: "", label: "Months from Concept to First Customer", unit: "" },
];

function StatItem({
  stat,
  start,
}: {
  stat: (typeof stats)[0];
  start: boolean;
}) {
  const count = useCountUp(stat.value, 1200, start);
  return (
    <div
      className="stat-item"
      style={{
        padding: "48px 32px",
        textAlign: "center",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(52px, 6vw, 80px)",
          fontWeight: 700,
          color: "#FF3000",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {count}
        {stat.suffix}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 10,
          fontWeight: 400,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginTop: 16,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="proof"
      ref={ref}
      className="pattern-stripes"
      style={{
        background: "var(--bg)",
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
            04 /
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
            Proof of Work
          </span>
        </motion.div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 0,
            marginBottom: 120,
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease, delay: i * 0.07 }}
            >
              <StatItem stat={s} start={inView} />
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease, delay: 0.3 }}
          style={{
            position: "relative",
            maxWidth: 800,
            padding: "64px",
            border: "1px solid var(--border)",
            background: "var(--bg-secondary)",
          }}
        >
          {/* Large quote mark */}
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 80,
              lineHeight: 1,
              color: "#FF3000",
              opacity: 0.3,
              position: "absolute",
              top: 32,
              left: 48,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            &ldquo;
          </div>

          <blockquote
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(22px, 3vw, 36px)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.4,
              color: "var(--text)",
              position: "relative",
              zIndex: 1,
              marginBottom: 40,
              paddingTop: 24,
            }}
          >
            It was amazing and eye-opening
          </blockquote>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 24,
                height: 1,
                background: "#FF3000",
              }}
            />
            <cite
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                fontStyle: "normal",
              }}
            >
              Workshop Participant &middot; AI Workforce Training
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
