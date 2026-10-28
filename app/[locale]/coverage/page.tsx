import { getLocale } from "@/app/lib/route-locale";
import { getUi } from "@/app/lib/localized-ui";

const coverage = {
  en: [
    { title: "Property and Assets", text: "Explore insurance options for eligible property and business assets. Coverage, insured values, exclusions, and deductibles are defined by the insurer and policy." },
    { title: "Motor Insurance", text: "Understand available motor insurance options and the differences between required and optional benefits. Confirm the applicable terms before purchase." },
    { title: "Medical and Life", text: "Discuss available medical, life, and personal protection products with our team. Eligibility, limits, waiting periods, and exclusions vary by product." },
    { title: "Marine and Transit", text: "Ask about protection options for goods in transit and marine shipments, subject to route, cargo, packing, and policy conditions." },
    { title: "Business Insurance", text: "Review insurance options that may support business operations, liability management, and continuity, depending on your activities and risk profile." },
  ],
  ar: [
    { title: "الممتلكات والأصول", text: "تعرّف على خيارات التأمين المتاحة للممتلكات وأصول الأعمال المؤهلة. وتحدد شركة التأمين والوثيقة قيم التأمين والاستثناءات والتحملات." },
    { title: "تأمين السيارات", text: "تعرّف على خيارات تأمين السيارات والفروق بين التغطيات الإلزامية والاختيارية، مع مراجعة الشروط المطبقة قبل الشراء." },
    { title: "التأمين الطبي وتأمين الحياة", text: "ناقش مع فريقنا منتجات التأمين الطبي والحياة والحماية الشخصية المتاحة. وتختلف الأهلية والحدود وفترات الانتظار والاستثناءات حسب المنتج." },
    { title: "التأمين البحري وتأمين النقل", text: "استفسر عن خيارات حماية البضائع أثناء النقل والشحن البحري، وفقًا للمسار ونوع البضائع والتعبئة وشروط الوثيقة." },
    { title: "تأمين الأعمال", text: "راجع خيارات التأمين التي قد تدعم عمليات الأعمال وإدارة المسؤوليات واستمرارية النشاط، بحسب طبيعة العمل ومستوى المخاطر." },
  ],
};

export default async function CoveragePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocale(params);
  const ui = getUi(locale);
  return (
    <section className="content-page">
      <p className="eyebrow">{ui.coverage}</p>
      <h1>{ui.coverage}</h1>
      <p className="page-intro">{ui.coverageIntro}</p>
      <div className="content-grid">
        {coverage[locale].map((item) => (
          <article className="content-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <p className="page-intro">
        {locale === "ar"
          ? "هذه معلومات عامة وليست عرضًا ملزمًا أو ضمانًا للتغطية. تسري فقط الشروط والاستثناءات والحدود الواردة في وثيقة التأمين الصادرة."
          : "This information is general and is not a binding offer or guarantee of coverage. Only the terms, exclusions, and limits in the issued policy apply."}
      </p>
    </section>
  );
}
