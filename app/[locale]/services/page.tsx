import { CardIcon } from "@/app/components/card-icon";
import { ContentCard } from "@/app/components/content-display";
import { siteContent } from "@/app/content";
import { getLocale } from "@/app/lib/route-locale";
import { getUi } from "@/app/lib/localized-ui";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const ui = getUi(locale);
  const solutions = siteContent.solutions;

  return (
    <section className="content-page">
      <p className="eyebrow">{ui.solutions}</p>
      <h1>{ui.solutions}</h1>
      <div className="content-grid">
        {solutions.items.map((section, index) => (
          <ContentCard
            icon={<CardIcon index={index} />}
            index={index}
            key={section.title.en}
            locale={locale}
            section={section}
          />
        ))}
      </div>
    </section>
  );
}
