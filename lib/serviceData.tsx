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
    tagline:
      "Implement AI Agents and workflow-embedded AI that drive measurable business outcomes  not demos.",
    detail:
      "We design and implement AI Agents that execute real work across your processes  embedded into the tools your teams already use, integrated with your systems, and governed for reliability, security, and ROI.",
    icon: iconAI,
    heroHeadline: ["Intelligence", "By Design."],
    heroSub:
      "Most AI programmes stall at prototypes because they aren't wired into real workflows. We implement production AI Agents that plug into your tools, orchestrate tasks end-to-end, and improve continuously with measurable impact.",
    process: [
      {
        step: "01",
        title: "Workflow Discovery & ROI Mapping",
        body: "We map the workflows that drive cost, speed, and revenue. Then we pinpoint where AI Agents can remove bottlenecks, standardise decisions, and automate execution  with clear success metrics.",
      },
      {
        step: "02",
        title: "Agent Architecture & Tooling",
        body: "We design the agent(s), their responsibilities, and the tools they can use (APIs, databases, CRMs, ticketing, docs). We define guardrails, permissions, auditability, and human-in-the-loop checkpoints.",
      },
      {
        step: "03",
        title: "Build, Integrate & Validate",
        body: "We implement the agents, integrate with your existing systems, and validate against real-world scenarios. We focus on reliability, latency, and quality  not just impressive prompts.",
      },
      {
        step: "04",
        title: "Production Rollout & Optimisation",
        body: "We ship into production with monitoring, analytics, and escalation paths. Then we iterate on prompts, tools, and workflows to steadily improve outcomes while maintaining control and compliance.",
      },
    ],
    included: [
      "Workflow mapping and agent opportunity assessment",
      "Agent architecture, tool selection, and guardrails",
      "LLM/provider selection and evaluation (where needed)",
      "Systems integration (APIs, CRMs, ERPs, data stores)",
      "RAG / knowledge integration for your internal content",
      "Quality assurance, red-teaming, and safety testing",
      "Production deployment, monitoring, and analytics",
      "Documentation, enablement, and operational handover",
    ],
    outcomes: [
      { stat: "↓ 30–60%", label: "Manual work removed from key workflows" },
      { stat: "5 Weeks", label: "Time to deploy first agent in production" },
      { stat: "Audit-ready", label: "Governed, observable AI in production" },
    ],
    insight:
      "AI creates value when it is embedded into the workflow, connected to real tools, and measured like any other system. Agents are only useful when they reliably do the work.",
  },
  {
    slug: "strategy",
    number: "02",
    name: "Strategy",
    tagline: "Align technology investment with business outcomes. No 90-page decks. No shelf-ware.",
    detail:
      "Positioning, digital roadmaps, and transformation planning built for activation  grounded in real operator experience across global enterprises and backed by accountability to outcomes.",
    icon: iconStrategy,
    heroHeadline: ["Strategy That", "Transforms."],
    heroSub:
      "Most digital strategies fail at activation, not ideation. We've built transformation roadmaps at Fortune 500 and startups. We don't just write the strategy  we stay until it moves.",
    process: [
      {
        step: "01",
        title: "Current State Assessment",
        body: "Stakeholder interviews, capability mapping, and competitive benchmarking to establish a clear, evidence-based view of where you stand  and where the gaps are that matter most.",
      },
      {
        step: "02",
        title: "Opportunity & Vision Alignment",
        body: "We facilitate leadership alignment around a shared digital ambition  defining what winning looks like and how it connects directly to commercial objectives.",
      },
      {
        step: "03",
        title: "Strategy & Roadmap Design",
        body: "A phased, prioritised digital strategy with clear initiatives, owners, timelines, and investment cases. Built to move, not sit on a shelf.",
      },
      {
        step: "04",
        title: "Activation & Change Enablement",
        body: "Strategy without execution is expensive documentation. We support activation through governance design, change management, and milestone tracking  keeping momentum where it counts.",
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
      "A digital strategy is only as good as the organisation's willingness to change. The best strategies we have built were designed with transformation  not just technology  at their core.",
  },
  {
    slug: "design",
    number: "03",
    name: "Design",
    tagline: "Customer experience that converts  Design Thinking applied by operators who've shipped at scale.",
    detail:
      "UX research, service design, and digital experience design that bridges what customers need with what the business requires  and is validated against real-world behavior.",
    icon: iconDesign,
    heroHeadline: ["Experience", "First."],
    heroSub:
      "Beautiful products that don't convert are expensive art. We apply Design Thinking with customer obsession and commercial accountability in equal measure  because at scale, every UX decision has a price tag.",
    process: [
      {
        step: "01",
        title: "Empathise & Research",
        body: "Ethnographic research, user interviews, and contextual observation to build genuine empathy for the people your product is designed to serve  not assumptions about them.",
      },
      {
        step: "02",
        title: "Define & Frame",
        body: "Synthesis of research into actionable insights and sharp problem statements. We make sure you're solving the right problem before you invest in solving it well.",
      },
      {
        step: "03",
        title: "Ideate & Prototype",
        body: "Collaborative ideation workshops and rapid prototyping to explore a wide solution space  then converge on the strongest concepts with speed and conviction.",
      },
      {
        step: "04",
        title: "Test, Refine & Deliver",
        body: "Usability testing with real users, iterative refinement, and final design delivery  including a production-ready design system and developer handoff documentation.",
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
    slug: "technology",
    number: "05",
    name: "Technology",
    tagline: "Engineering that ships. Full-stack delivery from architecture to production, built to scale.",
    detail:
      "Full-stack engineering, cloud architecture, and platform development  built by operators who've shipped 40+ products and know what decisions at sprint one prevent disasters at scale.",
    icon: iconTechnology,
    heroHeadline: ["Vision To", "Reality."],
    heroSub:
      "We've shipped 40+ products across enterprise and startup environments. Full-stack engineering, cloud architecture, and platform delivery  from the first architectural decision to production at scale.",
    process: [
      {
        step: "01",
        title: "Technical Discovery & Architecture",
        body: "Requirements analysis, stack selection, and system architecture design. We make the right decisions upfront  the ones that prevent costly rework when traffic spikes and requirements shift.",
      },
      {
        step: "02",
        title: "Agile Build & Delivery",
        body: "Sprint-based engineering with weekly demos and tight feedback loops. You see working software early and often  not a big reveal at the end of a long engagement.",
      },
      {
        step: "03",
        title: "Quality Assurance & Security",
        body: "Automated testing, peer code review, and security hardening built into every sprint  not bolted on as an afterthought when it's too late to matter.",
      },
      {
        step: "04",
        title: "Launch, Scale & Support",
        body: "Production deployment, performance monitoring, and post-launch support. We stay engaged through stabilisation and into scale  because launch is not the finish line.",
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
      "Technology is not the bottleneck  clarity is. The teams that ship fastest are the ones that spend more time defining what they are building before they start building it.",
  },
  {
    slug: "workforce-training",
    number: "06",
    name: "Workforce Training",
    tagline: "Build the team that can win  from product fundamentals to AI fluency, hands-on not theoretical.",
    detail:
      "Custom, instructor-led training across product development and AI  built around your team's actual gaps, tools, and workflows. Not a generic curriculum. Not a slide deck.",
    icon: iconTraining,
    heroHeadline: ["Build Better", "Teams."],
    heroSub:
      "The bottleneck isn't budget or technology  it's the team. We've trained 250+ professionals across 12 industries. Every programme is hands-on, custom-built, and designed around how your people actually work.",
    process: [
      {
        step: "01",
        title: "Team Assessment",
        body: "We baseline current capabilities across product development and AI literacy  by role, seniority, and function  so we design a programme that closes the right gaps, not the visible ones.",
      },
      {
        step: "02",
        title: "Custom Curriculum Design",
        body: "No off-the-shelf modules. Every session is built around your tools, your workflows, and the exact challenges your team faces on a Monday morning.",
      },
      {
        step: "03",
        title: "Live Workshops & Practicum",
        body: "Instructor-led sessions with real exercises, live builds, and hands-on AI tool practice. Participants leave having done the work  not just watched someone else do it.",
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
      "The biggest blocker to better products and AI adoption is not access to tools  it is confidence. Our training is designed to eliminate hesitation and build genuine capability.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
