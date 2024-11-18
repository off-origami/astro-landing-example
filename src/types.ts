import type socialIcons from "@assets/socialIcons";

export type Page = {
  TITLE: string;
  DESCRIPTION: string;
};

export interface Site extends Page {
  WEBSITE: string;
  AUTHOR: string;
  OGIMAGE?: string;
  LIGHTANDDARKMODE: boolean;
}

export type Socials = {
  NAME: keyof typeof socialIcons;
  HREF: string;
  ACTIVE: boolean;
  LINKTITLE: string;
}[];
