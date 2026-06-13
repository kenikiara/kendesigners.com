import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.blurb,
    openGraph: { images: [project.image] },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const host = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <>
      <section className="pt-36 pb-12 sm:pt-44">
        <Container>
          <Reveal>
            <Link
              href="/work"
              className="text-sm text-muted transition-colors hover:text-heading"
            >
              ← All work
            </Link>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>{project.category}</Eyebrow>
                <h1 className="mt-5 font-display text-5xl tracking-tight text-heading sm:text-6xl">
                  {project.name}
                </h1>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Visit live site ↗
              </a>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {project.summary}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Hero shot */}
      <section className="pb-16">
        <Container>
          <Reveal y={28}>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-2 border-b border-border bg-canvas px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="ml-3 rounded-full bg-surface px-3 py-1 text-[11px] text-muted-2">
                  {host}
                </span>
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={`${project.name} — homepage`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1100px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Meta + highlights */}
      <section className="pb-24">
        <Container>
          <div className="grid gap-12 border-t border-border pt-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <dl className="space-y-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-2">
                    Role
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.role.map((r) => (
                      <span
                        key={r}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-heading"
                      >
                        {r}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-2">
                    Focus
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-heading"
                      >
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-2">
                    Year
                  </dt>
                  <dd className="mt-2 text-sm text-heading">{project.year}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal y={16}>
              <h2 className="font-display text-2xl text-heading">Highlights</h2>
              <ul className="mt-6 space-y-4">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Next project */}
      <section className="pb-8">
        <Container>
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-6 border-t border-border py-10"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.16em] text-muted-2">
                Next project
              </span>
              <p className="mt-2 font-display text-3xl text-heading transition-colors group-hover:text-accent sm:text-4xl">
                {next.name}
              </p>
            </div>
            <span className="font-display text-3xl text-accent transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Container>
      </section>

      <CTA />
    </>
  );
}
