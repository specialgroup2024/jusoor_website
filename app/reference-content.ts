import type { Locale } from "@/app/lib/localized-ui";

type LocalizedText = Record<Locale, string>;

export const carouselSlides: Array<{
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  buttonText: LocalizedText;
  href: string;
}> = [
  {
    title: {
      en: "We build trust to secure your future",
      ar: "نبني الثقة لتأمين مستقبلك",
    },
    subtitle: { en: "Protect Your Property", ar: "احم ممتلكاتك" },
    description: {
      en: "Your partner at every step toward security.",
      ar: "شريكك في كل خطوة نحو الأمان.",
    },
    buttonText: { en: "Get Quote", ar: "احصل على عرض" },
    href: "/contact",
  },
  {
    title: { en: "Shield of Trust", ar: "درع الثقة" },
    subtitle: { en: "Secure Your Shipments", ar: "أمّن شحناتك" },
    description: {
      en: "Protecting your business with trust and expertise.",
      ar: "حماية عملك بالثقة والخبرة.",
    },
    buttonText: { en: "Learn More", ar: "اعرف المزيد" },
    href: "/services",
  },
  {
    title: {
      en: "Smart Coverage. Real Protection.",
      ar: "تغطية ذكية. حماية حقيقية.",
    },
    subtitle: { en: "Your Health, Our Priority", ar: "صحتك، أولويتنا" },
    description: {
      en: "Innovative insurance solutions tailored to your needs.",
      ar: "حلول تأمينية مبتكرة مصممة خصيصاً لاحتياجاتك.",
    },
    buttonText: { en: "Explore Plans", ar: "استكشف الخطط" },
    href: "/coverage",
  },
  {
    title: {
      en: "Protecting What Matters Most",
      ar: "حماية ما يهم أكثر",
    },
    subtitle: {
      en: "Industrial Protection Solutions",
      ar: "حلول الحماية الصناعية",
    },
    description: {
      en: "We are here for you, your family and your business.",
      ar: "نحن هنا من أجلك، عائلتك وعملك.",
    },
    buttonText: { en: "Get Coverage", ar: "احصل على التغطية" },
    href: "/coverage",
  },
  {
    title: {
      en: "Because Every Risk Deserves a Strategy",
      ar: "لأن كل خطر يستحق استراتيجية",
    },
    subtitle: { en: "Secure Your Legacy", ar: "أمّن إرثك" },
    description: {
      en: "Well-crafted plans to face every challenge.",
      ar: "خطط محكمة لمواجهة كل تحدٍ.",
    },
    buttonText: { en: "Start Today", ar: "ابدأ اليوم" },
    href: "/contact",
  },
  {
    title: { en: "We Cover. You Prosper.", ar: "نحن نغطي. أنت تزدهر." },
    subtitle: { en: "Drive with Confidence", ar: "قُد بثقة" },
    description: {
      en: "Your security is the path to your success.",
      ar: "أمانك هو طريق نجاحك.",
    },
    buttonText: { en: "Get Insured", ar: "احصل على التأمين" },
    href: "/contact",
  },
];

export const companyProfile: Array<{
  title: LocalizedText;
  content: LocalizedText;
}> = [
  {
    title: { en: "Our Vision", ar: "رؤيتنا" },
    content: {
      en: "Effectively changing the traditional patterns of insurance brokerage in the Egyptian market and identifying the latest international technologies that enable the Egyptian insurance brokerage market to be at the forefront of the Arab and international markets.",
      ar: "نسعى لأن نكون الشريك الأكثر موثوقية في مجال الوساطة التأمينية، من خلال تقديم حلول مبتكرة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.",
    },
  },
  {
    title: { en: "Our Mission", ar: "رسالتنا" },
    content: {
      en: "Strengthening the Egyptian insurance market by providing the highest levels of insurance services and solutions across its sectors, using expertise and tools to deliver competitive and effective performance for clients and insurance companies at the technical and financial levels. Promoting insurance awareness and developing technical expertise to support the country’s Gross National Product.",
      ar: "تقديم خدمات وساطة تأمينية متميزة تضمن حماية شاملة لعملائنا، مع الالتزام بأعلى معايير الجودة والشفافية والمهنية.",
    },
  },
  {
    title: { en: "Our Objective", ar: "أهدافنا" },
    content: {
      en: "Improving the professional and service level of insurance brokerage activities in the Arab Republic of Egypt by targeting leaders and experts across the Egyptian insurance market, who can provide insurance activities for companies and individuals at a professional level that reflects the market’s size and aspirations.",
      ar: "نهدف إلى بناء علاقات طويلة الأمد مع عملائنا من خلال تقديم حلول تأمينية مخصصة، وضمان خدمة عملاء استثنائية، والمساهمة في تطوير صناعة التأمين.",
    },
  },
];

export const contactDetails = {
  email: "info@jusoor.com.eg",
  phoneDisplay: "01044479475",
  phoneHref: "+201044479475",
};
