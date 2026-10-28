"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitch from "@/app/components/language-switch";
import brandLogo from "@/docs/logo1.png";
import { siteContent } from "@/app/content";
import { getUi, localizePath, type Locale } from "@/app/lib/localized-ui";

export type NavigationItem = {
  href: string;
  label: string;
};

export default function SiteHeader({
  locale,
  navigation,
}: {
  locale: Locale;
  navigation: NavigationItem[];
}) {
  const ui = getUi(locale);
  const pathname = usePathname() ?? `/${locale}`;
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu whenever navigation changes (render-time adjustment).
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(href: string) {
    const target = localizePath(locale, href);
    return href === "/" ? pathname === target : pathname.startsWith(target);
  }

  return (
    <header
      className={`site-header${isScrolled ? " is-scrolled" : ""}${
        menuOpen ? " menu-open" : ""
      }`}
    >
      <div className="header-inner">
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
        <nav aria-label={ui.navigation} className="primary-nav">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={isActive(item.href) ? "is-active" : undefined}
                  href={localizePath(locale, item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <LanguageSwitch locale={locale} />
          <button
            aria-controls="mobile-nav"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            className="nav-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span aria-hidden="true" className="nav-toggle-bar" />
            <span aria-hidden="true" className="nav-toggle-bar" />
            <span aria-hidden="true" className="nav-toggle-bar" />
          </button>
        </div>
      </div>
      <div
        aria-hidden={!menuOpen}
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-nav"
      >
        <ul className="mobile-nav-list">
          {navigation.map((item, index) => (
            <li key={item.href}>
              <Link
                aria-current={isActive(item.href) ? "page" : undefined}
                className={isActive(item.href) ? "is-active" : undefined}
                href={localizePath(locale, item.href)}
                onClick={() => setMenuOpen(false)}
              >
                <span aria-hidden="true" className="mobile-nav-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
