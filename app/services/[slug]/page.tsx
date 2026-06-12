"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getServiceBySlug, services } from "@/lib/serviceData";
import { getCaseStudiesByService, type CaseStudy } from "@/lib/caseStudyData";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });

  const includedRef = useRef(null);
  const includedInView = useInView(includedRef, { once: true, margin: "-80px" });

  const outcomesRef = useRef(null);
  const outcomesInView = useInView(outcomesRef, { once: true, margin: "-80px" });

  const insightRef = useRef(null);
  const insightInView = useInView(insightRef, { once: true, margin: "-80px" });

  const otherServices = services.filter((s) => s.slug !== service.slug);
  const relatedStudies = getCaseStudiesByService(service.slug);

  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ── */}
        <section
          style={{
            position: "relative",
            minHeight: "70vh",
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
                href="/#services"
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
                All Services
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
                {service.number} /
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
                Service
              </span>
            </motion.div>

            {/* Headline */}
            {service.heroHeadline.map((line, i) => (
              <motion.h1
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease, delay: 0.08 + i * 0.06 }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(44px, 7vw, 108px)",
                  fontWeight: 700,
                  lineHeight: 1.0,
                  color: i === service.heroHeadline.length - 1 ? "#FF3000" : "var(--text)",
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  marginBottom: i === service.heroHeadline.length - 1 ? 48 : 0,
                }}
              >
                {line}
              </motion.h1>
            ))}

            {/* Sub + CTA row */}
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
                  maxWidth: 540,
                  lineHeight: 1.7,
                }}
              >
                {service.heroSub}
              </p>

              <a
                href="/#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#F5F5F0",
                  color: "#080808",
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "16px 36px",
                  textDecoration: "none",
                  minHeight: 52,
                  border: "1px solid #F5F5F0",
                  flexShrink: 0,
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

        {/* ── Process ── */}
        <section
          ref={processRef}
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
              animate={processInView ? { opacity: 1, y: 0 } : {}}
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
                How We Work
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                  textTransform: "uppercase",
                  marginTop: 16,
                }}
              >
                Our Process
              </h2>
            </motion.div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                border: "1px solid var(--border)",
              }}
            >
              {service.process.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, ease, delay: 0.04 + i * 0.07 }}
                  style={{
                    padding: "48px 40px",
                    borderRight: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                    background: "var(--bg-secondary)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 36,
                      fontWeight: 700,
                      color: "var(--text-dim-heading)",
                      lineHeight: 1,
                      marginBottom: 32,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.step}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--text)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 16,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's Included + Outcomes ── */}
        <section
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
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "start",
            }}
            className="grid-cols-1 md:grid-cols-2"
          >
            {/* Included */}
            <div ref={includedRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={includedInView ? { opacity: 1, y: 0 } : {}}
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
                  What&apos;s Included
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
                    margin: "16px 0 48px",
                  }}
                >
                  Full Scope, No Surprises
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {service.included.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      animate={includedInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.25, ease, delay: 0.06 + i * 0.05 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 20,
                        padding: "20px 0",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          background: "#FF3000",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          fontWeight: 400,
                          color: "var(--text-muted)",
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Outcomes */}
            <div ref={outcomesRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
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
                  Outcomes
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
                    margin: "16px 0 48px",
                  }}
                >
                  What You Can Expect
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    border: "1px solid var(--border)",
                  }}
                >
                  {service.outcomes.map((o, i) => (
                    <motion.div
                      key={o.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, ease, delay: 0.08 + i * 0.08 }}
                      className="stat-item"
                      style={{
                        padding: "40px 32px",
                        borderRight: "1px solid var(--border)",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(24px, 3vw, 40px)",
                          fontWeight: 700,
                          color: "#FF3000",
                          letterSpacing: "-0.02em",
                          marginBottom: 12,
                          lineHeight: 1,
                        }}
                      >
                        {o.stat}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 10,
                          fontWeight: 400,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                        }}
                      >
                        {o.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Insight */}
                <motion.div
                  ref={insightRef}
                  initial={{ opacity: 0, y: 16 }}
                  animate={insightInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, ease, delay: 0.12 }}
                  style={{
                    marginTop: 40,
                    padding: "32px",
                    border: "1px solid var(--border)",
                    borderLeft: "3px solid #FF3000",
                    background: "var(--bg-secondary)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{service.insight}&rdquo;
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 10,
                      fontWeight: 400,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#FF3000",
                      marginTop: 16,
                    }}
                  >
                    The Product Builders
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Related Case Studies ── */}
        {relatedStudies.length > 0 && (
          <section
            style={{
              background: "var(--bg)",
              padding: "120px 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
              <div style={{ marginBottom: 64 }}>
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
                  Proof of Work
                </span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    flexWrap: "wrap",
                    gap: 24,
                    marginTop: 16,
                  }}
                >
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
                    Related Case Studies
                  </h2>
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
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                  gap: 1,
                  border: "1px solid var(--border)",
                }}
              >
                {relatedStudies.map((study: CaseStudy) => (
                  <div
                    key={study.id}
                    style={{
                      background: "var(--bg)",
                      borderRight: "1px solid var(--border)",
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Cover image */}
                    <div
                      style={{
                        width: "100%",
                        height: 200,
                        overflow: "hidden",
                        flexShrink: 0,
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

                    {/* Content */}
                    <div style={{ padding: "32px 36px 36px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                        {study.tags.map((tag) => {
                          const isActiveService =
                            tag.toLowerCase() === service.name.toLowerCase();
                          return (
                            <span
                              key={tag}
                              style={{
                                fontFamily: "var(--font-display)",
                                fontSize: 9,
                                fontWeight: 400,
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: isActiveService ? "#FF3000" : "var(--text-muted)",
                                padding: "3px 8px",
                                border: `1px solid ${isActiveService ? "#FF3000" : "var(--border)"}`,
                              }}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>

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
                        {study.client}
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
                          marginBottom: 20,
                          flex: 1,
                        }}
                      >
                        {study.headline}
                      </h3>

                      <div style={{ borderLeft: "2px solid #FF3000", paddingLeft: 12 }}>
                        {study.outcomes.slice(0, 1).map((outcome, i) => (
                          <p
                            key={i}
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: 10,
                              fontWeight: 400,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "var(--text-muted)",
                              lineHeight: 1.5,
                            }}
                          >
                            {outcome}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Other Services ── */}
        <section
          className="pattern-stripes"
          style={{
            background: "var(--bg-secondary)",
            padding: "120px 0",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ marginBottom: 64 }}>
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
                Explore More
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
                Other Services
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                border: "1px solid var(--border)",
              }}
            >
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  style={{
                    display: "block",
                    padding: "40px 36px",
                    borderRight: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                    textDecoration: "none",
                    background: "var(--bg-secondary)",
                    color: "var(--text)",
                    transition: "background 0.15s ease-out, color 0.15s ease-out",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#FF3000";
                    (e.currentTarget as HTMLElement).style.color = "#080808";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text)";
                  }}
                >
                  <div style={{ color: "var(--text-muted)", marginBottom: 24 }}>
                    {s.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 10,
                    }}
                  >
                    {s.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      fontWeight: 400,
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {s.tagline}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          id="contact"
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
                Let&apos;s Build Together
              </span>
              <div style={{ width: 24, height: 1, background: "var(--border)" }} />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4.5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "var(--text)",
                textTransform: "uppercase",
                maxWidth: 780,
                margin: "0 auto 48px",
              }}
            >
              Let&apos;s put{" "}
              <span style={{ color: "#FF3000" }}>{service.name}</span>{" "}
              to work for your organization.
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                fontWeight: 400,
                color: "var(--text-muted)",
                maxWidth: 440,
                margin: "0 auto 56px",
                lineHeight: 1.7,
              }}
            >
              30-minute strategy call. No pitch, no fluff. We&apos;ll tell you exactly
              what we&apos;d do differently and whether we&apos;re the right fit.
            </p>

            <a
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "#F5F5F0",
                color: "#080808",
                fontFamily: "var(--font-display)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "20px 48px",
                textDecoration: "none",
                minHeight: 60,
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
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
