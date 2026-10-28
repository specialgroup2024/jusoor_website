import type { CSSProperties, ReactNode } from "react";
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
    <section
      aria-labelledby={`${id}-heading`}
      className="text-section"
      data-reveal
    >
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
  audience,
  icon,
}: {
  section: ContentSection;
  locale: Locale;
  index?: number;
  audience?: string;
  icon?: ReactNode;
}) {
  const style =
    index !== undefined
      ? ({ "--reveal-delay": `${Math.min(index, 8) * 60}ms` } as CSSProperties)
      : undefined;

  return (
    <article className="content-card" data-reveal style={style}>
      {(icon || index !== undefined) && (
        <div aria-hidden="true" className="card-topline">
          {icon && <span className="card-icon">{icon}</span>}
          {index !== undefined && (
            <span className="card-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
      )}
      <h2>{section.title[locale]}</h2>
      {audience && <span className="audience-label">{audience}</span>}
      <ContentParagraphs locale={locale} paragraphs={section.paragraphs} />
    </article>
  );
}
