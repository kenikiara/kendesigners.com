import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Ken Designers — e-commerce, services, travel, and brand sites across six industries.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Work that earns its keep."
        intro="A cross-section of recent builds — each designed to look sharp and do a job: sell, book, or generate leads."
      />

      <section className="pb-24">
        <Container>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} y={20}>
                <ProjectCard project={p} priority={i < 2} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
