import { getLocale } from "@/app/lib/route-locale";
import { getUi } from "@/app/lib/localized-ui";
import { contactDetails } from "@/app/reference-content";

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
      <div className="contact-details" data-reveal>
        <p>
          <span>{ui.contactEmail}</span>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        </p>
        <p>
          <span>{ui.contactPhone}</span>
          <a dir="ltr" href={`tel:${contactDetails.phoneHref}`}>
            {contactDetails.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
