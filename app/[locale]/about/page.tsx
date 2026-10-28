import {
  ContentParagraphs,
  ContentSection,
} from "@/app/components/content-display";
import { siteContent } from "@/app/content";
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
      <h1>{about.title[locale]}</h1>
      <ContentParagraphs locale={locale} paragraphs={about.paragraphs} />
      <ContentSection
        id="why"
        label={ui.whyLabel}
        locale={locale}
        section={why}
      />
    </section>
  );
}
