export type KbLink = { label: string; href: string };
export type KbEntry = {
  id: string;
  /** Lowercase keywords/phrases used to match a user question. */
  keywords: string[];
  /** The assistant's answer. */
  answer: string;
  links?: KbLink[];
};

export const SUGGESTED_QUESTIONS = [
  "What services do you offer?",
  "Can I see your work?",
  "What awards have you won?",
  "How much does a website cost?",
  "How do I start a project?",
];

export const knowledge: KbEntry[] = [
  {
    id: "services",
    keywords: [
      "service",
      "services",
      "what do you do",
      "offer",
      "build",
      "make",
      "help with",
      "capabilities",
    ],
    answer:
      "Ken Designers covers the whole journey: websites & landing pages, web apps & platforms, e-commerce stores, AI tools & automation, SEO & performance, and brand & design systems — strategy, design, and engineering under one roof.",
    links: [{ label: "See all services", href: "/services" }],
  },
  {
    id: "work",
    keywords: [
      "work",
      "portfolio",
      "projects",
      "examples",
      "case study",
      "case studies",
      "see your",
      "samples",
    ],
    answer:
      "We've shipped work across six industries — Maifa (Amaron batteries), Porridge Powder, Glory Care Services, Pay After Delivery, Flex Interiors, and Blue Lilac Tours. Each has a full case study.",
    links: [{ label: "View our work", href: "/work" }],
  },
  {
    id: "ecommerce",
    keywords: [
      "ecommerce",
      "e-commerce",
      "online store",
      "shop",
      "store",
      "sell online",
      "mpesa",
      "m-pesa",
      "payment",
    ],
    answer:
      "Yes — e-commerce is a core strength. We build storefronts that sell, with clear merchandising, frictionless checkout, and local payments like M-Pesa. Ken is a Gold-winning Best eCommerce Website Developer.",
    links: [
      { label: "Maifa store", href: "/work/maifa" },
      { label: "Pay After Delivery", href: "/work/pay-after-delivery" },
    ],
  },
  {
    id: "ai",
    keywords: [
      "ai",
      "artificial intelligence",
      "chatbot",
      "automation",
      "bot",
      "assistant",
      "machine learning",
    ],
    answer:
      "We build AI tools and automations — chatbots, assistants (like the one you're using now), and workflow automations that put AI to work inside your product and your business.",
    links: [{ label: "AI & automation services", href: "/services" }],
  },
  {
    id: "awards",
    keywords: [
      "award",
      "awards",
      "recognition",
      "best",
      "win",
      "won",
      "prize",
      "accolade",
      "credentials",
    ],
    answer:
      "Ken Murithi is a multi-award-winning developer: Best Website Developer 2025 (Kenya Digital Excellence Awards), Best eCommerce Website Developer — Gold Winner (Kenya E-Commerce Awards), and recognition as a leading e-commerce agency.",
    links: [{ label: "About & recognition", href: "/about" }],
  },
  {
    id: "pricing",
    keywords: [
      "price",
      "pricing",
      "cost",
      "budget",
      "how much",
      "quote",
      "rates",
      "fee",
      "charge",
    ],
    answer:
      "Every project is scoped individually — pricing depends on scale and complexity, from a single landing page to a full platform. Share your goals and budget and we'll send a clear, itemised quote.",
    links: [{ label: "Get a quote", href: "/contact" }],
  },
  {
    id: "timeline",
    keywords: [
      "timeline",
      "how long",
      "duration",
      "time",
      "fast",
      "turnaround",
      "deadline",
      "when",
    ],
    answer:
      "Timelines depend on scope — a focused landing page can ship in days, while a larger site or platform runs a few weeks. We follow a clear path: Discover → Design → Build → Launch & grow.",
    links: [{ label: "Our process", href: "/services" }],
  },
  {
    id: "process",
    keywords: [
      "process",
      "how do you work",
      "steps",
      "approach",
      "workflow",
      "method",
    ],
    answer:
      "Four steps: Discover (goals & audience), Design (wireframes to polished UI you sign off), Build (fast, accessible, maintainable), and Launch & grow (performance, SEO, and conversion tuned after go-live).",
    links: [{ label: "See the process", href: "/services" }],
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "start",
      "get in touch",
      "email",
      "reach",
      "hire",
      "work with",
      "begin",
      "talk",
    ],
    answer:
      "Easiest way to start: tell us about your project on the contact page, or email kenkesly@gmail.com. We reply within one business day with a clear next step.",
    links: [{ label: "Start a project", href: "/contact" }],
  },
  {
    id: "about",
    keywords: [
      "who",
      "about",
      "ken",
      "murithi",
      "founder",
      "team",
      "studio",
      "company",
      "experience",
    ],
    answer:
      "Ken Designers is a hands-on studio led by Ken Murithi, Kenya's Best Website Developer 2025. You work directly with the person designing and building your product — no bloated teams, no lost-in-translation hand-offs.",
    links: [{ label: "More about us", href: "/about" }],
  },
  {
    id: "tech",
    keywords: [
      "tech",
      "technology",
      "stack",
      "framework",
      "wordpress",
      "react",
      "nextjs",
      "next.js",
      "built with",
      "language",
    ],
    answer:
      "We pick the right tool per project — from fast static sites and modern React/Next.js apps to WordPress and custom storefronts. The priority is always speed, accessibility, and maintainability.",
    links: [{ label: "Our services", href: "/services" }],
  },
  {
    id: "location",
    keywords: [
      "location",
      "where",
      "based",
      "kenya",
      "nairobi",
      "remote",
      "country",
      "international",
    ],
    answer:
      "We're based in Kenya and work with clients locally and internationally — we've delivered sites for businesses in Kenya and as far as Australia.",
    links: [{ label: "Get in touch", href: "/contact" }],
  },
];

const GREETING =
  "Hi! I'm Ken Designers' assistant. Ask me about our services, work, awards, pricing, or how to start a project.";

const FALLBACK =
  "I'm not sure about that one — but I can help with our services, work, awards, pricing, process, or contact. You can also email kenkesly@gmail.com and Ken will reply within a day.";

export function isGreeting(text: string) {
  return /^(hi|hey|hello|yo|howdy|good (morning|afternoon|evening))\b/i.test(
    text.trim(),
  );
}

export type KbResult = { answer: string; links?: KbLink[] };

/** Lightweight retrieval: score entries by keyword overlap with the query. */
export function answerQuery(query: string): KbResult {
  const q = query.toLowerCase();
  if (isGreeting(q)) return { answer: GREETING };

  let best: KbEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledge) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(kw)) score += kw.length > 4 ? 2 : 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  if (best && bestScore > 0) {
    return { answer: best.answer, links: best.links };
  }
  return {
    answer: FALLBACK,
    links: [{ label: "Contact us", href: "/contact" }],
  };
}

export const ASSISTANT_GREETING = GREETING;
