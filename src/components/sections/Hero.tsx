"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const stats = [
  { value: "50+", label: "Projects shipped" },
  { value: "#1", label: "Best Web Developer ’25" },
  { value: "6+", label: "Industries served" },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          if (ctx.conditions?.reduced) {
            gsap.set("[data-animate]", { opacity: 1, y: 0 });
            gsap.set("[data-underline]", { scaleX: 1 });
            return;
          }
          const tl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 0.9 },
          });
          tl.from("[data-animate]", { opacity: 0, y: 28, stagger: 0.12 })
            .fromTo(
              "[data-underline]",
              { scaleX: 0 },
              { scaleX: 1, duration: 0.7, ease: "power2.inOut" },
              "-=0.4",
            )
            .from(
              "[data-stat]",
              { opacity: 0, y: 16, stagger: 0.1, duration: 0.6 },
              "-=0.5",
            );
        },
      );
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
      {/* soft blue ambient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-blue-100/60 blur-3xl"
      />
      <Container className="relative">
        <div data-animate>
          <Eyebrow>Award-winning web studio · Kenya</Eyebrow>
        </div>

        <h1 className="mt-7 max-w-4xl font-display text-[2.75rem] leading-[1.04] tracking-tight text-heading sm:text-7xl">
          <span data-animate className="block">
            We design &amp; build
          </span>
          <span data-animate className="block">
            digital products that{" "}
            <span className="relative inline-block whitespace-nowrap text-accent">
              win
              <span
                data-underline
                className="absolute inset-x-0 -bottom-1 block h-[5px] origin-left rounded-full bg-accent/50"
              />
            </span>
            .
          </span>
        </h1>

        <p
          data-animate
          className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
        >
          Ken Designers is a studio building modern websites, web apps,
          e-commerce, and AI tools — work that looks sharp, loads fast, and
          turns visitors into customers.
        </p>

        <div data-animate className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Start a project
          </Link>
          <Link
            href="/work"
            className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-heading transition-colors hover:border-heading/30"
          >
            See our work →
          </Link>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
          {stats.map((s) => (
            <div key={s.label} data-stat>
              <dt className="font-display text-3xl text-heading sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-2">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
