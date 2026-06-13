import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Ken Designers. Tell us what you're building and we'll reply within a day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something."
        intro="Tell us about your project. We reply within one business day with a clear next step."
      />

      <section className="pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-xs uppercase tracking-[0.16em] text-muted-2">
                    Email
                  </h2>
                  <a
                    href="mailto:kenkesly@gmail.com"
                    className="mt-2 block font-display text-xl text-heading transition-colors hover:text-accent"
                  >
                    kenkesly@gmail.com
                  </a>
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-[0.16em] text-muted-2">
                    Elsewhere
                  </h2>
                  <a
                    href="https://github.com/kenikiara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-heading transition-colors hover:text-accent"
                  >
                    GitHub — kenikiara
                  </a>
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-[0.16em] text-muted-2">
                    Recognition
                  </h2>
                  <p className="mt-2 text-heading">
                    Best Website Developer 2025
                  </p>
                  <p className="text-sm text-muted">
                    Kenya Digital Excellence Awards
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal y={16}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
