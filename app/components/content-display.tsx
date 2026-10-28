import type { ContentSection } from "@/app/content";
import type { Locale } from "@/app/lib/localized-ui";

export function ContentParagraphs({
  paragraphs,
  locale,
}: {
  paragraphs: ContentSection["paragraphs"];
  locale: Locale;
}) {
  return (
    <div className="content-paragraphs">
      {paragraphs[locale].map((paragraph, index) => (
        <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
      ))}
    </div>
  );
}

export function ContentSection({
  section,
  locale,
  id,
  label,
}: {
  section: ContentSection;
  locale: Locale;
  id: string;
  label?: string;
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="text-section">
      {label && <p className="eyebrow">{label}</p>}
      <h2 id={`${id}-heading`}>{section.title[locale]}</h2>
      <ContentParagraphs locale={locale} paragraphs={section.paragraphs} />
    </section>
  );
}

export function ContentCard({
  section,
  locale,
  index,
}: {
  section: ContentSection;
  locale: Locale;
  index?: number;
}) {
  return (
    <article className="content-card">
      {index !== undefined && (
        <span aria-hidden="true" className="card-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <h2>{section.title[locale]}</h2>
      <ContentParagraphs locale={locale} paragraphs={section.paragraphs} />
    </article>
  );
}
