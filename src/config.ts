import type { Site, Socials } from "./types";

export const SITE: Site = {
  canonicalURL: "http://localhost",
  lang: "en",
  author: "Daniel Adrian",
  name: "pagegen",
  title: "Pagegen: Webpage builder for marketers",
  description:
    "Pagegen is a platform designed for marketing teams to quickly create, test, and optimize webpages without the need for coding.",
  image: "og.jpeg",
  imageAlt: "Pagegen: Webpage builder for marketers",

  twitter: {
    card: "summary_large_image",
    image: "pagegen-og.jpg",
  },
};

export const SOCIALS: Socials = [
  {
    name: "Github",
    href: "https://github.com/truedaniyyel/astro-landing-example",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/truedaniyyel",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/truedaniyyel",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
];
