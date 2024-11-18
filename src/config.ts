import type { Site, Socials } from "@types";

export const SITE: Site = {
  URL: "https://example.com",
  NAME: "pagegen",
  TITLE: "Pagegen: Webpage builder for marketers",
  DESCRIPTION:
    "Pagegen is a platform designed for marketing teams to quickly create, test, and optimize high-converting webpages without the need for coding.",
  IMAGE: "/default-og-image.jpg",
  IMAGE_ALT: "A preview of Example Site",

  TWITTER: {
    CARD: "summary_large_image",
    CREATOR: "@odelyonweb",
    IMAGE: "/custom-twitter-image.jpg",
  },
};

export const SOCIALS: Socials = [
  {
    NAME: "Github",
    HREF: "https://github.com/satnaing/astro-paper",
    LINKTITLE: ` ${SITE.title} on Github`,
    ACTIVE: true,
  },
  {
    NAME: "Facebook",
    HREF: "https://github.com/satnaing/astro-paper",
    LINKTITLE: `${SITE.title} on Facebook`,
    ACTIVE: true,
  },
  {
    NAME: "LinkedIn",
    HREF: "https://github.com/satnaing/astro-paper",
    LINKTITLE: `${SITE.title} on LinkedIn`,
    ACTIVE: true,
  },
  {
    NAME: "Mail",
    HREF: "mailto:yourmail@gmail.com",
    LINKTITLE: `Send an email to ${SITE.title}`,
    ACTIVE: false,
  },
];
