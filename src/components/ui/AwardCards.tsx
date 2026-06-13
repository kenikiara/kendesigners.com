import Image from "next/image";
import { awards } from "@/lib/awards";
import { asset } from "@/lib/asset";
import { Reveal } from "@/components/ui/Reveal";

export function AwardCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {awards.map((a) => (
        <Reveal key={a.title} y={20} className="h-full">
          <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_12px_40px_-18px_rgba(37,99,235,0.25)]">
            <div className="relative aspect-[4/5] bg-canvas">
              <Image
                src={asset(a.image)}
                alt={`${a.title} award — ${a.org}`}
                fill
                sizes="(max-width: 640px) 100vw, 360px"
                className="object-cover"
              />
              {a.year && (
                <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-white">
                  {a.year}
                </span>
              )}
            </div>
            <figcaption className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg leading-tight text-heading">
                {a.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{a.org}</p>
              {a.note && (
                <p className="mt-auto pt-3 text-xs uppercase tracking-[0.14em] text-accent">
                  {a.note}
                </p>
              )}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
