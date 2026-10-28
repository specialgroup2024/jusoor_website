import { getLocale } from "@/app/lib/route-locale";
import { getUi } from "@/app/lib/localized-ui";

const rights = {
  en: [
    { title: "Clear Information", text: "You can ask for understandable information about proposed insurance products, key terms, exclusions, limits, and the role of the broker." },
    { title: "Informed Decisions", text: "You should have an opportunity to review relevant product and policy information and ask questions before deciding." },
    { title: "Respectful and Fair Service", text: "We aim to handle enquiries professionally and treat customers respectfully without unfair discrimination." },
    { title: "Privacy and Confidentiality", text: "Personal information should be handled carefully and used only for legitimate business, service, and legal purposes, subject to applicable requirements." },
    { title: "Help and Escalation", text: "You may contact us to request clarification, follow up on a service issue, or submit a complaint through the customer complaints page." },
  ],
  ar: [
    { title: "معلومات واضحة", text: "يمكنك طلب معلومات مفهومة عن المنتجات التأمينية المقترحة وشروطها الأساسية واستثناءاتها وحدودها ودور وسيط التأمين." },
    { title: "اتخاذ قرار مستنير", text: "ينبغي إتاحة الفرصة لك لمراجعة معلومات المنتج والوثيقة ذات الصلة وطرح الأسئلة قبل اتخاذ القرار." },
    { title: "خدمة عادلة ومحترمة", text: "نسعى إلى التعامل مع الاستفسارات بمهنية واحترام العملاء دون تمييز غير عادل." },
    { title: "الخصوصية والسرية", text: "ينبغي التعامل مع المعلومات الشخصية بعناية واستخدامها للأغراض المشروعة المتعلقة بالخدمة والعمل والالتزامات القانونية، وفقًا للمتطلبات المطبقة." },
    { title: "المساعدة وتصعيد الطلب", text: "يمكنك التواصل معنا لطلب توضيح أو متابعة مشكلة في الخدمة أو تقديم شكوى من خلال صفحة شكاوى العملاء." },
  ],
};

export default async function CustomerRightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocale(params);
  const ui = getUi(locale);
  return (
    <section className="content-page">
      <p className="eyebrow">{ui.customerRights}</p>
      <h1>{ui.customerRights}</h1>
      <p className="page-intro">{ui.rightsIntro}</p>
      <div className="content-grid">
        {rights[locale].map((item) => (
          <article className="content-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <p className="page-intro">
        {locale === "ar"
          ? "هذه الصفحة توضح مبادئ الخدمة العامة ولا تحل محل الحقوق أو الإجراءات المنصوص عليها في القوانين واللوائح أو وثائق التأمين المعمول بها. يجب مراجعة النص النهائي واعتماده من الشركة قبل النشر."
          : "This page describes general service principles and does not replace rights or procedures established by applicable laws, regulations, or insurance policies. The company should review and approve the final wording before publication."}
      </p>
    </section>
  );
}
