"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getUi, type Locale } from "@/app/lib/localized-ui";

export default function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? `/${locale}`;
  const pagePath = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");
  const targetLocale = locale === "en" ? "ar" : "en";
  const ui = getUi(locale);

  return (
    <Link
      aria-label={ui.switchLanguage}
      className="language-switch"
      href={`/${targetLocale}${pagePath}`}
      hrefLang={targetLocale}
    >
      {targetLocale === "ar" ? "العربية" : "English"}
    </Link>
  );
}
