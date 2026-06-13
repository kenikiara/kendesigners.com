import Image from "next/image";
import { ceremony } from "@/lib/awards";
import { asset } from "@/lib/asset";
import { Reveal } from "@/components/ui/Reveal";

export function CeremonyGallery() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {ceremony.map((shot, i) => (
        <Reveal
          key={shot.image}
          y={20}
          className={i === 1 ? "sm:row-span-2" : undefined}
        >
          <div
            className={`relative overflow-hidden rounded-2xl border border-border bg-canvas ${
              i === 1 ? "aspect-[4/5] sm:h-full" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={asset(shot.image)}
              alt={shot.alt}
              fill
              sizes="(max-width: 640px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
