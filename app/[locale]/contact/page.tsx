import { getLocale } from "@/app/lib/route-locale";
import { getUi } from "@/app/lib/localized-ui";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const ui = getUi(locale);

  return (
    <section className="content-page">
      <p className="eyebrow">{ui.contact}</p>
      <h1>{ui.contact}</h1>
      <p className="page-intro">{ui.contactIntro}</p>
      <div className="placeholder-panel">
        <span className="placeholder-icon" aria-hidden="true">
          i
        </span>
        <p>{ui.contactPending}</p>
      </div>
    </section>
  );
}
