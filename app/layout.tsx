import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Company name | Reassurance company",
  description:
    "A placeholder website for a reassurance company. Company information is awaiting confirmation.",
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <header className="site-header">
            <Link aria-label="Company name, home" className="brand" href="/">
              <span className="brand-mark" aria-hidden="true" />
              <span className="brand-copy">
                <span className="brand-name">Company name</span>
                <span className="brand-type">Reassurance company</span>
              </span>
            </Link>
            <nav aria-label="Primary navigation">
              <ul className="nav-list">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <main className="site-main" id="main-content" tabIndex={-1}>
            {children}
          </main>
          <footer className="site-footer">
            <p>Company name and contact details are awaiting confirmation.</p>
            <span>Reassurance company · Website content pending</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
