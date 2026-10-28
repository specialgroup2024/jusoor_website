import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/app/lib/localized-ui";

export async function getLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return locale;
}
