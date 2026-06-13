export type Award = {
  title: string;
  org: string;
  note?: string;
  year?: string;
  image: string;
};

export const awards: Award[] = [
  {
    title: "Best Website Developer",
    org: "Kenya Digital Excellence Awards",
    note: "7th Edition",
    year: "2025",
    image: "/awards/best-website-developer.jpg",
  },
  {
    title: "Best eCommerce Website Developer",
    org: "Kenya E-Commerce Awards",
    note: "Gold Winner · 6th Edition",
    image: "/awards/best-ecommerce-developer.jpg",
  },
  {
    title: "Best eCommerce Agency",
    org: "Kenya E-Commerce Awards",
    note: "6th Edition",
    image: "/awards/best-ecommerce-agency.jpg",
  },
];

export type CeremonyShot = { image: string; alt: string };

export const ceremony: CeremonyShot[] = [
  {
    image: "/awards/ceremony-1.jpg",
    alt: "Ken Murithi receiving the Best Website Developer award at the Kenya E-Commerce Awards gala dinner",
  },
  {
    image: "/awards/ceremony-group.jpg",
    alt: "Winners on stage at the Kenya E-Commerce Awards ceremony",
  },
  {
    image: "/awards/ceremony-2.jpg",
    alt: "Ken Murithi holding his award at the Kenya E-Commerce Awards gala",
  },
];
