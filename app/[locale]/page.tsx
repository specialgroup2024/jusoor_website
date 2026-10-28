import Link from "next/link";
import {
  ContentParagraphs,
  ContentSection,
} from "@/app/components/content-display";
import { siteContent } from "@/app/content";
import { getLocale } from "@/app/lib/route-locale";
import { getUi, localizePath } from "@/app/lib/localized-ui";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const ui = getUi(locale);
  const home = siteContent.home;

  return (
    <>
      <section className="hero">
        <p className="eyebrow">{ui.heroLabel}</p>
        <h1>{home.hero.title[locale]}</h1>
        <ContentParagraphs locale={locale} paragraphs={home.hero.paragraphs} />
        <div className="hero-actions">
          <Link
            className="button button-primary"
            href={localizePath(locale, "/services")}
          >
            {ui.exploreSolutions}
          </Link>
          <Link
            className="button button-secondary"
            href={localizePath(locale, "/coverage")}
          >
            {ui.viewCoverage}
          </Link>
        </div>
      </section>
      <div className="home-sections">
        <ContentSection
          id="about"
          label={ui.aboutLabel}
          locale={locale}
          section={home.about}
        />
        <ContentSection
          id="why"
          label={ui.whyLabel}
          locale={locale}
          section={home.why}
        />
      </div>
    </>
  );
}
