import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";

/** A project shown inside a faux browser window. */
export function ProjectCard({
  project,
  className,
  priority = false,
  parallax = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
  parallax?: boolean;
}) {
  const host = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn("group block", className)}
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_10px_40px_-12px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_-12px_rgba(37,99,235,0.25)]">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-canvas px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="ml-3 truncate rounded-full bg-surface px-3 py-1 text-[11px] text-muted-2">
            {host}
          </span>
        </div>
        {/* screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden bg-canvas">
          <Image
            src={asset(project.image)}
            alt={`${project.name} — ${project.blurb}`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 800px"
            data-parallax={parallax || undefined}
            className={cn(
              "object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]",
              parallax && "scale-[1.12]",
            )}
          />
        </div>
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl text-heading">{project.name}</h3>
        <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-muted-2">
          {project.category} · {project.year}
        </span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">
        {project.blurb}
      </p>
    </Link>
  );
}
