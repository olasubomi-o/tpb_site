"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/lib/queries";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

const CATEGORIES = [
  { label: "All", value: "" },
  { label: "Strategy", value: "strategy" },
  { label: "AI & Automation", value: "ai-automation" },
  { label: "Product", value: "product" },
  { label: "Design", value: "design" },
  { label: "Technology", value: "technology" },
];

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogCard({ post, index, inView }: { post: BlogPost; index: number; inView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, ease, delay: 0.04 + index * 0.06 }}
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "56px 0",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr auto",
          gap: 48,
          alignItems: "start",
        }}
        className="blog-card-grid"
      >
        {/* Thumbnail */}
        <div>
          <Link href={`/blog/${post.slug.current}`}>
            <div
              style={{
                width: "100%",
                height: 160,
                overflow: "hidden",
                marginBottom: 20,
              }}
            >
              {post.coverImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.coverImage}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    filter: "grayscale(20%)",
                    transition: "transform 0.4s ease-out",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                />
              ) : (
                <div style={{ width: "100%", height: "100%", background: "var(--bg-secondary)" }} />
              )}
            </div>
          </Link>
          {post.category && (
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#FF3000",
                marginBottom: 8,
              }}
            >
              {CATEGORIES.find((c) => c.value === post.category)?.label ?? post.category}
            </p>
          )}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {formatDate(post.publishedAt)}
          </p>
        </div>

        {/* Content */}
        <div>
          {post.author && (
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
              {post.author}
            </p>
          )}
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
            <Link
              href={`/blog/${post.slug.current}`}
              style={{ textDecoration: "none", color: "inherit", transition: "color 0.15s ease-out" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF3000"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "inherit"; }}
            >
              {post.title}
            </Link>
          </h3>
          {post.excerpt && (
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
              {post.excerpt}
            </p>
          )}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {post.tags?.map((tag) => (
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

        {/* CTA */}
        <div style={{ paddingTop: 4 }}>
          <Link
            href={`/blog/${post.slug.current}`}
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
            Read More
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const heroRef = useRef(null);
  const postsRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("");

  const postsInView = useInView(postsRef, { once: true, margin: "-80px" });

  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  const featuredPost = posts.find((p) => p.featured) ?? posts[0];
  const listPosts = featuredPost ? filtered.filter((p) => p._id !== featuredPost._id) : filtered;

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .blog-card-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .blog-featured-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
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
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF3000"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13 7H1M7 13L1 7l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Home
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease, delay: 0.05 }}
              style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FF3000" }}>
                Perspectives /
              </span>
              <div style={{ width: 32, height: 1, background: "var(--border)" }} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                The Product Builders
              </span>
            </motion.div>

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
              The
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
              Brief
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease, delay: 0.22 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 1.3vw, 18px)",
                fontWeight: 400,
                color: "var(--text-muted)",
                maxWidth: 560,
                lineHeight: 1.7,
              }}
            >
              Strategy, AI, and product thinking from the team at The Product Builders.
            </motion.p>
          </div>
        </section>

        {/* ── Featured post ── */}
        {featuredPost && (
          <section
            style={{
              background: "var(--bg)",
              padding: "120px 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
                <div style={{ width: 6, height: 6, background: "#FF3000" }} />
                <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FF3000" }}>
                  Latest
                </span>
              </div>

              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}
                className="blog-featured-grid"
              >
                <Link href={`/blog/${featuredPost.slug.current}`}>
                  <div style={{ width: "100%", height: "clamp(260px, 32vw, 480px)", overflow: "hidden" }}>
                    {featuredPost.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "grayscale(20%)", transition: "transform 0.4s ease-out" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "var(--bg-secondary)" }} />
                    )}
                  </div>
                </Link>

                <div style={{ paddingTop: 8 }}>
                  <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
                    {featuredPost.category && (
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "#FF3000" }}>
                        {CATEGORIES.find((c) => c.value === featuredPost.category)?.label ?? featuredPost.category}
                      </span>
                    )}
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                      {formatDate(featuredPost.publishedAt)}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(22px, 2.8vw, 40px)",
                      fontWeight: 700,
                      color: "var(--text)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.1,
                      marginBottom: 24,
                    }}
                  >
                    <Link
                      href={`/blog/${featuredPost.slug.current}`}
                      style={{ textDecoration: "none", color: "inherit", transition: "color 0.15s ease-out" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF3000"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "inherit"; }}
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>

                  {featuredPost.excerpt && (
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 400, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 40 }}>
                      {featuredPost.excerpt}
                    </p>
                  )}

                  <Link
                    href={`/blog/${featuredPost.slug.current}`}
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
                    Read Article
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Post list ── */}
        <section
          ref={postsRef}
          className="pattern-grid"
          style={{
            background: "var(--bg-secondary)",
            padding: "120px 0",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
            {/* Category filter */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 64 }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 10,
                    fontWeight: activeCategory === cat.value ? 700 : 400,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: activeCategory === cat.value ? "#fff" : "var(--text-muted)",
                    background: activeCategory === cat.value ? "#FF3000" : "transparent",
                    padding: "8px 16px",
                    border: `1px solid ${activeCategory === cat.value ? "#FF3000" : "var(--border)"}`,
                    cursor: "pointer",
                    transition: "all 0.15s ease-out",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {listPosts.length === 0 ? (
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7 }}>
                No posts yet in this category.
              </p>
            ) : (
              <div style={{ borderTop: "1px solid var(--border)" }}>
                {listPosts.map((post, i) => (
                  <BlogCard key={post._id} post={post} index={i} inView={postsInView} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
