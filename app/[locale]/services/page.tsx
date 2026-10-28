import { ContentCard } from "@/app/components/content-display";
import { siteContent } from "@/app/content";
import { getLocale } from "@/app/lib/route-locale";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const solutions = siteContent.solutions;

  return (
    <section className="content-page">
      <p className="eyebrow">{solutions.title[locale]}</p>
      <h1>{solutions.title[locale]}</h1>
      <div className="content-grid">
        {solutions.items.map((section, index) => (
          <ContentCard
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
