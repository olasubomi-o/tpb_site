"use client";

import { useEffect, useState } from "react";

const ACCENT = "#FF3000";

const iconButtonStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid var(--border)",
  background: "transparent",
  color: "var(--text-muted)",
  textDecoration: "none",
  cursor: "pointer",
  transition: "border-color 0.15s ease-out, color 0.15s ease-out",
  flexShrink: 0,
};

function onHoverEnter(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.borderColor = ACCENT;
  e.currentTarget.style.color = ACCENT;
}

function onHoverLeave(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.borderColor = "var(--border)";
  e.currentTarget.style.color = "var(--text-muted)";
}

function CopyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="5.5" y="5.5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9.5 5.5V2.5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M3 8l3 3 6-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M8.3 6.1 13 1h-1.6L7.6 5.1 4.5 1H0l4.9 6.6L0 13h1.6l4.1-4.4L9 13h4.5L8.3 6.1Zm-1.4 1.6-.5-.6L2.2 1.9h1.8L7 5.7l.5.6 4.1 5.5H9.8L6.9 7.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path
        d="M3.4 4.9H1V13h2.4V4.9ZM2.2 3.8a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM14 8.3c0-2.1-1.1-3.1-2.6-3.1-1.2 0-1.8.7-2 1.1V4.9H7v8.1h2.4V8.5c0-.4 0-.9.3-1.2.2-.3.5-.6 1.1-.6.8 0 1.1.6 1.1 1.5V13H14V8.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ShareButtons({
  title,
  vertical = true,
}: {
  title: string;
  vertical?: boolean;
}) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleCopy = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (unsupported browser/permissions) — leave button as a no-op.
    }
  };

  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div
      role="group"
      aria-label="Share this article"
      style={{
        display: "flex",
        flexDirection: vertical ? "column" : "row",
        alignItems: "center",
        gap: 12,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 10,
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          writingMode: vertical ? "vertical-rl" : "horizontal-tb",
        }}
      >
        Share
      </span>

      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Link copied" : "Copy link"}
        style={iconButtonStyle}
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>

      <a
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        style={iconButtonStyle}
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
      >
        <XIcon />
      </a>

      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        style={iconButtonStyle}
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}
