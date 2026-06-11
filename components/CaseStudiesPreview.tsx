"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudyData";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

function CaseStudyCard({
  study,
  index,
  inView,
}: {
  study: (typeof caseStudies)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, ease, delay: 0.1 + index * 0.08 }}
    >
      <Link
        href={`/case-studies/${study.id}`}
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image panel */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3 / 4",
            overflow: "hidden",
            marginBottom: 20,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={study.coverImage}
            alt={study.headline}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              filter: "grayscale(20%)",
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.4s ease-out",
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: hovered
                ? "linear-gradient(to top, var(--bg) 10%, rgba(0,0,0,0.3) 60%, transparent 100%)"
                : "linear-gradient(to top, var(--bg) 0%, transparent 60%)",
              transition: "background 0.4s ease-out",
              pointerEvents: "none",
            }}
          />
          {/* Client name overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text)",
                opacity: 0.9,
              }}
            >
              {study.client}
            </span>
          </div>
        </div>

        {/* Below image: headline + tags */}
        <div style={{ paddingBottom: 8 }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(13px, 1.1vw, 16px)",
              fontWeight: 700,
              color: "var(--text)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              marginBottom: 12,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              transition: "color 0.15s ease-out",
            }}
          >
            {study.headline}
          </p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {study.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 8,
                  fontWeight: 400,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  padding: "3px 8px",
                  border: "1px solid var(--border)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudiesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border)",
        padding: "120px 0",
      }}
    >
      <style>{`
        .work-preview-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .work-preview-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .work-preview-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 64,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div style={{ marginBottom: 12 }}>
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
                Our Work /
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
                Case Studies
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.0,
                color: "var(--text)",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
              }}
            >
              Selected Work
            </h2>
          </div>

          <Link
            href="/case-studies"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-display)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.15s ease-out",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#FF3000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
            }}
          >
            See all the work
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 6h10M6 1l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="work-preview-grid">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
