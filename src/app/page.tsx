export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Award-winning web studio
      </p>

      <h1 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-heading sm:text-7xl">
        Ken Designers is{" "}
        <span className="relative whitespace-nowrap text-accent">
          building
          <span className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-accent/40" />
        </span>{" "}
        something new.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        Modern websites, web apps, e-commerce, and AI tools. The new home of
        Ken Designers is on its way.
      </p>

      <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-2">
        Best Website Developer 2025 · Kenya Digital Excellence Awards
      </p>
    </main>
  );
}
