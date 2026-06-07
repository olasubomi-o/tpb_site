"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getCaseStudyById, caseStudies } from "@/lib/caseStudyData";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

export default function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const study = getCaseStudyById(slug);
  if (!study) notFound();

  const challengeRef = useRef(null);
  const approachRef = useRef(null);
  const outcomesRef = useRef(null);
  const relatedRef = useRef(null);
  const ctaRef = useRef(null);

  const challengeInView = useInView(challengeRef, { once: true, margin: "-80px" });
  const approachInView = useInView(approachRef, { once: true, margin: "-80px" });
  const outcomesInView = useInView(outcomesRef, { once: true, margin: "-80px" });
  const relatedInView = useInView(relatedRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  const related = caseStudies.filter((c) => c.id !== study.id).slice(0, 2);

  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ── */}
        <section
          style={{
            position: "relative",
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: "var(--bg)",
            borderBottom: "1px solid var(--border)",
            overflow: "hidden",
          }}
        >
          {/* Cover image behind hero */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
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
                filter: "grayscale(30%)",
                opacity: 0.18,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, var(--bg) 40%, transparent 100%)",
              }}
            />
          </div>

          <div className="pattern-dots" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }} />

          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "160px 40px 80px",
              position: "relative",
              zIndex: 2,
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
                href="/case-studies"
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
                All Case Studies
              </Link>
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease, delay: 0.05 }}
              style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40, flexWrap: "wrap" }}
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
                {study.industry}
              </span>
              <div style={{ width: 1, height: 16, background: "var(--border)" }} />
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
                {study.engagement}
              </span>
              <div style={{ width: 1, height: 16, background: "var(--border)" }} />
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
                {study.client}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5.5vw, 80px)",
                fontWeight: 700,
                lineHeight: 1.05,
                color: "var(--text)",
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                maxWidth: 900,
                marginBottom: 48,
              }}
            >
              {study.headline}
            </motion.h1>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease, delay: 0.18 }}
              style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
            >
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
                    padding: "5px 12px",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Challenge ── */}
        <section
          ref={challengeRef}
          style={{
            background: "var(--bg)",
            padding: "120px 0",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 40px",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 80,
              alignItems: "start",
            }}
            className="detail-two-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={challengeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease }}
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
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                  textTransform: "uppercase",
                  marginTop: 16,
                }}
              >
                The Challenge
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={challengeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease, delay: 0.08 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(16px, 1.4vw, 20px)",
                fontWeight: 400,
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              {study.challenge}
            </motion.p>
          </div>
        </section>

        {/* ── Approach ── */}
        <section
          ref={approachRef}
          className="pattern-grid"
          style={{
            background: "var(--bg-secondary)",
            padding: "120px 0",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 40px",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 80,
              alignItems: "start",
            }}
            className="detail-two-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={approachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease }}
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
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                  textTransform: "uppercase",
                  marginTop: 16,
                }}
              >
                Our Approach
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={approachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease, delay: 0.08 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(16px, 1.4vw, 20px)",
                fontWeight: 400,
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              {study.approach}
            </motion.p>
          </div>
        </section>

        {/* ── Outcomes ── */}
        <section
          ref={outcomesRef}
          style={{
            background: "var(--bg)",
            padding: "120px 0",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
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
                03 /
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
                  marginTop: 16,
                }}
              >
                Outcomes
              </h2>
            </motion.div>

            <div style={{ borderTop: "1px solid var(--border)" }}>
              {study.outcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, ease, delay: 0.06 + i * 0.08 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: 40,
                    alignItems: "start",
                    padding: "40px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                  className="outcome-row"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(28px, 3vw, 48px)",
                      fontWeight: 700,
                      color: "var(--text-dim-heading)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(16px, 1.4vw, 20px)",
                      fontWeight: 400,
                      color: "var(--text)",
                      lineHeight: 1.6,
                      paddingTop: 8,
                    }}
                  >
                    {outcome}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Case Studies ── */}
        {related.length > 0 && (
          <section
            ref={relatedRef}
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
                animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, ease }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  flexWrap: "wrap",
                  gap: 24,
                  marginBottom: 64,
                }}
              >
                <div>
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
                      marginTop: 16,
                    }}
                  >
                    More Engagements
                  </h2>
                </div>
                <Link
                  href="/case-studies"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-display)",
                    fontSize: 10,
                    fontWeight: 400,
                    letterSpacing: "0.18em",
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
                  All Case Studies
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                  gap: 1,
                  border: "1px solid var(--border)",
                }}
              >
                {related.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, ease, delay: 0.06 + i * 0.1 }}
                    style={{
                      background: "var(--bg)",
                      borderRight: "1px solid var(--border)",
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ width: "100%", height: 200, overflow: "hidden", flexShrink: 0 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.coverImage}
                        alt={s.headline}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          filter: "grayscale(20%)",
                          transition: "transform 0.4s ease-out",
                          display: "block",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                        }}
                      />
                    </div>
                    <div style={{ padding: "32px 36px 36px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 10,
                          fontWeight: 400,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                          marginBottom: 12,
                        }}
                      >
                        {s.client}
                      </p>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(15px, 1.6vw, 20px)",
                          fontWeight: 700,
                          color: "var(--text)",
                          textTransform: "uppercase",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.2,
                          marginBottom: 24,
                          flex: 1,
                        }}
                      >
                        {s.headline}
                      </h3>
                      <Link
                        href={`/case-studies/${s.id}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          fontFamily: "var(--font-display)",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--text)",
                          textDecoration: "none",
                          padding: "10px 20px",
                          border: "1px solid var(--border)",
                          alignSelf: "flex-start",
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
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

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
              style={{ position: "absolute", width: 40, height: 40, pointerEvents: "none", ...style }}
            />
          ))}

          <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
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

              <a
                href="/contact"
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
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .detail-two-col {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .outcome-row {
            grid-template-columns: 48px 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </>
  );
}
