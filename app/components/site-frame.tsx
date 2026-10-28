import type { ReactNode } from "react";
import RevealOnScroll from "@/app/components/reveal-on-scroll";
import SiteFooter from "@/app/components/site-footer";
import SiteHeader from "@/app/components/site-header";
import { getUi, type Locale } from "@/app/lib/localized-ui";

export default function SiteFrame({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const ui = getUi(locale);
  const navigation = [
    { href: "/", label: ui.home },
    { href: "/about", label: ui.about },
    { href: "/services", label: ui.solutions },
    { href: "/coverage", label: ui.coverage },
    { href: "/customer-rights", label: ui.customerRights },
    { href: "/customer-complaints", label: ui.customerComplaints },
    { href: "/contact", label: ui.contact },
  ];

  return (
    <>
      <a className="skip-link" href="#main-content">
        {ui.skipToContent}
      </a>
      <SiteHeader locale={locale} navigation={navigation} />
      <main className="site-main" id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter locale={locale} />
      <RevealOnScroll />
    </>
  );
}
