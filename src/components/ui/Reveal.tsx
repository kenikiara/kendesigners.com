"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/cn";

/**
 * Scroll-reveal wrapper. Fades + lifts its content in once it enters the
 * viewport. Honors prefers-reduced-motion via gsap.matchMedia.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const el = ref.current;
          if (!el) return;
          if (ctx.conditions?.reduced) {
            gsap.set(el, { opacity: 1, y: 0 });
            return;
          }
          gsap.fromTo(
            el,
            { opacity: 0, y },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              delay,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            },
          );
        },
      );
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn(className)} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
