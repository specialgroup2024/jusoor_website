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
      en: "Building trust to protect your future",
      ar: "نبني الثقة لتأمين مستقبلك",
    },
    subtitle: { en: "Protect your property", ar: "احم ممتلكاتك" },
    description: {
      en: "Your partner at every step toward greater security.",
      ar: "شريكك في كل خطوة نحو الأمان.",
    },
    buttonText: { en: "Get Quote", ar: "احصل على عرض" },
    href: "/contact",
  },
  {
    title: { en: "A shield of trust", ar: "درع الثقة" },
    subtitle: { en: "Secure your shipments", ar: "أمّن شحناتك" },
    description: {
      en: "Protecting your business with trust and expertise.",
      ar: "حماية عملك بالثقة والخبرة.",
    },
    buttonText: { en: "Learn More", ar: "اعرف المزيد" },
    href: "/services",
  },
  {
    title: {
      en: "Smart coverage. Real protection.",
      ar: "تغطية ذكية. حماية حقيقية.",
    },
    subtitle: { en: "Your health, our priority", ar: "صحتك، أولويتنا" },
    description: {
      en: "Innovative insurance solutions tailored to your needs.",
      ar: "حلول تأمينية مبتكرة مصممة خصيصاً لاحتياجاتك.",
    },
    buttonText: { en: "Explore Plans", ar: "استكشف الخطط" },
    href: "/coverage",
  },
  {
    title: {
      en: "Protecting what matters most",
      ar: "حماية ما يهم أكثر",
    },
    subtitle: {
      en: "Industrial protection solutions",
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
      en: "Every risk deserves a strategy",
      ar: "لأن كل خطر يستحق استراتيجية",
    },
    subtitle: { en: "Protect your legacy", ar: "أمّن إرثك" },
    description: {
      en: "Well-crafted plans to face every challenge.",
      ar: "خطط محكمة لمواجهة كل تحدٍ.",
    },
    buttonText: { en: "Start Today", ar: "ابدأ اليوم" },
    href: "/contact",
  },
  {
    title: { en: "We protect. You prosper.", ar: "نحن نغطي. أنت تزدهر." },
    subtitle: { en: "Drive with confidence", ar: "قُد بثقة" },
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
    title: { en: "Our vision", ar: "رؤيتنا" },
    content: {
      en: "To be the most trusted partner in insurance brokerage by providing innovative solutions that meet and exceed our clients’ expectations.",
      ar: "نسعى لأن نكون الشريك الأكثر موثوقية في مجال الوساطة التأمينية، من خلال تقديم حلول مبتكرة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.",
    },
  },
  {
    title: { en: "Our mission", ar: "رسالتنا" },
    content: {
      en: "To provide outstanding insurance brokerage services that deliver comprehensive protection for our clients while upholding the highest standards of quality, transparency, and professionalism.",
      ar: "تقديم خدمات وساطة تأمينية متميزة تضمن حماية شاملة لعملائنا، مع الالتزام بأعلى معايير الجودة والشفافية والمهنية.",
    },
  },
  {
    title: { en: "Our objectives", ar: "أهدافنا" },
    content: {
      en: "To build long-term relationships with our clients through tailored insurance solutions, exceptional customer service, and a contribution to the development of the insurance industry.",
      ar: "نهدف إلى بناء علاقات طويلة الأمد مع عملائنا من خلال تقديم حلول تأمينية مخصصة، وضمان خدمة عملاء استثنائية، والمساهمة في تطوير صناعة التأمين.",
    },
  },
];

export const contactDetails = {
  email: "info@jusoor.com.eg",
  phoneDisplay: "01044479475",
  phoneHref: "+201044479475",
};
