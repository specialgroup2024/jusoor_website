import {
  ContentParagraphs,
  ContentSection,
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
      <ContentSection
        id="why"
        label={ui.whyLabel}
        locale={locale}
        section={why}
      />
      <div className="profile-grid">
        {companyProfile.map((section) => (
          <article className="content-card" key={section.title.en}>
            <h2>{section.title[locale]}</h2>
            <p>{section.content[locale]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
