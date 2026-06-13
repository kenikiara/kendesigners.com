import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-display text-xl font-semibold tracking-tight text-heading"
            >
              Ken<span className="text-accent">.</span>Designers
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Award-winning web design &amp; development studio. We build modern
              websites, web apps, e-commerce, and AI tools.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-2">
              Best Website Developer 2025
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-2">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/work", label: "Work" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted transition-colors hover:text-heading"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-2">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:kenkesly@gmail.com"
                  className="text-muted transition-colors hover:text-heading"
                >
                  kenkesly@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kenikiara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-heading"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-accent transition-colors hover:text-blue-700"
                >
                  Start a project →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-2 sm:flex-row sm:items-center">
          <p>© {year} Ken Designers. All rights reserved.</p>
          <p>Designed &amp; built by Ken Murithi.</p>
        </div>
      </Container>
    </footer>
  );
}
