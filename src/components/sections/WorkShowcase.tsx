"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export function WorkShowcase() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Staggered reveal of cards
        gsap.set("[data-card]", { opacity: 0, y: 36 });
        ScrollTrigger.batch("[data-card]", {
          start: "top 86%",
          onEnter: (els) =>
            gsap.to(els, {
              opacity: 1,
              y: 0,
              stagger: 0.12,
              duration: 0.85,
              ease: "power3.out",
              overwrite: true,
            }),
        });

        // Gentle parallax on each screenshot
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-card]", { opacity: 1, y: 0 });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-surface py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-4xl tracking-tight text-heading sm:text-5xl">
              Six builds. Six industries.
            </h2>
          </div>
          <Link
            href="/work"
            className="shrink-0 text-sm font-medium text-accent transition-colors hover:text-blue-700"
          >
            View all work →
          </Link>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {projects.map((p, i) => (
            <div
              key={p.slug}
              data-card
              className={i % 2 === 1 ? "sm:mt-16" : undefined}
              style={{ opacity: 1 }}
            >
              <ProjectCard project={p} priority={i === 0} parallax />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
