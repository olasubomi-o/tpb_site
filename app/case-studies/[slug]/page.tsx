import { notFound } from "next/navigation";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/queries";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

export const revalidate = 60;

export async function generateStaticParams() {
  const studies = await getAllCaseStudies();
  return studies.map((s) => ({ slug: s.id?.current ?? "" }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [study, allStudies] = await Promise.all([
    getCaseStudyBySlug(slug),
    getAllCaseStudies(),
  ]);

  if (!study) notFound();

  const related = allStudies.filter((c) => c._id !== study._id).slice(0, 2);
  return <CaseStudyDetailClient study={study} related={related} />;
}
