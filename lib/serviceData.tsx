export type ServiceData = {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  detail: string;
  icon: React.ReactNode;
  heroHeadline: string[];
  heroSub: string;
  process: { step: string; title: string; body: string }[];
  included: string[];
  outcomes: { stat: string; label: string }[];
  insight: string;
};

const iconAI = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M4 14h4l3-8 4 16 3-10 2 2h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="22" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const iconStrategy = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M6 22V12l8-8 8 8v10" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M4 22h20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M10 15h8M14 11v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const iconDesign = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M14 3v4M14 21v4M3 14h4M21 14h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const iconTraining = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M4 8h20M4 8v14h20V8" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M4 8l10-5 10 5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M11 14h6M14 14v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const iconTechnology = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="2" y="6" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M9 12l3 3-3 3M13 18h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const services: ServiceData[] = [
  {
    slug: "ai",
    number: "01",
    name: "AI",
    tagline: "Deploy AI that creates measurable business value — not proof-of-concept theater.",
    detail:
      "We identify high-ROI AI opportunities, build production-ready models, and deploy them inside your existing systems — with the operational muscle to keep them performing.",
    icon: iconAI,
    heroHeadline: ["Intelligence", "By Design."],
    heroSub:
      "Most AI initiatives fail before they ship. We've built AI systems inside Fortune 500 environments — from use-case selection to production deployment. We know what generates ROI and what generates noise.",
    process: [
      {
        step: "01",
        title: "Discovery & Use-Case Mapping",
        body: "We audit your data assets, identify high-value AI opportunities, and model ROI before a single line of code is written. We start with the business problem, not the technology.",
      },
      {
        step: "02",
        title: "Data & Infrastructure Readiness",
        body: "Great AI requires great data. We assess, clean, and structure your data infrastructure so models have the foundation they need to perform in production — not just in demos.",
      },
      {
        step: "03",
        title: "Model Development & Validation",
        body: "From classical machine learning to large language models — we build, train, and validate against real-world performance benchmarks. No black boxes. No surprises.",
      },
      {
        step: "04",
        title: "Deployment & Continuous Improvement",
        body: "We deploy to production, monitor model drift, and iterate. AI is not a one-time project — we stay engaged to ensure systems keep performing as your business evolves.",
      },
    ],
    included: [
      "AI opportunity assessment and ROI modelling",
      "Data audit and infrastructure readiness review",
      "Model architecture design and development",
      "Training, testing, and real-world validation",
      "Production deployment and systems integration",
      "Monitoring, alerting, and drift detection",
      "Internal documentation and knowledge transfer",
    ],
    outcomes: [
      { stat: "↑ 3×", label: "Operational efficiency gains" },
      { stat: "90-day", label: "Typical time to production" },
      { stat: "F500", label: "Enterprise AI experience" },
    ],
    insight:
      "The most common AI failure is not technical — it is strategic. Organisations that start with the business problem, not the technology, consistently outperform those that don't.",
  },
  {
    slug: "strategy",
    number: "02",
    name: "Strategy",
    tagline: "Align technology investment with business outcomes. No 90-page decks. No shelf-ware.",
    detail:
      "Positioning, digital roadmaps, and transformation planning built for activation — grounded in real operator experience across global enterprises and backed by accountability to outcomes.",
    icon: iconStrategy,
    heroHeadline: ["Strategy That", "Transforms."],
    heroSub:
      "Most digital strategies fail at activation, not ideation. We've built transformation roadmaps at Mastercard, Toyota, and Warner Bros. We don't just write the strategy — we stay until it moves.",
    process: [
      {
        step: "01",
        title: "Current State Assessment",
        body: "Stakeholder interviews, capability mapping, and competitive benchmarking to establish a clear, evidence-based view of where you stand — and where the gaps are that matter most.",
      },
      {
        step: "02",
        title: "Opportunity & Vision Alignment",
        body: "We facilitate leadership alignment around a shared digital ambition — defining what winning looks like and how it connects directly to commercial objectives.",
      },
      {
        step: "03",
        title: "Strategy & Roadmap Design",
        body: "A phased, prioritised digital strategy with clear initiatives, owners, timelines, and investment cases. Built to move, not sit on a shelf.",
      },
      {
        step: "04",
        title: "Activation & Change Enablement",
        body: "Strategy without execution is expensive documentation. We support activation through governance design, change management, and milestone tracking — keeping momentum where it counts.",
      },
    ],
    included: [
      "Current state assessment and gap analysis",
      "Stakeholder alignment workshops",
      "Competitive and market landscape analysis",
      "Digital strategy and 3-year roadmap",
      "Initiative prioritisation and business cases",
      "Operating model recommendations",
      "Change management and activation plan",
    ],
    outcomes: [
      { stat: "↑ 2×", label: "Strategy execution speed" },
      { stat: "Global", label: "Multi-market experience" },
      { stat: "15+", label: "Transformations delivered" },
    ],
    insight:
      "A digital strategy is only as good as the organisation's willingness to change. The best strategies we have built were designed with transformation — not just technology — at their core.",
  },
  {
    slug: "design",
    number: "03",
    name: "Design",
    tagline: "Customer experience that converts — Design Thinking applied by operators who've shipped at scale.",
    detail:
      "UX research, service design, and digital experience design that bridges what customers need with what the business requires — and is validated against real-world behavior.",
    icon: iconDesign,
    heroHeadline: ["Experience", "First."],
    heroSub:
      "Beautiful products that don't convert are expensive art. We apply Design Thinking with customer obsession and commercial accountability in equal measure — because at scale, every UX decision has a price tag.",
    process: [
      {
        step: "01",
        title: "Empathise & Research",
        body: "Ethnographic research, user interviews, and contextual observation to build genuine empathy for the people your product is designed to serve — not assumptions about them.",
      },
      {
        step: "02",
        title: "Define & Frame",
        body: "Synthesis of research into actionable insights and sharp problem statements. We make sure you're solving the right problem before you invest in solving it well.",
      },
      {
        step: "03",
        title: "Ideate & Prototype",
        body: "Collaborative ideation workshops and rapid prototyping to explore a wide solution space — then converge on the strongest concepts with speed and conviction.",
      },
      {
        step: "04",
        title: "Test, Refine & Deliver",
        body: "Usability testing with real users, iterative refinement, and final design delivery — including a production-ready design system and developer handoff documentation.",
      },
    ],
    included: [
      "User research and customer journey mapping",
      "Insight synthesis and problem framing",
      "Ideation workshops and concept development",
      "Wireframes and interactive prototypes",
      "Usability testing and iteration",
      "High-fidelity UI and visual design",
      "Design system and developer handoff",
    ],
    outcomes: [
      { stat: "↑ 40%", label: "Avg. conversion lift" },
      { stat: "↓ 60%", label: "Support ticket reduction" },
      { stat: "2×", label: "Faster dev implementation" },
    ],
    insight:
      "The most expensive design decision is the one made without talking to a customer first. Design Thinking exists to eliminate exactly that kind of waste.",
  },
  {
    slug: "workforce-training",
    number: "05",
    name: "Workforce Training",
    tagline: "Build the team that can win — from product fundamentals to AI fluency, hands-on not theoretical.",
    detail:
      "Custom, instructor-led training across product development and AI — built around your team's actual gaps, tools, and workflows. Not a generic curriculum. Not a slide deck.",
    icon: iconTraining,
    heroHeadline: ["Build Better", "Teams."],
    heroSub:
      "The bottleneck isn't budget or technology — it's the team. We've trained 250+ professionals across 12 industries. Every programme is hands-on, custom-built, and designed around how your people actually work.",
    process: [
      {
        step: "01",
        title: "Team Assessment",
        body: "We baseline current capabilities across product development and AI literacy — by role, seniority, and function — so we design a programme that closes the right gaps, not the visible ones.",
      },
      {
        step: "02",
        title: "Custom Curriculum Design",
        body: "No off-the-shelf modules. Every session is built around your tools, your workflows, and the exact challenges your team faces on a Monday morning.",
      },
      {
        step: "03",
        title: "Live Workshops & Practicum",
        body: "Instructor-led sessions with real exercises, live builds, and hands-on AI tool practice. Participants leave having done the work — not just watched someone else do it.",
      },
      {
        step: "04",
        title: "Reinforcement & Impact Tracking",
        body: "Post-training assessments, self-paced resource libraries, and optional coaching to embed new behaviours and track measurable competency gains over time.",
      },
    ],
    included: [
      "Pre-training capability assessment by role and function",
      "Custom curriculum for product development track",
      "Custom curriculum for AI upskilling track",
      "Executive alignment workshop",
      "Practitioner-level hands-on sessions",
      "AI tool walkthroughs and live practice",
      "Industry-specific use case library",
      "Post-training competency assessment",
      "Resource library and self-paced follow-up materials",
    ],
    outcomes: [
      { stat: "250+", label: "Professionals trained" },
      { stat: "↑ 3×", label: "Task completion speed post-training" },
      { stat: "12+", label: "Industries covered" },
    ],
    insight:
      "The biggest blocker to better products and AI adoption is not access to tools — it is confidence. Our training is designed to eliminate hesitation and build genuine capability.",
  },
  {
    slug: "technology",
    number: "06",
    name: "Technology",
    tagline: "Engineering that ships. Full-stack delivery from architecture to production, built to scale.",
    detail:
      "Full-stack engineering, cloud architecture, and platform development — built by operators who've shipped 40+ products and know what decisions at sprint one prevent disasters at scale.",
    icon: iconTechnology,
    heroHeadline: ["Vision To", "Reality."],
    heroSub:
      "We've shipped 40+ products across enterprise and startup environments. Full-stack engineering, cloud architecture, and platform delivery — from the first architectural decision to production at scale.",
    process: [
      {
        step: "01",
        title: "Technical Discovery & Architecture",
        body: "Requirements analysis, stack selection, and system architecture design. We make the right decisions upfront — the ones that prevent costly rework when traffic spikes and requirements shift.",
      },
      {
        step: "02",
        title: "Agile Build & Delivery",
        body: "Sprint-based engineering with weekly demos and tight feedback loops. You see working software early and often — not a big reveal at the end of a long engagement.",
      },
      {
        step: "03",
        title: "Quality Assurance & Security",
        body: "Automated testing, peer code review, and security hardening built into every sprint — not bolted on as an afterthought when it's too late to matter.",
      },
      {
        step: "04",
        title: "Launch, Scale & Support",
        body: "Production deployment, performance monitoring, and post-launch support. We stay engaged through stabilisation and into scale — because launch is not the finish line.",
      },
    ],
    included: [
      "Technical scoping and feasibility analysis",
      "System architecture and stack recommendation",
      "Frontend, backend, and API development",
      "Cloud infrastructure design and setup",
      "Automated testing and QA",
      "Security review and hardening",
      "CI/CD pipeline and DevOps setup",
      "Launch monitoring and post-launch support",
    ],
    outcomes: [
      { stat: "40+", label: "Products shipped" },
      { stat: "↓ 50%", label: "Avg. time-to-market" },
      { stat: "99.9%", label: "Platform uptime target" },
    ],
    insight:
      "Technology is not the bottleneck — clarity is. The teams that ship fastest are the ones that spend more time defining what they are building before they start building it.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
