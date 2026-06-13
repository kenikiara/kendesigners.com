import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We dig into your goals, audience, and competitors to define what success actually looks like.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Wireframes to polished UI — a clear, on-brand direction you sign off on before a line of code.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Fast, accessible, maintainable front-end with the integrations and content your project needs.",
  },
  {
    n: "04",
    title: "Launch & grow",
    desc: "We ship, measure, and iterate — performance, SEO, and conversion tuned after go-live.",
  },
];

export function Process() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-4xl tracking-tight text-heading sm:text-5xl">
            A clear path from idea to launch.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Reveal key={s.n} y={16} className="h-full">
              <div className="flex h-full flex-col bg-canvas p-7">
                <span className="font-display text-3xl text-accent">{s.n}</span>
                <h3 className="mt-6 font-display text-xl text-heading">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
