import type socialIcons from "@assets/socialIcons";

export type Site = {
  URL: string; // Canonical URL
  NAME: string; // Site name
  TITLE: string; // Default title for meta tags
  DESCRIPTION: string; // Default description for meta tags
  IMAGE: string; // Default image for meta tags
  IMAGE_ALT: string; // Alt text for the image

  OG?: {
    TITLE?: string;
    DESCRIPTION?: string;
    IMAGE?: string;
    IMAGE_ALT?: string;
  };

  TWITTER?: {
    CARD?: "summary" | "summary_large_image" | "app" | "player"; // Twitter Card type
    TITLE?: string;
    DESCRIPTION?: string;
    IMAGE?: string;
    IMAGE_ALT?: string;
    CREATOR?: string; // Twitter handle of the creator
  };
};

export type Socials = {
  NAME: keyof typeof socialIcons;
  HREF: string;
  LINKTITLE: string;
  ACTIVE: boolean;
}[];
