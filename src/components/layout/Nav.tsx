"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/cn";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useGSAP(() => {
    const st = ScrollTrigger.create({
      start: "top -8",
      onUpdate: (self) => setScrolled(self.scroll() > 8),
      onToggle: (self) => setScrolled(self.isActive || self.scroll() > 8),
    });
    setScrolled(window.scrollY > 8);
    return () => st.kill();
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 sm:px-8",
          scrolled
            ? "my-2 rounded-full border border-border bg-surface/80 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md"
            : "my-4 py-2",
        )}
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-heading"
          onClick={() => setOpen(false)}
        >
          Ken<span className="text-accent">.</span>Designers
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm text-muted transition-colors hover:text-heading",
                pathname.startsWith(l.href) && "text-heading",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 md:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-heading md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mt-1 rounded-2xl border border-border bg-surface p-4 shadow-lg md:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-heading transition-colors hover:bg-canvas"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-4 py-3 text-center text-base font-medium text-white"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
