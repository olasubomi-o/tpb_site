import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";
import { getAllCaseStudies } from "@/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real engagements, real outcomes. See how The Product Builders has delivered AI systems, product strategy, and full product builds for clients across healthcare, fintech, edtech, catering, and more.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();
  return <CaseStudiesClient caseStudies={caseStudies} />;
}
