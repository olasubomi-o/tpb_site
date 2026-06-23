"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/lib/queries";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

const CATEGORIES: Record<string, string> = {
  strategy: "Strategy",
  "ai-automation": "AI & Automation",
  product: "Product",
  design: "Design",
  technology: "Technology",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

type MarkDef = { _key: string; _type: string; href?: string };

function PortableBlock({ block }: { block: Record<string, unknown> }) {
  if (block._type === "block") {
    const children = (block.children as Array<{ _type: string; text: string; marks?: string[] }>) ?? [];
    const markDefs = (block.markDefs as MarkDef[]) ?? [];
    const style = (block.style as string) ?? "normal";
    const text = children.map((c) => c.text).join("");

    if (style === "h2") {
      return (
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2.2vw, 32px)", fontWeight: 700, color: "var(--text)", textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.2, margin: "48px 0 20px" }}>
          {text}
        </h2>
      );
    }
    if (style === "h3") {
      return (
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 1.6vw, 24px)", fontWeight: 700, color: "var(--text)", textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.2, margin: "36px 0 16px" }}>
          {text}
        </h3>
      );
    }
    if (style === "blockquote") {
      return (
        <blockquote style={{ borderLeft: "2px solid #FF3000", paddingLeft: 24, margin: "32px 0", fontFamily: "var(--font-body)", fontSize: "clamp(16px, 1.3vw, 20px)", fontStyle: "italic", color: "var(--text-muted)", lineHeight: 1.75 }}>
          {text}
        </blockquote>
      );
    }

    const rendered = children.map((child, i) => {
      const marks = child.marks ?? [];
      let el: React.ReactNode = child.text;
      if (marks.includes("strong")) el = <strong key={i}>{el}</strong>;
      if (marks.includes("em")) el = <em key={i}>{el}</em>;
      if (marks.includes("code")) el = <code key={i} style={{ fontFamily: "monospace", background: "var(--bg-secondary)", padding: "2px 6px", fontSize: "0.9em" }}>{el}</code>;
      const linkMark = marks.find((m) => markDefs.some((def) => def._key === m && def._type === "link"));
      if (linkMark) {
        const def = markDefs.find((d) => d._key === linkMark);
        el = <a key={i} href={def?.href} target="_blank" rel="noopener noreferrer" style={{ color: "#FF3000", textDecoration: "underline", textUnderlineOffset: 3 }}>{el}</a>;
      }
      return el;
    });

    return (
      <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(16px, 1.2vw, 18px)", fontWeight: 400, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 24 }}>
        {rendered}
      </p>
    );
  }

  if (block._type === "image") {
    const asset = block.asset as { url?: string } | undefined;
    if (!asset?.url) return null;
    return (
      <figure style={{ margin: "48px 0" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset.url}
          alt={(block.alt as string) ?? ""}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        {!!block.caption && (
          <figcaption style={{ fontFamily: "var(--font-display)", fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 12 }}>
            {String(block.caption)}
          </figcaption>
        )}
      </figure>
    );
  }

  return null;
}

export default function BlogPostClient({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  const bodyRef = useRef(null);
  const relatedRef = useRef(null);
  const bodyInView = useInView(bodyRef, { once: true, margin: "-80px" });
  const relatedInView = useInView(relatedRef, { once: true, margin: "-80px" });

  const body = (post.body ?? []) as Array<Record<string, unknown>>;

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
          {post.coverImage && (
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImage}
                alt={post.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "grayscale(30%)", opacity: 0.18 }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg) 40%, transparent 100%)" }} />
            </div>
          )}

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
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease }}
              style={{ marginBottom: 56 }}
            >
              <Link
                href="/blog"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.15s ease-out" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF3000"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13 7H1M7 13L1 7l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                The Brief
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease, delay: 0.05 }}
              style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40, flexWrap: "wrap" }}
            >
              {post.category && (
                <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FF3000" }}>
                  {CATEGORIES[post.category] ?? post.category}
                </span>
              )}
              <div style={{ width: 1, height: 16, background: "var(--border)" }} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                {formatDate(post.publishedAt)}
              </span>
              {post.author && (
                <>
                  <div style={{ width: 1, height: 16, background: "var(--border)" }} />
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                    {post.author}
                  </span>
                </>
              )}
            </motion.div>

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
              {post.title}
            </motion.h1>

            {post.tags && post.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease, delay: 0.18 }}
                style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
              >
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontFamily: "var(--font-display)", fontSize: 9, fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", padding: "5px 12px", border: "1px solid var(--border)" }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* ── Body ── */}
        <section
          ref={bodyRef}
          style={{ background: "var(--bg)", padding: "120px 0", borderBottom: "1px solid var(--border)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bodyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, ease }}
            style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px" }}
          >
            {body.length === 0 ? (
              <p style={{ fontFamily: "var(--font-body)", fontSize: 18, color: "var(--text-muted)", lineHeight: 1.8 }}>
                Content coming soon.
              </p>
            ) : (
              body.map((block, i) => (
                <PortableBlock key={i} block={block} />
              ))
            )}
          </motion.div>
        </section>

        {/* ── Related posts ── */}
        {related.length > 0 && (
          <section
            ref={relatedRef}
            className="pattern-grid"
            style={{ background: "var(--bg-secondary)", padding: "120px 0", borderBottom: "1px solid var(--border)" }}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, ease }}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 64 }}
              >
                <div>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FF3000" }}>
                    More Reading
                  </span>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--text)", textTransform: "uppercase", marginTop: 16 }}>
                    More Articles
                  </h2>
                </div>
                <Link
                  href="/blog"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.15s ease-out" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF3000"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                >
                  All Articles
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 1, border: "1px solid var(--border)" }}>
                {related.map((p, i) => (
                  <motion.div
                    key={p._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, ease, delay: 0.06 + i * 0.1 }}
                    style={{ background: "var(--bg)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", display: "flex", flexDirection: "column" }}
                  >
                    {p.coverImage && (
                      <div style={{ width: "100%", height: 200, overflow: "hidden", flexShrink: 0 }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.coverImage}
                          alt={p.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "grayscale(20%)", transition: "transform 0.4s ease-out", display: "block" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                        />
                      </div>
                    )}
                    <div style={{ padding: "32px 36px 36px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <p style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>
                        {formatDate(p.publishedAt)}
                      </p>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(15px, 1.6vw, 20px)", fontWeight: 700, color: "var(--text)", textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: 24, flex: 1 }}>
                        {p.title}
                      </h3>
                      <Link
                        href={`/blog/${p.slug.current}`}
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text)", textDecoration: "none", padding: "10px 20px", border: "1px solid var(--border)", alignSelf: "flex-start", transition: "background 0.15s ease-out, color 0.15s ease-out, border-color 0.15s ease-out" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#FF3000"; (e.currentTarget as HTMLElement).style.borderColor = "#FF3000"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
                      >
                        Read
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
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .blog-featured-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
