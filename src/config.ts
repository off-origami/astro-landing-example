import type { Site, Socials } from "@types";

export const SITE: Site = {
  url: "https://example.com",
  name: "pagegen",
  title: "Pagegen: Webpage builder for marketers",
  description:
    "Pagegen is a platform designed for marketing teams to quickly create, test, and optimize high-converting webpages without the need for coding.",
  image: "/default-og-image.jpg",
  imageAlt: "A preview of Example Site",

  twitter: {
    card: "summary_large_image",
    creator: "@odelyonweb",
    image: "/custom-twitter-image.jpg",
  },
};

export const SOCIALS: Socials = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
