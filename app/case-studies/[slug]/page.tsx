import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/queries";
import { absoluteUrl } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

export const revalidate = 60;

export async function generateStaticParams() {
  const studies = await getAllCaseStudies();
  return studies.map((s) => ({ slug: s.id?.current ?? "" }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return {};

  const url = absoluteUrl(`/case-studies/${slug}`);
  const description = `${study.client}: ${study.headline}`;
  return {
    title: study.headline,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: study.headline,
      description,
      type: "article",
      url,
      images: study.coverImage ? [{ url: study.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: study.headline,
      description,
      images: study.coverImage ? [study.coverImage] : undefined,
    },
  };
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
  const url = absoluteUrl(`/case-studies/${slug}`);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Case Studies", item: absoluteUrl("/case-studies") },
      { "@type": "ListItem", position: 2, name: study.headline, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <CaseStudyDetailClient study={study} related={related} />
    </>
  );
}
