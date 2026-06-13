"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { asset } from "@/lib/asset";

const stats = [
  { to: 50, suffix: "+", label: "Projects delivered" },
  { to: 6, suffix: "+", label: "Industries served" },
  { to: 100, suffix: "%", label: "Client-focused builds" },
  { to: 1, prefix: "#", label: "Best Web Developer 2025" },
];

export function Proof() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const nums = gsap.utils.toArray<HTMLElement>("[data-count]");
      nums.forEach((el) => {
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
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Award */}
          <div className="order-2 lg:order-1">
            <Eyebrow>Recognition</Eyebrow>
            <h2 className="mt-5 font-display text-4xl tracking-tight text-heading sm:text-5xl">
              Named Kenya&rsquo;s Best Website Developer, 2025.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Awarded at the 7th Kenya Digital Excellence Awards for outstanding
              creativity, innovation, and excellence in web development — proof
              that good design is good business.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
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
          </div>

          {/* Award visual */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-[0_20px_60px_-20px_rgba(37,99,235,0.3)]">
              <div className="relative aspect-square">
                <Image
                  src={asset("/award.jpg")}
                  alt="Kenya Digital Excellence Awards — Best Website Developer 2025, presented to Ken Murithi"
                  fill
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
