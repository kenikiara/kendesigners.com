"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AwardCards } from "@/components/ui/AwardCards";

const stats = [
  { to: 50, suffix: "+", label: "Projects delivered" },
  { to: 6, suffix: "+", label: "Industries served" },
  { to: 3, suffix: "", label: "National awards" },
  { to: 1, prefix: "#", label: "Best Web Developer 2025" },
];

export function Proof() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        if (reduced) {
          el.textContent = String(end);
          return;
        }
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: root },
  );

  return (
    <section ref={root} className="py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Recognition</Eyebrow>
          <h2 className="mt-5 font-display text-4xl tracking-tight text-heading sm:text-5xl">
            Award-winning, officially.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Ken Murithi is a multi-award-winning developer, recognised at
            Kenya&rsquo;s national digital and e-commerce awards for creativity,
            innovation, and results.
          </p>
        </div>

        <div className="mt-12">
          <AwardCards />
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-4xl text-heading sm:text-5xl">
                {s.prefix}
                <span data-count={s.to}>0</span>
                {s.suffix}
              </dt>
              <dd className="mt-1.5 text-xs uppercase tracking-[0.14em] text-muted-2">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
