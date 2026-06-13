import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-heading px-8 py-16 text-center sm:px-16 sm:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight tracking-tight text-white sm:text-6xl">
                Have a project in mind?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                Tell us what you&rsquo;re building. We&rsquo;ll reply within a
                day with a clear next step.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-heading transition-transform hover:scale-[1.03]"
                >
                  Start a project
                </Link>
                <a
                  href="mailto:kenkesly@gmail.com"
                  className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  kenkesly@gmail.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
