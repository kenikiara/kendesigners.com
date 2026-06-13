import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, web apps, e-commerce, AI tools, SEO, and design systems — strategy, design, and engineering under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to ship."
        intro="From a one-page launch to a full platform, we cover the whole journey — strategy, design, build, and growth."
      />
      <Services />
      <Process />
      <CTA />
    </>
  );
}
