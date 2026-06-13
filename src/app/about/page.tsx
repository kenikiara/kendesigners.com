import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTA } from "@/components/sections/CTA";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ken Designers is led by Ken Murithi — Kenya's Best Website Developer 2025. A studio built on craft, speed, and results.",
};

const values = [
  {
    title: "Design with intent",
    desc: "Every element earns its place. Beautiful, yes — but always in service of the goal.",
  },
  {
    title: "Build it to last",
    desc: "Fast, accessible, maintainable code. No throwaway sites that break in six months.",
  },
  {
    title: "Measure what matters",
    desc: "Looks are the start. We optimise for speed, search, and conversions after launch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A studio built on craft and results."
      />

      <section className="pb-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <Reveal>
              <p className="text-xl leading-relaxed text-heading">
                Ken Designers is led by{" "}
                <span className="text-accent">Ken Murithi</span>, named Kenya&rsquo;s
                Best Website Developer at the 2025 Digital Excellence Awards.
              </p>
              <p className="mt-6 max-w-xl leading-relaxed text-muted">
                We&rsquo;re a small, hands-on studio that designs and builds modern
                websites, web apps, e-commerce stores, and AI tools. We&rsquo;ve
                shipped work across batteries and brands, healthcare and travel,
                retail and interiors — the common thread is work that looks
                sharp and performs in the real world.
              </p>
              <p className="mt-6 max-w-xl leading-relaxed text-muted">
                No bloated teams, no hand-offs that lose the plot. You work
                directly with the person designing and building your product.
              </p>
            </Reveal>

            <Reveal y={28}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-blue-50 to-surface">
                <Image
                  src={asset("/ken.png")}
                  alt="Ken Murithi, founder of Ken Designers"
                  fill
                  sizes="(max-width: 1024px) 80vw, 400px"
                  className="object-contain object-bottom"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <Reveal>
            <Eyebrow>What we believe</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {values.map((v) => (
              <Reveal key={v.title} y={16} className="h-full">
                <div className="flex h-full flex-col bg-canvas p-8">
                  <h3 className="font-display text-xl text-heading">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
