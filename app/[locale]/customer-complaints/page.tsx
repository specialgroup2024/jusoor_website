import Link from "next/link";
import { getLocale } from "@/app/lib/route-locale";
import { getUi, localizePath } from "@/app/lib/localized-ui";
import { contactDetails } from "@/app/reference-content";

const steps = {
  en: [
    { title: "1. Contact Jusoor", text: "Describe what happened and tell us how you would like us to help. Include your preferred contact details." },
    { title: "2. Share relevant details", text: "Where appropriate, include your policy or reference number, dates, and supporting documents. Do not send passwords or unnecessary sensitive information." },
    { title: "3. Review and response", text: "Our team should acknowledge the complaint, review the information, and contact you if more details are needed. A response timeframe must be confirmed by Jusoor before publication." },
    { title: "4. Further assistance", text: "If the issue remains unresolved, ask us to explain the next available escalation route and any applicable external complaint channel." },
  ],
  ar: [
    { title: "١. تواصل مع جسور", text: "اشرح ما حدث وأخبرنا بنوع المساعدة التي تحتاج إليها، مع ذكر وسيلة التواصل المناسبة لك." },
    { title: "٢. أرسل التفاصيل ذات الصلة", text: "عند الحاجة، أرفق رقم الوثيقة أو المرجع والتواريخ والمستندات الداعمة. لا ترسل كلمات مرور أو بيانات حساسة غير ضرورية." },
    { title: "٣. المراجعة والرد", text: "ينبغي لفريقنا تأكيد استلام الشكوى ومراجعة المعلومات والتواصل معك إذا احتاج إلى تفاصيل إضافية. يجب أن تعتمد جسور المدة الزمنية للرد قبل النشر." },
    { title: "٤. طلب مساعدة إضافية", text: "إذا لم تُحل المشكلة، اطلب منا توضيح مسار التصعيد المتاح وأي قناة خارجية لتقديم الشكاوى تنطبق على حالتك." },
  ],
};

export default async function CustomerComplaintsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocale(params);
  const ui = getUi(locale);
  return (
    <section className="content-page">
      <p className="eyebrow">{ui.customerComplaints}</p>
      <h1>{ui.customerComplaints}</h1>
      <p className="page-intro">{ui.complaintsIntro}</p>
      <div className="content-grid">
        {steps[locale].map((item, index) => (
          <article
            className="content-card step-card"
            data-reveal
            key={item.title}
            style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
          >
            <span aria-hidden="true" className="step-badge">
              {index + 1}
            </span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <div className="content-card" data-reveal>
        <h2>{locale === "ar" ? "تقديم شكوى" : "Submit a complaint"}</h2>
        <p>
          {locale === "ar"
            ? "يمكنك التواصل معنا عبر البريد الإلكتروني أو الهاتف. يرجى توضيح أنك تقدم شكوى وإرفاق التفاصيل الضرورية فقط."
            : "Contact us by email or phone. Please identify your message as a complaint and include only the details needed to review it."}
        </p>
        <p>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          {" · "}
          <a href={`tel:${contactDetails.phoneHref}`}>{contactDetails.phoneDisplay}</a>
        </p>
        <p><Link href={localizePath(locale, "/contact")}>{ui.contact}</Link></p>
      </div>
      <p className="page-intro page-note">
        {locale === "ar"
          ? "قبل النشر، يجب على الشركة اعتماد بيانات مسؤول الشكاوى، ومواعيد الإقرار والاستجابة، وإجراءات التصعيد، والقنوات التنظيمية ذات الصلة. لا تتضمن هذه الصفحة مددًا أو التزامات تنظيمية غير مؤكدة."
          : "Before publication, the company must approve the complaints owner, acknowledgement and response times, escalation process, and relevant regulatory channels. This page intentionally does not state unverified deadlines or regulatory obligations."}
      </p>
    </section>
  );
}
