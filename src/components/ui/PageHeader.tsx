import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="pt-36 pb-10 sm:pt-44">
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-heading sm:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {intro}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
