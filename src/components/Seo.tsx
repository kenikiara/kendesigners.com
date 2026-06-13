const BASE = "https://kendesigners.com";

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE}/#organization`,
  name: "Ken Designers",
  alternateName: "Ken Murithi",
  url: BASE,
  email: "kenkesly@gmail.com",
  image: `${BASE}/og.jpg`,
  logo: `${BASE}/og.jpg`,
  description:
    "Award-winning web design and development studio in Kenya building modern websites, web apps, e-commerce, and AI tools.",
  areaServed: ["Kenya", "Worldwide"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
  },
  founder: {
    "@type": "Person",
    name: "Ken Murithi",
    jobTitle: "Web Designer & Developer",
    sameAs: ["https://github.com/kenikiara"],
    award: [
      "Best Website Developer 2025 — Kenya Digital Excellence Awards",
      "Best eCommerce Website Developer (Gold) — Kenya E-Commerce Awards",
      "Best eCommerce Agency — Kenya E-Commerce Awards",
    ],
  },
  knowsAbout: [
    "Web design",
    "Web development",
    "E-commerce",
    "AI tools",
    "SEO",
    "Brand design",
  ],
  sameAs: ["https://github.com/kenikiara"],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "Ken Designers",
  publisher: { "@id": `${BASE}/#organization` },
};

export function Seo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
