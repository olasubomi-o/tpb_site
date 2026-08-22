import type { Metadata } from "next";
import WorkshopsPageClient from "./WorkshopsPageClient";

export const metadata: Metadata = {
  title: "Workshops & Intensives",
  description:
    "Live, hands-on workshops on AI agents, product development, and building with AI — taught by operators who've done the work at Fortune 500 companies and startups.",
};

const upcomingWorkshopsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Claude Cowork 101: Beyond the Basics",
    startDate: "2026-08-15T10:00:00-04:00",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: { "@type": "VirtualLocation", url: "https://luma.com/41lwfh72" },
    description:
      "Built for the actual work of running a business, not just answering questions. Live demos cover cash flow management, customer follow-ups, reporting, pipeline reviews, and lesser-known Claude Cowork workflows.",
    organizer: { "@type": "Organization", name: "The Product Builders", url: "https://theproductbuilders.com" },
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(upcomingWorkshopsJsonLd) }}
      />
      <WorkshopsPageClient />
    </>
  );
}
