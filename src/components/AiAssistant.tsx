"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import {
  answerQuery,
  ASSISTANT_GREETING,
  SUGGESTED_QUESTIONS,
  type KbLink,
} from "@/lib/knowledge";
import { cn } from "@/lib/cn";

type Msg = {
  role: "user" | "bot";
  text: string;
  links?: KbLink[];
};

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: ASSISTANT_GREETING },
  ]);

  const panelRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!open || !panelRef.current) return;
      gsap.from(panelRef.current, {
        opacity: 0,
        y: 16,
        scale: 0.96,
        duration: 0.35,
        ease: "power3.out",
      });
    },
    { dependencies: [open] },
  );

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: q }]);
    setTyping(true);
    // Simulate "thinking" for a natural feel; answer comes from the KB.
    const delay = 450 + Math.random() * 500;
    window.setTimeout(() => {
      const res = answerQuery(q);
      setTyping(false);
      setMessages((m) => [
        ...m,
        { role: "bot", text: res.answer, links: res.links },
      ]);
    }, delay);
  }

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        aria-label={open ? "Close assistant" : "Open AI assistant"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_30px_-6px_rgba(37,99,235,0.6)] transition-transform hover:scale-105 cursor-pointer"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M21 11.5a8.5 8.5 0 0 1-12.4 7.55L3 20.5l1.45-5.6A8.5 8.5 0 1 1 21 11.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <circle cx="8.5" cy="11.5" r="1" fill="currentColor" />
            <circle cx="12" cy="11.5" r="1" fill="currentColor" />
            <circle cx="15.5" cy="11.5" r="1" fill="currentColor" />
          </svg>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Ken Designers assistant"
          className="fixed bottom-24 right-5 z-[60] flex h-[32rem] max-h-[calc(100vh-7rem)] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_60px_-12px_rgba(0,0,0,0.25)]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border bg-canvas px-4 py-3">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-canvas bg-green-500" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M21 11.5a8.5 8.5 0 0 1-12.4 7.55L3 20.5l1.45-5.6A8.5 8.5 0 1 1 21 11.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="text-sm font-medium text-heading">Ken&rsquo;s Assistant</p>
              <p className="text-xs text-muted-2">Usually replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "flex",
                  m.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    m.role === "user"
                      ? "bg-accent text-white"
                      : "bg-canvas text-heading",
                  )}
                >
                  <p>{m.text}</p>
                  {m.links && m.links.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="rounded-full border border-accent/30 bg-surface px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-white"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl bg-canvas px-3.5 py-3">
                  <Dot /> <Dot delay="0.15s" /> <Dot delay="0.3s" />
                </div>
              </div>
            )}

            {messages.length <= 1 && !typing && (
              <div className="space-y-2 pt-1">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="block w-full rounded-xl border border-border bg-canvas px-3 py-2 text-left text-sm text-heading transition-colors hover:border-accent/40 hover:text-accent cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, work, pricing…"
              className="min-w-0 flex-1 rounded-full border border-border bg-canvas px-4 py-2.5 text-sm text-heading outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-blue-700 cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 12l16-8-6 16-2.5-6.5L4 12Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function Dot({ delay = "0s" }: { delay?: string }) {
  return (
    <span
      className="h-2 w-2 animate-bounce rounded-full bg-muted-2"
      style={{ animationDelay: delay }}
    />
  );
}
