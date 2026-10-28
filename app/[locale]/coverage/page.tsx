import { CardIcon } from "@/app/components/card-icon";
import { ContentCard } from "@/app/components/content-display";
import { siteContent } from "@/app/content";
import { getLocale } from "@/app/lib/route-locale";
import { getUi } from "@/app/lib/localized-ui";

export default async function CoveragePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const ui = getUi(locale);
  const coverage = siteContent.coverage;

  return (
    <section className="content-page">
      <p className="eyebrow">{ui.coverage}</p>
      <h1>{coverage.title[locale]}</h1>
      <p className="page-intro">{ui.coverageIntro}</p>
      <div className="content-grid">
        {coverage.items.map((section, index) => (
          <ContentCard
            icon={<CardIcon index={index} />}
            index={index}
            key={section.title.en}
            locale={locale}
            section={section}
          />
        ))}
      </div>
      <p className="page-intro page-note">
        {locale === "ar"
          ? "هذه المعلومات عامة ولا تمثل عرضًا ملزمًا أو ضمانًا للتغطية. تسري الشروط والاستثناءات والحدود الواردة في وثيقة التأمين الصادرة عن شركة التأمين."
          : "This information is general and is not a binding offer or guarantee of coverage. The terms, exclusions, and limits in the policy issued by the insurer apply."}
      </p>
    </section>
  );
}
