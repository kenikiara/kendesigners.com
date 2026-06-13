import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    n: "01",
    title: "Websites & Landing Pages",
    desc: "Marketing sites that load fast, rank well, and convert — from brochure sites to high-intent landing pages.",
  },
  {
    n: "02",
    title: "Web Apps & Platforms",
    desc: "Custom dashboards, portals, and SaaS products built on modern, maintainable foundations.",
  },
  {
    n: "03",
    title: "E-commerce",
    desc: "Storefronts engineered to sell — clear merchandising, frictionless checkout, and local payments like M-Pesa.",
  },
  {
    n: "04",
    title: "AI Tools & Automation",
    desc: "Chatbots, assistants, and automations that put AI to work inside your product and your business.",
  },
  {
    n: "05",
    title: "SEO & Performance",
    desc: "Technical SEO, Core Web Vitals, and content structure that help the right people find you.",
  },
  {
    n: "06",
    title: "Brand & Design Systems",
    desc: "Identity, UI systems, and reusable components that keep everything consistent as you grow.",
  },
];

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-4xl tracking-tight text-heading sm:text-5xl">
            One studio, end to end.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Strategy, design, and engineering under one roof — so your project
            stays coherent from first sketch to launch day.
          </p>
        </Reveal>

        <div className="mt-14 border-t border-border">
          {services.map((s) => (
            <Reveal key={s.n} y={16}>
              <div className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-b border-border py-8 transition-colors sm:grid-cols-[5rem_1fr_1.2fr] sm:items-baseline">
                <span className="font-display text-sm text-accent">{s.n}</span>
                <h3 className="font-display text-2xl text-heading transition-colors group-hover:text-accent sm:text-3xl">
                  {s.title}
                </h3>
                <p className="col-start-2 max-w-md text-sm leading-relaxed text-muted sm:col-start-3">
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
