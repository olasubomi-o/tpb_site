import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/serviceData";
import ServicePageClient from "./ServicePageClient";

const SEO_TITLES: Record<string, string> = {
  ai: "AI Implementation",
  strategy: "Product Strategy",
  design: "Product Design",
  technology: "Product Development & Engineering",
  "workforce-training": "Workforce Training",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = SEO_TITLES[service.slug] ?? service.name;

  return {
    title,
    description: service.detail,
    openGraph: {
      title: `${title} | The Product Builders`,
      description: service.tagline,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const title = SEO_TITLES[service.slug] ?? service.name;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: title,
    name: title,
    description: service.detail,
    provider: {
      "@type": "ProfessionalService",
      name: "The Product Builders",
      url: "https://theproductbuilders.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageClient slug={slug} />
    </>
  );
}
