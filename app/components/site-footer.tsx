import Link from "next/link";
import { siteContent } from "@/app/content";
import { contactDetails } from "@/app/reference-content";
import { getUi, localizePath, type Locale } from "@/app/lib/localized-ui";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const year = new Date().getFullYear();
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
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-name">{siteContent.companyName[locale]}</p>
          <p className="footer-tagline">{ui.footerTagline}</p>
        </div>
        <nav aria-label={ui.footerNavigation} className="footer-column">
          <p className="footer-heading">{ui.footerNavigation}</p>
          <ul className="footer-nav">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={localizePath(locale, item.href)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-column">
          <p className="footer-heading">{ui.footerContact}</p>
          <ul className="footer-nav">
            <li>
              <a href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
            </li>
            <li>
              <a dir="ltr" href={`tel:${contactDetails.phoneHref}`}>
                {contactDetails.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-legal">
        <p>
          © {year} {siteContent.companyName[locale]} — {ui.footerRights}
        </p>
      </div>
    </footer>
  );
}
