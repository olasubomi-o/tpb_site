/**
 * Run with: npx tsx scripts/migrate-to-sanity.ts
 * Requires SANITY_API_TOKEN env var with write access.
 */
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "bt9s9s96",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: "skoAILVcfvpzKaKwoC5UDODyUYPwxHkNSFZZIalGg94gVPJ4dDzj8k5JKDNfUtiDHKwxXMAeTvUfJxEub6FYWAD4EJImg2SsMWwQJANJe6eyppHiALhFsfl5Qb2HsCTld1XSMaNQ45MFxQ0L9e8RynpGrEHUXyUfCu01SHhhTdpSaiX8tRwc",
  useCdn: false,
});

const caseStudies = [
  {
    _type: "caseStudy",
    _id: "case-study-ambrose-upholstery-automation",
    slug: { _type: "slug", current: "ambrose-upholstery-automation" },
    client: "Ambrose Upholstery Company",
    clientDomain: "ambrose-upholstery.com",
    industry: "Custom Furniture & Repair",
    engagement: "Workflow Automation & AI Strategy",
    duration: "First year",
    headline: "$130,000 Saved Annually by Automating a Broken Workflow",
    challenge: "Manual administrative processes were consuming 48.8 hours weekly and costing over $130,000 annually. Quote generation alone took 65–100 minutes across six steps, 30–40% of potential customers never received follow-up, and data was re-entered across email, Google Sheets, QuickBooks, and work orders — simultaneously.",
    approach: "We built a five-phase AI-powered automation ecosystem: intelligent email parsing for instant quote generation, automated follow-up sequences with CRM priority scoring, single-entry financial integration directly into QuickBooks, predictive inventory management with vendor automation, and an intelligent customer communication layer for appointments and progress updates.",
    outcomes: [
      "Quote generation time cut from 65 minutes to 5 minutes — a 92% reduction",
      "Follow-up consistency improved from 60% to 100%, recovering $50,000+ in previously lost revenue",
      "Invoice accuracy improved from 85% to 99%; no-show rate dropped from 15% to under 3%",
      "Total annual value of $131,770 against a $1,200 technology cost — a 107× return on investment",
    ],
    tags: ["AI", "Automation", "Strategy"],
    coverImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80",
    services: ["ai", "strategy"],
    featured: true,
  },
  {
    _type: "caseStudy",
    _id: "case-study-harambeans-fellowship-selection",
    slug: { _type: "slug", current: "harambeans-fellowship-selection" },
    client: "Harambeans",
    clientDomain: "harambeans.com",
    industry: "Nonprofit / Entrepreneur Development",
    engagement: "Operational Automation & CRM Integration",
    duration: "One selection cycle",
    headline: "5,000+ Applicants. 6 People. Zero Data Loss.",
    challenge: "A prestigious African entrepreneur alliance ran its selective fellowship program on Excel spreadsheets — a system riddled with data integrity issues, manual data transfer, broken workflows, and communication breakdowns. With only 3 full-time staff and 3 part-time volunteers managing a three-round interview process, the fragile setup risked overlooking talent and damaging organizational credibility under pressure.",
    approach: "We implemented a three-phase integration: a custom Airtable database as the single source of truth with multi-stage pipeline tracking, Zapier automation to eliminate manual data entry and conditionally route applicants to the right interviewers, and Mailchimp for stage-specific, fellow-type-segmented communications across every round.",
    outcomes: [
      "100% elimination of manual data entry across all three selection rounds",
      "Zero data loss across 5,000+ applicants in a single cycle",
      "6-person team confidently managed a process that previously required far more overhead",
      "Scalable CRM infrastructure built for long-term relationship management beyond the fellowship",
    ],
    tags: ["Automation", "Technology", "Strategy"],
    coverImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80",
    services: ["technology", "strategy"],
    featured: true,
  },
  {
    _type: "caseStudy",
    _id: "case-study-plaited-ios-app",
    slug: { _type: "slug", current: "plaited-ios-app" },
    client: "PLAITED",
    clientDomain: "plaited.app",
    industry: "Beauty Technology",
    engagement: "Full Product Lifecycle — Strategy to Launch",
    duration: "Ideation through beta launch",
    headline: "From Community Problem to Production iOS App",
    challenge: "Haircare discovery for Black and textured hair is deeply personal and highly fragmented. Users piece together recommendations from Instagram, TikTok, group chats, and word-of-mouth because existing booking platforms reduce haircare to generic ratings — stripping out the trust, cultural context, and nuance that actually drive confident decisions. PLAITED needed more than a marketplace. They needed infrastructure built around lived experiences, community validation, and visual storytelling. The challenge was translating that insight into a focused MVP without foreclosing long-term growth.",
    approach: "We partnered with PLAITED across the full product lifecycle. Starting with product strategy, market and competitive analysis, and brainstorm facilitation, we defined a clear MVP scope centered on community validation, context-rich reviews, and personalized discovery. We produced a complete PRD with defined user flows and feature prioritization, then carried that clarity directly into UX and UI design and full iOS application development — all the way through beta launch preparation and App Store readiness.",
    outcomes: [
      "Refined product vision with a structured MVP strategy and complete PRD",
      "Fully designed and developed iOS application ready for App Store launch",
      "Clear feature prioritization that balanced immediate user experience with long-term platform scalability",
      "Stronger positioning strategy within the beauty technology space for fundraising and growth",
    ],
    tags: ["Strategy", "Design", "Technology"],
    coverImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
    services: ["strategy", "design", "technology"],
    featured: false,
  },
  {
    _type: "caseStudy",
    _id: "case-study-dr-cv-career-platform",
    slug: { _type: "slug", current: "dr-cv-career-platform" },
    client: "Dr CV",
    clientDomain: "drcv.ai",
    industry: "Career Technology",
    engagement: "Full Product Lifecycle — Strategy to Launch",
    duration: "End-to-end engagement",
    headline: "A Platform That Diagnoses Your CV in 30 Seconds and Rewrites It to Get You Hired",
    challenge: "Most professionals don't lose job opportunities because they're underqualified — they lose them because their CV never makes it past the first filter. ATS systems reject candidates before a human ever reads their application, recruiter attention averages seconds per CV, and the feedback loop for improvement is essentially nonexistent. Job seekers are left guessing: wrong keywords, weak framing, no visibility into why applications go unanswered. The market for CV help exists — but it's either expensive, slow, or generic. A one-size-fits-all template isn't a diagnosis. It's a different kind of guesswork.",
    approach: "We designed and built Dr CV as an end-to-end career platform starting with what no free tool offers: a genuine diagnosis. In 30 seconds, the platform runs automated CV analysis against recruiter-grade parsing logic and ATS keyword scoring — telling candidates exactly where they stand and why. From that diagnosis, the platform generates tailored rewrites and cover letters matched to specific job listings pulled from multiple job boards, ranks opportunities by fit, and prepares candidates for what comes next: mock interviews and salary negotiation preparation built around their target role. A Golang backend handles the performance-critical analysis and job matching pipelines, PostgreSQL manages candidate profiles and job data, and a Next.js frontend delivers an experience fast enough to match the promise of 30-second results.",
    outcomes: [
      "CV diagnosis delivered in 30 seconds — giving candidates actionable, recruiter-grade feedback at a speed and price point no human service can match",
      "ATS keyword scoring and tailored rewrites directly address the first and most common reason qualified candidates are filtered out before human review",
      "End-to-end job search coverage in a single platform — diagnosis, rewrite, job matching, application, and interview prep — removing the need to stitch together multiple tools",
      "Skill-gap analysis and professional development planning extend the platform's value beyond the job search into long-term career progression",
    ],
    tags: ["Strategy", "Technology", "AI"],
    coverImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1400&q=80",
    services: ["strategy", "technology", "ai"],
    featured: false,
  },
  {
    _type: "caseStudy",
    _id: "case-study-dex-ai-analytics-layer",
    slug: { _type: "slug", current: "dex-ai-analytics-layer" },
    client: "Dex AI",
    clientDomain: "dex.ai",
    industry: "Data & Analytics",
    engagement: "Full Product Lifecycle — Strategy to Launch",
    duration: "End-to-end engagement",
    headline: "An AI Analytics Layer That Delivers Instant Data Insights Where Your Team Already Works",
    challenge: "Most organizations have more data than they can act on. The bottleneck isn't access — it's translation. Pulling a chart, running a query, or getting a straight answer from a dashboard requires either a data analyst's time or a non-trivial investment in learning tools most employees never fully adopt. The result is a two-tier organization: a small group who can interrogate data fluently, and everyone else making decisions on instinct or waiting days for answers they needed yesterday. The gap compounds at the pace decisions are made — which in Slack and Teams is constant.",
    approach: "We designed and built Dex AI as a conversational analytics layer that integrates directly into Slack and Microsoft Teams — meeting teams in the tools they already use rather than asking them to adopt another dashboard. The core is plain English: ask a question, get a chart, get an insight, ask a follow-up. Claude Opus 4.6 powers the conversational intelligence, handling context-aware follow-ups that preserve the thread of an analysis across a full conversation rather than treating each question in isolation. A Golang backend manages data workflow orchestration and query execution at speed, with automated chart generation surfacing visual answers without requiring a human analyst in the loop. PostgreSQL handles structured data persistence, and a Next.js layer supports any web-based configuration and management surfaces.",
    outcomes: [
      "Data analysis made accessible to every team member — no SQL, no dashboards, no analyst dependency for routine insight retrieval",
      "Automated chart generation delivers visual answers inside Slack and Teams in real time, collapsing the gap between a question asked and a decision made",
      "Context-aware follow-ups preserve analytical threads across a conversation — enabling the kind of iterative, exploratory analysis previously reserved for data professionals",
      "A Slack and Teams-native experience that requires zero workflow change for adoption — the tool comes to the team, not the other way around",
    ],
    tags: ["Strategy", "Technology", "AI"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    services: ["strategy", "technology", "ai"],
    featured: false,
  },
  {
    _type: "caseStudy",
    _id: "case-study-elevnai-adaptive-tutor",
    slug: { _type: "slug", current: "elevnai-adaptive-tutor" },
    client: "ElevnAI",
    clientDomain: "elevnai.com",
    industry: "EdTech",
    engagement: "Full Product Lifecycle — Strategy to Launch",
    duration: "End-to-end engagement",
    headline: "An AI Tutor That Gives Every UK Child a Personalised Learning Experience at a Fraction of the Cost of Private Tutoring",
    challenge: "Private tutoring in the UK is effective but inaccessible — cost, availability, and geography put consistent one-on-one support out of reach for most families. The alternative, generic EdTech platforms, deliver content but not conversation. They can't identify where a child is struggling in real time, adjust their approach mid-lesson, or respond to a student who needs encouragement as much as explanation. For children in Years 1–9, the window for building foundational skills is narrow. A platform that couldn't adapt to each child's pace and gaps wasn't solving the problem — it was repackaging it.",
    approach: "We designed and built ElevnAI as a fully adaptive AI tutoring platform aligned to the UK National Curriculum, built around Eleanor — a real-time voice tutor with adaptive personalities calibrated to different age groups and learning contexts. Rather than static lesson delivery, Eleanor conducts live voice sessions, identifies weak spots, and dynamically adjusts practice to target exactly where each child needs work. A Python backend handles learning path logic, session state, and AI orchestration via the OpenAI API. Supporting Eleanor are four additional AI layers: automated short answer marking with constructive feedback, real-time writing support covering prompts, structure, and vocabulary, personalized daily plans that sequence learning across the curriculum, and side quest generation that brings creative writing to life. Every feature was designed to feel less like software and more like a patient, knowledgeable tutor who shows up every day.",
    outcomes: [
      "Real-time voice tutoring delivered at scale — every child gets a responsive, conversational learning experience without waitlists, scheduling friction, or per-session cost",
      "Adaptive practice engine continuously targets each student's weak spots, ensuring sessions build on gaps rather than revisiting mastered material",
      "Five distinct AI capabilities — voice tutoring, adaptive marking, writing support, daily planning, and creative side quests — delivered as a unified experience, not a feature list",
      "A full-curriculum platform covering Years 1–9 of the UK National Curriculum, ready for direct-to-consumer launch and institutional partnership conversations with schools and local authorities",
    ],
    tags: ["Strategy", "Technology", "AI"],
    coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    services: ["strategy", "technology", "ai"],
    featured: false,
  },
  {
    _type: "caseStudy",
    _id: "case-study-futureskills-landing-page",
    slug: { _type: "slug", current: "futureskills-landing-page" },
    client: "FutureSkills",
    clientDomain: "futureskills.io",
    industry: "Workforce Development",
    engagement: "Landing Page Design & Development",
    duration: "Single engagement",
    headline: "A Landing Page That Positions a Workforce Development Platform for Its First Impressions",
    challenge: "FutureSkills needed a digital presence that could communicate a multi-audience value proposition — students, professionals, and organizations — clearly and quickly. Workforce development platforms risk feeling either too academic or too corporate, losing the human dimension that makes career readiness feel attainable. Without a compelling landing page, even a well-built platform struggles to convert interest into signups, partnerships, or institutional trust. The first impression had to do real work.",
    approach: "We designed and developed a content-driven landing page built to communicate FutureSkills' value across multiple audience types without overwhelming any of them. The frontend was built in Next.js with TypeScript for performance and maintainability, with Framer Motion handling purposeful animation that guides attention without distracting from the message. A custom CMS framework was implemented to give the FutureSkills team full control over content updates without touching code — critical for a platform where program offerings and resources evolve continuously. Supabase handles backend and storage needs, keeping the architecture lean and scalable as the platform grows.",
    outcomes: [
      "A performant, animated landing page that communicates a multi-stakeholder value proposition — students, professionals, and organizations — within a single cohesive experience",
      "Custom CMS integration giving the internal team full content ownership with no developer dependency for routine updates",
      "Clean, maintainable frontend architecture in Next.js and TypeScript — built to extend into full platform development without a rebuild",
      "A brand-consistent digital presence ready to support partnership conversations, institutional outreach, and user acquisition from day one",
    ],
    tags: ["Strategy", "Design", "Technology"],
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    services: ["strategy", "design", "technology"],
    featured: false,
  },
  {
    _type: "caseStudy",
    _id: "case-study-ranti-ai-business-assistant",
    slug: { _type: "slug", current: "ranti-ai-business-assistant" },
    client: "Ranti AI",
    clientDomain: "ranti.ai",
    industry: "Enterprise AI",
    engagement: "Full Product Lifecycle — Strategy to Launch",
    duration: "End-to-end engagement",
    headline: "An AI Business Assistant That Turns Organizational Knowledge Into Instant, Actionable Answers",
    challenge: "Knowledge inside most organizations is scattered — buried in documents, wikis, past email threads, and the heads of senior staff. When employees need answers, they interrupt colleagues, search through outdated files, or make decisions without the context they need. The cost accumulates quietly: onboarding takes longer, repetitive questions consume expert time, and workflows stall waiting on information that already exists somewhere in the organization. For teams operating at scale, the gap between the knowledge an organization holds and the knowledge employees can actually access in the moment is one of the most expensive inefficiencies no one is measuring.",
    approach: "We designed and built Ranti AI as a conversational business assistant that connects to an organization's existing knowledge infrastructure and makes it queryable in plain language. Rather than training a proprietary model, we engineered a more practical and immediately deployable architecture: OpenAI foundation models enhanced through retrieval-augmented generation, domain-specific knowledge bases, and prompt engineering tuned to each organization's context. A Python backend handles workflow orchestration, document ingestion, and retrieval logic — pulling the right information at the right moment rather than generating answers from memory alone. The Next.js frontend delivers a conversational interface that works across use cases: answering employee questions, summarizing documents, generating content, and automating repeatable workflows — all within a single assistant experience.",
    outcomes: [
      "Organizational knowledge made queryable in plain language — eliminating search friction and reducing dependency on senior staff for routine information retrieval",
      "Document analysis and summarization capabilities that compress hours of review into seconds, directly recovering time across knowledge-intensive teams",
      "RAG architecture ensures responses are grounded in the organization's actual data — reducing hallucination risk and making the assistant immediately trustworthy in enterprise contexts",
      "A modular, scalable foundation that grows with the organization — new knowledge bases, workflows, and integrations added without rebuilding core infrastructure",
    ],
    tags: ["Strategy", "Technology", "AI"],
    coverImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1400&q=80",
    services: ["strategy", "technology", "ai"],
    featured: false,
  },
  {
    _type: "caseStudy",
    _id: "case-study-theramotive-pt-platform",
    slug: { _type: "slug", current: "theramotive-pt-platform" },
    client: "TheraMotive",
    clientDomain: "theramotive.com",
    industry: "Healthcare Technology",
    engagement: "Full Product Lifecycle — Strategy to Launch",
    duration: "Strategy through launch",
    headline: "A HIPAA-Compliant PT Platform That Unified Patients, Clinicians, and Administrators in One System",
    challenge: "Physical therapy practices are operationally complex — patients move through intake, assessment, treatment, and discharge across weeks or months, while clinicians juggle documentation requirements, billing codes, and care coordination simultaneously. Most practices stitch this together across disconnected tools: one system for scheduling, another for clinical notes, another for billing. The result is administrative overhead that pulls therapists away from patient care, compliance risk spread across platforms, and a patient experience that feels fragmented from the first appointment. For growing PT practices, that fragmentation isn't just friction — it's a hard ceiling on how many patients they can serve well.",
    approach: "We designed and built TheraMotive from the ground up as a unified practice management platform purpose-built for physical therapy. Architecture decisions were driven by compliance first — HIPAA-compliant cloud infrastructure with role-based access control ensuring patients, therapists, clinic administrators, and partner organizations each operate within clearly defined permission boundaries. We built a Golang backend for performance and security at scale, paired with a Next.js frontend optimized for the high-frequency workflows PT clinicians and front-desk staff run daily. Core modules — appointment scheduling, treatment plans, clinical notes, secure messaging, billing, and patient progress tracking — were designed as an integrated system from the start, not assembled from separate tools.",
    outcomes: [
      "Four distinct user roles — patient, therapist, administrator, partner — served from a single platform with zero cross-role data exposure",
      "Clinical documentation, billing, and scheduling unified into one workflow, eliminating the multi-platform reconciliation that pulled therapists away from patient care",
      "HIPAA-compliant architecture delivered from day one, removing compliance liability as a barrier to clinic growth and enterprise partnership conversations",
      "A scalable platform foundation built to support patient volume growth, new partner integrations, and expanded clinical modules without re-architecture",
    ],
    tags: ["Strategy", "Technology", "Design"],
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    services: ["strategy", "technology", "design"],
    featured: false,
  },
  {
    _type: "caseStudy",
    _id: "case-study-tastings-catering-inventory",
    slug: { _type: "slug", current: "tastings-catering-inventory" },
    client: "Tastings",
    clientDomain: "tastings.com",
    industry: "Catering & Event Services",
    engagement: "Custom Application Development",
    duration: "Implementation + rollout",
    headline: "Real-Time Inventory That Eliminated Stock-Outs Across Three Cities",
    challenge: "A premium catering company operating across NYC, LA, and Miami had zero real-time visibility into alcohol inventory. Manual, infrequent counts became outdated immediately. The result: 8–12 emergency orders monthly at 20–40% premium pricing, 10–15 hours of staff time lost to procurement firefighting, and a growth ceiling that made expansion into new markets impossible to justify.",
    approach: "We built a five-phase custom inventory application: a cloud-based centralized database with location-aware management and role-based access, an event manager interface with real-time reservation and low-stock alerts, a warehouse operations module with mobile cycle-count tools, an analytics dashboard tracking turnover and purchasing patterns by location, and full team training across all three regions.",
    outcomes: [
      "Rush order incidents dropped from 8–12 monthly to fewer than 1 — a 95%+ reduction",
      "Events affected by shortages fell from ~15% to under 2%",
      "Emergency procurement labor recovered: from 10–15 hours/month to under 1 hour",
      "Conservative annual savings of $43,760–$77,760 from combined rush order, labor, and inventory efficiencies",
    ],
    tags: ["Technology", "Automation"],
    coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    services: ["technology", "ai"],
    featured: false,
  },
];

async function migrate() {
  console.log(`Migrating ${caseStudies.length} case studies to Sanity...`);
  const transaction = client.transaction();
  for (const doc of caseStudies) {
    transaction.createOrReplace(doc);
  }
  await transaction.commit();
  console.log("Migration complete. Publishing all documents...");

  const ids = caseStudies.map((d) => d._id);
  for (const id of ids) {
    await client.patch(id).set({ _id: id }).commit();
    // publish by removing the drafts. prefix
    await client
      .transaction()
      .createOrReplace({ ...caseStudies.find((d) => d._id === id)!, _id: id })
      .commit();
  }

  console.log("Done! All case studies are live in Sanity.");
}

migrate().catch(console.error);
