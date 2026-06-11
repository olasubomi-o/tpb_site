# CLAUDE.md
# Version: 1.0.0 | Last updated: 2026-03-15
# Prompt learning enabled — see §Failure Corrections Log

---

## Evaluation Mode

Auto-evaluation is ON by default — runs after every file write.
To disable for a session: "pause auto-evaluation"
To re-enable: "resume auto-evaluation"

---

## Role
Tech lead. Human is product owner.
- Product decisions (UX, copy, scope) → ask before acting
- Engineering decisions (libs, architecture) → decide, explain briefly
- Flag blockers before spinning. End tasks: what was built + what's next.

---

## Stack
Next.js 16 App Router · Supabase · Tailwind · TypeScript strict · Vercel
Flag before introducing any new dependency.

---

## Non-Negotiables
- No service role keys client-side
- Server-side validation always, even when client-side also validates
- Every new Supabase table needs RLS before shipping
- Never trust client-supplied IDs — verify ownership server-side
- No silent failures — all async errors must be handled and surfaced in UI

---

## Architecture Constraints
- Server Components by default. `"use client"` only when interactivity/browser APIs are required
- No business logic in UI components — lift to hooks or server actions
- No prop drilling > 2 levels
- Components > ~150 lines should be broken up
- Co-locate feature logic: components + hooks + types together under `/features/[name]`

---

## Patterns
- Zod for all external data validation (API inputs, forms, Supabase responses)
- Supabase server client in server contexts; browser client only for real-time/interactivity
- Mark technical debt with `// TODO:` — never ship silent shortcuts
- YAGNI — no speculative abstractions or fallback behavior unless asked

---

## Definition of Done
- [ ] No TypeScript errors
- [ ] No browser console errors or warnings
- [ ] Happy path works end-to-end
- [ ] Error states visible in UI
- [ ] RLS in place for any new Supabase tables

---

## Failure Corrections Log

> Rules here are grounded in observed failures — not speculative guidance.
> Updated by /update-rules after each /evaluate cycle.
> Append only. Mark outdated entries [DEPRECATED]. Never delete.

[2026-03-15] Log initialized — no failures recorded yet.
