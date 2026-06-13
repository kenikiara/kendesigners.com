"use client";

import { useState } from "react";

// Replace with your Formspree form ID (formspree.io → New Form).
// Until then, submissions fall back to opening the user's email client.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
const FALLBACK_EMAIL = "kenkesly@gmail.com";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No endpoint configured yet → graceful mailto fallback.
    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      const subject = encodeURIComponent(
        `New project enquiry from ${data.get("name") || "website"}`,
      );
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
      );
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-10 text-center">
        <p className="font-display text-2xl text-heading">Thanks — got it.</p>
        <p className="mt-3 text-muted">
          We&rsquo;ll get back to you within a day. Check your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
        />
      </div>
      <Field label="Company (optional)" name="company" required={false} />
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-heading"
        >
          What are you building?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-heading outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
          placeholder="A few lines about your project, timeline, and budget…"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong. Email us at{" "}
            <a className="underline" href={`mailto:${FALLBACK_EMAIL}`}>
              {FALLBACK_EMAIL}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-heading"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-heading outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
      />
    </div>
  );
}
