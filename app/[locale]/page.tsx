import {
  ContentParagraphs,
  ContentSection,
} from "@/app/components/content-display";
import HomeCarousel from "@/app/components/home-carousel";
import { siteContent } from "@/app/content";
import { getLocale } from "@/app/lib/route-locale";
import { getUi } from "@/app/lib/localized-ui";

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
      <HomeCarousel locale={locale} />
      <section aria-labelledby="assets-heading" className="home-intro">
        <p className="eyebrow">{ui.aboutLabel}</p>
        <h2 id="assets-heading">{home.hero.title[locale]}</h2>
        <ContentParagraphs locale={locale} paragraphs={home.hero.paragraphs} />
      </section>
      <div className="home-sections">
        <ContentSection
          id="about"
          label={ui.aboutLabel}
          locale={locale}
          section={home.about}
        />
        <div className="why-section">
          <ContentSection
            id="why"
            label={ui.whyLabel}
            locale={locale}
            section={home.why}
          />
          <ul aria-label={ui.whyLabel} className="feature-list">
            {ui.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
