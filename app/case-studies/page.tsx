import CaseStudiesClient from "./CaseStudiesClient";
import { getAllCaseStudies } from "@/lib/queries";

export const revalidate = 60;

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();
  return <CaseStudiesClient caseStudies={caseStudies} />;
}
