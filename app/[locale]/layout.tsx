import type { Metadata } from "next";
import SiteFrame from "@/app/components/site-frame";
import { siteContent } from "@/app/content";
import { getLocale } from "@/app/lib/route-locale";
import { locales } from "@/app/lib/localized-ui";
import "./globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocale(params);
  return {
    title: siteContent.companyName[locale],
    description:
      locale === "en"
        ? "Jusoor for Insurance Brokerage."
        : "جسور لوساطة التأمين.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = await getLocale(params);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <SiteFrame locale={locale}>{children}</SiteFrame>
      </body>
    </html>
  );
}
