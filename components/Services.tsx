"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/serviceData";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      className="pattern-grid section-py"
      style={{
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-inner" style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 80,
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          <div>
            <div style={{ marginBottom: 20 }}>
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
                03 /
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
                What We Do
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                color: "var(--text)",
                textTransform: "uppercase",
              }}
            >
              Five Capabilities.
              <br />
              One Integrated Team.
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 400,
              color: "var(--text-muted)",
              maxWidth: 360,
              lineHeight: 1.7,
            }}
          >
Strategy, design, AI, technology, and workforce training. Every capability delivered by operators who&apos;ve built at Fortune 500 scale and startups.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="services-grid">
          {services.map((s, i) => {
            const isHovered = hovered === i;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                style={{ textDecoration: "none" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, ease, delay: 0.05 + i * 0.06 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="service-card-padding"
                  style={{
                    background: isHovered ? "#FF3000" : "var(--bg-secondary)",
                    color: isHovered ? "#080808" : "var(--text)",
                    cursor: "pointer",
                    position: "relative",
                    borderRight: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                    height: "100%",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      color: isHovered ? "#080808" : "var(--text-muted)",
                      marginBottom: 28,
                    }}
                  >
                    {s.icon}
                  </div>

                  {/* Name */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: 1.2,
                      color: "inherit",
                      marginBottom: 12,
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.name}
                  </h3>

                  {/* Tagline */}
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      fontWeight: 500,
                      color: isHovered
                        ? "rgba(8,8,8,0.75)"
                        : "var(--text-muted)",
                      lineHeight: 1.5,
                      marginBottom: 28,
                    }}
                  >
                    {s.tagline}
                  </p>

                  {/* Arrow link */}
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: isHovered ? "#080808" : "#FF3000",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    Learn More
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>

                  {/* Detail on hover */}
                  <div
                    style={{
                      maxHeight: isHovered ? 200 : 0,
                      overflow: "hidden",
                      opacity: isHovered ? 1 : 0,
                      transition:
                        "max-height 0.15s ease-out, opacity 0.15s ease-out",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        fontWeight: 400,
                        color: "rgba(8,8,8,0.8)",
                        lineHeight: 1.7,
                        marginTop: 20,
                        paddingTop: 20,
                        borderTop: "1px solid rgba(8,8,8,0.2)",
                      }}
                    >
                      {s.detail}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
