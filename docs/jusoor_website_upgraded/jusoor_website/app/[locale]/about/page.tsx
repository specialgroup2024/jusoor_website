import {
  ContentParagraphs,
} from "@/app/components/content-display";
import { siteContent } from "@/app/content";
import { companyProfile } from "@/app/reference-content";
import { getLocale } from "@/app/lib/route-locale";
import { getUi } from "@/app/lib/localized-ui";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const ui = getUi(locale);
  const { about, why } = siteContent.home;

  return (
    <section className="content-page">
      <p className="eyebrow">{ui.aboutLabel}</p>
      <h1>{ui.aboutPageTitle}</h1>
      <ContentParagraphs locale={locale} paragraphs={about.paragraphs} />
      <div className="content-grid" data-reveal>
        <section aria-labelledby="why-heading" className="text-section why-highlight">
          <p className="eyebrow">{ui.whyLabel}</p>
          <h2 id="why-heading">{why.title[locale]}</h2>
          <ContentParagraphs locale={locale} paragraphs={why.paragraphs} />
        </section>
      </div>
      <div className="profile-grid" data-reveal>
        {companyProfile.map((section, index) => (
          <article
            className="content-card"
            data-reveal
            key={section.title.en}
            style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
          >
            <h2>{section.title[locale]}</h2>
            <p>{section.content[locale]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
