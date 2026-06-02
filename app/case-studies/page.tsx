"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  type CaseStudy,
  caseStudies,
  featuredCaseStudies,
  nonFeaturedCaseStudies,
} from "@/lib/caseStudyData";


const ease: [number, number, number, number] = [0, 0, 0.2, 1];

const featuredStudies = featuredCaseStudies;
const allStudies = nonFeaturedCaseStudies;

function CaseStudyCard({
  study,
  index,
  inView,
  large = false,
}: {
  study: CaseStudy;
  index: number;
  inView: boolean;
  large?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, ease, delay: 0.06 + index * 0.08 }}
      style={{
        borderBottom: "1px solid var(--border)",
        padding: large ? "80px 0" : "56px 0",
      }}
      className="case-study-card"
    >
      {large ? (
        <div className="case-study-large">
          {/* Cover image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(260px, 32vw, 480px)",
              overflow: "hidden",
              marginBottom: 56,
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
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, var(--bg) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Top row: meta */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginBottom: 48,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "4px 10px",
                border: "1px solid #FF3000",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 9,
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#FF3000",
                }}
              >
                Featured
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              {study.industry}
            </span>
            <div style={{ width: 1, height: 16, background: "var(--border)" }} />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              {study.engagement}
            </span>
            <div style={{ width: 1, height: 16, background: "var(--border)" }} />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              {study.duration}
            </span>
          </div>

          {/* Headline */}
          <div className="case-study-large-grid">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: 16,
                }}
              >
                {study.client}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 2.8vw, 40px)",
                  fontWeight: 700,
                  color: "var(--text)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  marginBottom: 40,
                }}
              >
                {study.headline}
              </h3>

              {/* Challenge + Approach */}
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 9,
                      fontWeight: 400,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#FF3000",
                      marginBottom: 10,
                    }}
                  >
                    The Challenge
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                      maxWidth: 560,
                    }}
                  >
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 9,
                      fontWeight: 400,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#FF3000",
                      marginBottom: 10,
                    }}
                  >
                    Our Approach
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                      maxWidth: 560,
                    }}
                  >
                    {study.approach}
                  </p>
                </div>
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 9,
                  fontWeight: 400,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#FF3000",
                  marginBottom: 32,
                }}
              >
                Outcomes
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {study.outcomes.map((outcome, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 20,
                      alignItems: "flex-start",
                      padding: "20px 0",
                      borderBottom: i < study.outcomes.length - 1 ? "1px solid var(--border)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 11,
                        color: "#FF3000",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        fontWeight: 400,
                        color: "var(--text)",
                        lineHeight: 1.6,
                      }}
                    >
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags + Learn More */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginTop: 40 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 9,
                        fontWeight: 400,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        padding: "4px 10px",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${study.id}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: "var(--font-display)",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#080808",
                    background: "#F5F5F0",
                    padding: "14px 28px",
                    textDecoration: "none",
                    minHeight: 48,
                    border: "1px solid #F5F5F0",
                    whiteSpace: "nowrap",
                    transition: "background 0.15s ease-out, border-color 0.15s ease-out",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#FF3000";
                    (e.currentTarget as HTMLElement).style.borderColor = "#FF3000";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#F5F5F0";
                    (e.currentTarget as HTMLElement).style.borderColor = "#F5F5F0";
                  }}
                >
                  Read Full Case Study
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Compact layout for non-featured */
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr auto",
            gap: 48,
            alignItems: "start",
          }}
          className="case-study-compact"
        >
          {/* Left: thumbnail + meta */}
          <div>
            <div
              style={{
                width: "100%",
                height: 160,
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
                  transition: "transform 0.4s ease-out",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 8,
              }}
            >
              {study.industry}
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 8,
              }}
            >
              {study.engagement}
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF3000",
              }}
            >
              {study.duration}
            </p>
          </div>

          {/* Center: content */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 12,
              }}
            >
              {study.client}
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(18px, 2vw, 28px)",
                fontWeight: 700,
                color: "var(--text)",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              {study.headline}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                fontWeight: 400,
                color: "var(--text-muted)",
                lineHeight: 1.75,
                maxWidth: 520,
                marginBottom: 24,
              }}
            >
              {study.challenge}
            </p>

            {/* Outcomes condensed */}
            <div style={{ borderLeft: "2px solid #FF3000", paddingLeft: 16 }}>
              {study.outcomes.slice(0, 2).map((outcome, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 10,
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: i < 1 ? 8 : 0,
                  }}
                >
                  {outcome}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 9,
                    fontWeight: 400,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    padding: "4px 10px",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div style={{ paddingTop: 4 }}>
            <Link
              href={`/case-studies/${study.id}`}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text)",
                background: "transparent",
                padding: "12px 24px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 44,
                border: "1px solid var(--border)",
                whiteSpace: "nowrap",
                transition: "background 0.15s ease-out, color 0.15s ease-out, border-color 0.15s ease-out",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FF3000";
                (e.currentTarget as HTMLElement).style.borderColor = "#FF3000";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
            >
              Learn More
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const allRef = useRef(null);
  const ctaRef = useRef(null);

  const featuredInView = useInView(featuredRef, { once: true, margin: "-80px" });
  const allInView = useInView(allRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .case-study-compact {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .case-study-large-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .case-study-compact img {
            height: 200px !important;
          }
        }
        .case-study-large-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: start;
        }
      `}</style>

      <Nav />
      <main>
        {/* ── Hero ── */}
        <section
          ref={heroRef}
          style={{
            position: "relative",
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: "var(--bg)",
            borderBottom: "1px solid var(--border)",
            overflow: "hidden",
          }}
        >
          <div className="pattern-dots" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "160px 40px 80px",
              position: "relative",
              zIndex: 1,
              width: "100%",
            }}
          >
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease }}
              style={{ marginBottom: 56 }}
            >
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "var(--font-display)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.15s ease-out",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#FF3000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13 7H1M7 13L1 7l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Home
              </Link>
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease, delay: 0.05 }}
              style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}
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
                Proof of Work /
              </span>
              <div style={{ width: 32, height: 1, background: "var(--border)" }} />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                The Product Builders
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease, delay: 0.08 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(44px, 7vw, 108px)",
                fontWeight: 700,
                lineHeight: 1.0,
                color: "var(--text)",
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                marginBottom: 0,
              }}
            >
              Case
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease, delay: 0.14 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(44px, 7vw, 108px)",
                fontWeight: 700,
                lineHeight: 1.0,
                color: "#FF3000",
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                marginBottom: 48,
              }}
            >
              Studies
            </motion.h1>

            {/* Sub row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease, delay: 0.22 }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: 32,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(15px, 1.3vw, 18px)",
                  fontWeight: 400,
                  color: "var(--text-muted)",
                  maxWidth: 560,
                  lineHeight: 1.7,
                }}
              >
                Real engagements. Real outcomes. A selection of the work we have
                done with enterprise teams, founders, and operators across industries.
              </p>

              <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(28px, 3vw, 40px)",
                      fontWeight: 700,
                      color: "#FF3000",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {caseStudies.length}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 9,
                      fontWeight: 400,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginTop: 6,
                    }}
                  >
                    Studies
                  </div>
                </div>
                <div style={{ width: 1, height: 40, background: "var(--border)" }} />
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(28px, 3vw, 40px)",
                      fontWeight: 700,
                      color: "#FF3000",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    5+
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 9,
                      fontWeight: 400,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginTop: 6,
                    }}
                  >
                    Industries
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Featured Case Studies ── */}
        <section
          ref={featuredRef}
          style={{
            background: "var(--bg)",
            padding: "120px 0",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease }}
              style={{ marginBottom: 16 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    background: "#FF3000",
                  }}
                />
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
                  Featured
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                  textTransform: "uppercase",
                }}
              >
                Deep Dives
              </h2>
            </motion.div>

            <div style={{ borderTop: "1px solid var(--border)" }}>
              {featuredStudies.map((study, i) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  index={i}
                  inView={featuredInView}
                  large
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── All Case Studies ── */}
        <section
          ref={allRef}
          className="pattern-grid"
          style={{
            background: "var(--bg-secondary)",
            padding: "120px 0",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={allInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease }}
              style={{ marginBottom: 16 }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                More Work
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                  textTransform: "uppercase",
                  marginTop: 8,
                }}
              >
                More Engagements
              </h2>
            </motion.div>

            <div style={{ borderTop: "1px solid var(--border)" }}>
              {allStudies.map((study, i) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  index={i}
                  inView={allInView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          ref={ctaRef}
          style={{
            background: "var(--bg-secondary)",
            padding: "160px 40px",
            borderBottom: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
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

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 900,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  marginBottom: 56,
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
                  Work With Us
                </span>
                <div style={{ width: 24, height: 1, background: "var(--border)" }} />
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 4vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                  textTransform: "uppercase",
                  maxWidth: 700,
                  margin: "0 auto 32px",
                }}
              >
                Want Results{" "}
                <span style={{ color: "#FF3000" }}>Like These?</span>
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  fontWeight: 400,
                  color: "var(--text-muted)",
                  maxWidth: 480,
                  margin: "0 auto 56px",
                  lineHeight: 1.7,
                }}
              >
                Every engagement starts with a strategy call. We spend 30 minutes
                understanding your context before we propose anything.
              </p>

              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="mailto:hello@theproductbuilders.co?subject=Strategy%20Call%20Request"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    background: "#F5F5F0",
                    color: "#080808",
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "18px 40px",
                    textDecoration: "none",
                    minHeight: 56,
                    border: "1px solid #F5F5F0",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#FF3000";
                    (e.currentTarget as HTMLElement).style.borderColor = "#FF3000";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#F5F5F0";
                    (e.currentTarget as HTMLElement).style.borderColor = "#F5F5F0";
                  }}
                >
                  Book a Strategy Call
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
