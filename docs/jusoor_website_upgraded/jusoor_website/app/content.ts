import content from "./content.json";
import type { Locale } from "@/app/lib/localized-ui";

export const siteContent = content;
export type LocalizedText = Record<Locale, string>;
export type ContentSection = {
  title: LocalizedText;
  paragraphs: Record<Locale, string[]>;
};
