import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import LanguageSwitch from "@/app/components/language-switch";
import { siteContent } from "@/app/content";
import brandLogo from "@/docs/logo1.png";
import {
  getUi,
  localizePath,
  type Locale,
} from "@/app/lib/localized-ui";

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
      <div className="site-shell">
        <header className="site-header">
          <Link
            aria-label={`${siteContent.companyName[locale]} — ${ui.home}`}
            className="brand"
            href={localizePath(locale, "/")}
          >
            <Image
              alt=""
              className="brand-logo"
              height={70}
              priority
              src={brandLogo}
              width={48}
            />
            <span className="brand-copy">
              <span className="brand-name">{siteContent.companyName[locale]}</span>
              <span className="brand-type">{ui.heroLabel}</span>
            </span>
          </Link>
          <div className="header-controls">
            <nav aria-label={ui.navigation}>
              <ul className="nav-list">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={localizePath(locale, item.href)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageSwitch locale={locale} />
          </div>
        </header>
        <main className="site-main" id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <p>{siteContent.companyName[locale]}</p>
        </footer>
      </div>
    </>
  );
}
