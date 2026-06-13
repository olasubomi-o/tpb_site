"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

interface Workshop {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  format: string;
  audience: string[];
  description: string;
  status: "past";
  recap?: string;
  recordingUrl?: string;
}

const workshops: Workshop[] = [
  {
    id: "ai-agents-operations-apr-2026",
    title: "From Manual to Autonomous",
    subtitle: "Design AI Agents That Run Your Operations",
    date: "April 25, 2026",
    location: "New York, NY",
    format: "Speedrun Workshop",
    audience: ["Operations Teams", "Product Managers", "Founders"],
    description:
      "A hands-on speedrun where attendees replace manual workflows with AI systems using n8n and multi-agent architecture. Participants build and deploy a fully functional AI system handling a real workflow live — covering lead follow-ups, CRM updates, and internal operations. No coding required.",
    status: "past",
    recordingUrl: "https://theproductbuilders-1940.freshlearn.com/checkout/Course/40437",
  },
  {
    id: "product-development-speedrun-feb-2026",
    title: "Product Development Speedrun",
    subtitle: "From Idea to Live Web App in Hours",
    date: "February 20, 2026",
    location: "New York, NY",
    format: "Speedrun Workshop",
    audience: ["Founders", "Builders", "Non-Technical PMs"],
    description:
      "A hands-on speedrun where attendees take a product idea from concept to a live, usable web app in just a few hours using AI — covering market research, PRD creation, building secure web apps, and deploying for real use. No prior experience required.",
    status: "past",
    recordingUrl: "https://theproductbuilders-1940.freshlearn.com/checkout/Course/41165",
  },
  {
    id: "ai-prototyping-dec-2025",
    title: "AI Prototyping Workshop",
    subtitle: "From Idea to Working Demo in Hours",
    date: "December 13, 2025",
    location: "New York, NY",
    format: "Workshop",
    audience: ["Beginners", "Product Teams", "Founders"],
    description:
      "A beginner-friendly, hands-on session where attendees turn AI ideas into real, working prototypes — breaking down ideas, structuring prompts, designing context, and assembling lightweight AI workflows. Participants leave with a functioning prototype and a repeatable framework for future projects.",
    status: "past",
    recordingUrl: "https://theproductbuilders-1940.freshlearn.com/checkout/Course/41167",
  },
  {
    id: "pm-interview-nov-2025",
    title: "Level Up Your PM Interview Game",
    subtitle: "Think, Communicate & Perform Like a Top Candidate",
    date: "November 1, 2025",
    location: "New York, NY",
    format: "Live Session",
    audience: ["Aspiring PMs", "Job Seekers", "Career Changers"],
    description:
      "A live PM mock interview session designed to help attendees think and perform like a top candidate. Participants experience a real-time mock interview, learn how to structure answers using proven PM frameworks, and get insider tips on what hiring managers actually look for.",
    status: "past",
  },
];

const pastWorkshops = workshops.filter((w) => w.status === "past");

function WorkshopCard({
  workshop,
  index,
  inView,
}: {
  workshop: Workshop;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, ease, delay: 0.06 + index * 0.08 }}
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "56px 0",
        display: "grid",
        gridTemplateColumns: "1fr 2fr auto",
        gap: 48,
        alignItems: "start",
      }}
      className="workshop-card"
    >
      {/* Left: meta */}
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 10px",
            border: "1px solid var(--border)",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 9,
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Past
          </span>
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
          {workshop.date}
        </p>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: 8,
          }}
        >
          {workshop.location}
        </p>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            opacity: 0.7,
          }}
        >
          {workshop.format}
        </p>
      </div>

      {/* Center: content */}
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(20px, 2.4vw, 32px)",
            fontWeight: 700,
            color: "var(--text)",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            marginBottom: 8,
          }}
        >
          {workshop.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#FF3000",
            marginBottom: 20,
          }}
        >
          {workshop.subtitle}
        </p>
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
          {workshop.description}
        </p>

        {/* Audience tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: workshop.recap ? 20 : 0 }}>
          {workshop.audience.map((tag) => (
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

        {/* Recap for past workshops */}
        {workshop.recap && (
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              borderLeft: "2px solid #FF3000",
              paddingLeft: 12,
              marginTop: 20,
            }}
          >
            {workshop.recap}
          </p>
        )}
      </div>

      {/* Right: CTA */}
      <div style={{ paddingTop: 4, display: "flex", flexDirection: "column", gap: 12 }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 9,
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            padding: "10px 20px",
            border: "1px solid var(--border)",
            display: "inline-block",
            textAlign: "center",
            opacity: 0.5,
          }}
        >
          Completed
        </span>

        <a
          href={workshop.recordingUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#fff",
            background: "#080808",
            padding: "12px 24px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            minHeight: 44,
            border: "1px solid #080808",
            whiteSpace: "nowrap",
            transition: "background 0.15s ease-out, border-color 0.15s ease-out",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#FF3000";
            (e.currentTarget as HTMLElement).style.borderColor = "#FF3000";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#080808";
            (e.currentTarget as HTMLElement).style.borderColor = "#080808";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
            <path d="M5.5 4.5l4 2.5-4 2.5V4.5z" fill="currentColor" />
          </svg>
          Watch Recording
        </a>
      </div>
    </motion.div>
  );
}

export default function WorkshopsPage() {
  const heroRef = useRef(null);
  const pastRef = useRef(null);
  const ctaRef = useRef(null);

  const pastInView = useInView(pastRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .workshop-card {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
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
                Live Learning /
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
              Workshops
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
              &amp; Intensives
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
                Practitioner-led sessions for product teams, founders, and enterprise
                innovators. Operator knowledge — compressed into dense, high-signal days.
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
                    {pastWorkshops.length}
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
                    Hosted
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Past Workshops ── */}
        <section
          ref={pastRef}
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
              animate={pastInView ? { opacity: 1, y: 0 } : {}}
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
                Archive
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
                Past Workshops
              </h2>
            </motion.div>

            <div style={{ borderTop: "1px solid var(--border)" }}>
              {pastWorkshops.map((w, i) => (
                <WorkshopCard key={w.id} workshop={w} index={i} inView={pastInView} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Custom Workshop CTA ── */}
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
                  Custom Sessions
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
                Need a Workshop{" "}
                <span style={{ color: "#FF3000" }}>Built for Your Team?</span>
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
                We design and run private intensives for accelerators, enterprise innovation
                teams, and executive cohorts. Fully tailored to your context and goals.
              </p>

              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="/#contact"
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
                  Request a Custom Workshop
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
