export interface CaseStudy {
  id: string;
  client: string;
  clientDomain: string;
  industry: string;
  engagement: string;
  duration: string;
  headline: string;
  challenge: string;
  approach: string;
  outcomes: string[];
  tags: string[];
  coverImage: string;
  services: string[];
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ambrose-upholstery-automation",
    client: "Ambrose Upholstery Company",
    clientDomain: "ambrose-upholstery.com",
    industry: "Custom Furniture & Repair",
    engagement: "Workflow Automation & AI Strategy",
    duration: "First year",
    headline: "$130,000 Saved Annually by Automating a Broken Workflow",
    challenge:
      "Manual administrative processes were consuming 48.8 hours weekly and costing over $130,000 annually. Quote generation alone took 65–100 minutes across six steps, 30–40% of potential customers never received follow-up, and data was re-entered across email, Google Sheets, QuickBooks, and work orders — simultaneously.",
    approach:
      "We built a five-phase AI-powered automation ecosystem: intelligent email parsing for instant quote generation, automated follow-up sequences with CRM priority scoring, single-entry financial integration directly into QuickBooks, predictive inventory management with vendor automation, and an intelligent customer communication layer for appointments and progress updates.",
    outcomes: [
      "Quote generation time cut from 65 minutes to 5 minutes — a 92% reduction",
      "Follow-up consistency improved from 60% to 100%, recovering $50,000+ in previously lost revenue",
      "Invoice accuracy improved from 85% to 99%; no-show rate dropped from 15% to under 3%",
      "Total annual value of $131,770 against a $1,200 technology cost — a 107× return on investment",
    ],
    tags: ["AI", "Automation", "Strategy"],
    coverImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80",
    services: ["ai", "strategy"],
    featured: true,
  },
  {
    id: "harambeans-fellowship-selection",
    client: "Harambeans",
    clientDomain: "harambeans.com",
    industry: "Nonprofit / Entrepreneur Development",
    engagement: "Operational Automation & CRM Integration",
    duration: "One selection cycle",
    headline: "5,000+ Applicants. 6 People. Zero Data Loss.",
    challenge:
      "A prestigious African entrepreneur alliance ran its selective fellowship program on Excel spreadsheets — a system riddled with data integrity issues, manual data transfer, broken workflows, and communication breakdowns. With only 3 full-time staff and 3 part-time volunteers managing a three-round interview process, the fragile setup risked overlooking talent and damaging organizational credibility under pressure.",
    approach:
      "We implemented a three-phase integration: a custom Airtable database as the single source of truth with multi-stage pipeline tracking, Zapier automation to eliminate manual data entry and conditionally route applicants to the right interviewers, and Mailchimp for stage-specific, fellow-type-segmented communications across every round.",
    outcomes: [
      "100% elimination of manual data entry across all three selection rounds",
      "Zero data loss across 5,000+ applicants in a single cycle",
      "6-person team confidently managed a process that previously required far more overhead",
      "Scalable CRM infrastructure built for long-term relationship management beyond the fellowship",
    ],
    tags: ["Automation", "Technology", "Strategy"],
    coverImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80",
    services: ["technology", "strategy"],
    featured: true,
  },
  {
    id: "plaited-ios-app",
    client: "PLAITED",
    clientDomain: "plaited.app",
    industry: "Beauty Technology",
    engagement: "Full Product Lifecycle — Strategy to Launch",
    duration: "Ideation through beta launch",
    headline: "From Community Problem to Production iOS App",
    challenge:
      "Haircare discovery for Black and textured hair is deeply personal and highly fragmented. Users piece together recommendations from Instagram, TikTok, group chats, and word-of-mouth because existing booking platforms reduce haircare to generic ratings — stripping out the trust, cultural context, and nuance that actually drive confident decisions. PLAITED needed more than a marketplace. They needed infrastructure built around lived experiences, community validation, and visual storytelling. The challenge was translating that insight into a focused MVP without foreclosing long-term growth.",
    approach:
      "We partnered with PLAITED across the full product lifecycle. Starting with product strategy, market and competitive analysis, and brainstorm facilitation, we defined a clear MVP scope centered on community validation, context-rich reviews, and personalized discovery. We produced a complete PRD with defined user flows and feature prioritization, then carried that clarity directly into UX and UI design and full iOS application development — all the way through beta launch preparation and App Store readiness.",
    outcomes: [
      "Refined product vision with a structured MVP strategy and complete PRD",
      "Fully designed and developed iOS application ready for App Store launch",
      "Clear feature prioritization that balanced immediate user experience with long-term platform scalability",
      "Stronger positioning strategy within the beauty technology space for fundraising and growth",
    ],
    tags: ["Strategy", "Design", "Technology"],
    coverImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
    services: ["strategy", "design", "technology"],
    featured: false,
  },
  {
    id: "tastings-catering-inventory",
    client: "Tastings",
    clientDomain: "tastings.com",
    industry: "Catering & Event Services",
    engagement: "Custom Application Development",
    duration: "Implementation + rollout",
    headline: "Real-Time Inventory That Eliminated Stock-Outs Across Three Cities",
    challenge:
      "A premium catering company operating across NYC, LA, and Miami had zero real-time visibility into alcohol inventory. Manual, infrequent counts became outdated immediately. The result: 8–12 emergency orders monthly at 20–40% premium pricing, 10–15 hours of staff time lost to procurement firefighting, and a growth ceiling that made expansion into new markets impossible to justify.",
    approach:
      "We built a five-phase custom inventory application: a cloud-based centralized database with location-aware management and role-based access, an event manager interface with real-time reservation and low-stock alerts, a warehouse operations module with mobile cycle-count tools, an analytics dashboard tracking turnover and purchasing patterns by location, and full team training across all three regions.",
    outcomes: [
      "Rush order incidents dropped from 8–12 monthly to fewer than 1 — a 95%+ reduction",
      "Events affected by shortages fell from ~15% to under 2%",
      "Emergency procurement labor recovered: from 10–15 hours/month to under 1 hour",
      "Conservative annual savings of $43,760–$77,760 from combined rush order, labor, and inventory efficiencies",
    ],
    tags: ["Technology", "Automation"],
    coverImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    services: ["technology", "ai"],
    featured: false,
  },
];

export function getCaseStudiesByService(serviceSlug: string): CaseStudy[] {
  return caseStudies.filter((c) => c.services.includes(serviceSlug));
}

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id);
}

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
export const nonFeaturedCaseStudies = caseStudies.filter((c) => !c.featured);
