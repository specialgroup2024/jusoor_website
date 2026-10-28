export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

const ui = {
  en: {
    navigation: "Primary navigation",
    skipToContent: "Skip to content",
    home: "Home",
    about: "About Us",
    solutions: "How We Work",
    coverage: "Insurance Coverage",
    customerRights: "Customer Rights",
    customerComplaints: "Customer Complaints",
    contact: "Contact Us",
    aboutPageTitle: "About Jusoor",
    switchLanguage: "View this page in Arabic",
    heroLabel: "Jusoor for Insurance Brokerage",
    aboutLabel: "About the company",
    whyLabel: "Why choose us",
    contactIntro: "Jusoor is always listening.",
    carouselLabel: "Featured insurance messages",
    carouselRole: "carousel",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
    chooseSlide: "Choose a featured message",
    showSlide: "Show message",
    contactEmail: "Email:",
    contactPhone: "Phone:",
    coverageIntro: "Explore insurance options with guidance from Jusoor. Actual availability, exclusions, limits, and terms depend on the insurer and the issued policy.",
    rightsIntro: "We aim to provide clear information, respectful service, and support throughout your insurance journey.",
    complaintsIntro: "If something has not met your expectations, contact us so we can understand the issue and work toward a response.",
    features: [
      "Easy Process",
      "Competitive Pricing",
      "Expert Advice",
      "Accurate Document",
    ],
  },
  ar: {
    navigation: "التنقل الرئيسي",
    skipToContent: "انتقل إلى المحتوى",
    home: "الرئيسية",
    about: "من نحن",
    solutions: "كيف نعمل",
    coverage: "التغطية التأمينية",
    customerRights: "حقوق العملاء",
    customerComplaints: "شكاوى العملاء",
    contact: "اتصل بنا",
    aboutPageTitle: "عن جسور",
    switchLanguage: "عرض هذه الصفحة باللغة الإنجليزية",
    heroLabel: "جسور لوساطة التأمين",
    aboutLabel: "عن الشركة",
    whyLabel: "لماذا يختارنا الناس",
    contactIntro: "جسور تستمع إليكم دائماً.",
    carouselLabel: "رسائل تأمينية مميزة",
    carouselRole: "عرض شرائح",
    previousSlide: "الشريحة السابقة",
    nextSlide: "الشريحة التالية",
    chooseSlide: "اختر رسالة مميزة",
    showSlide: "اعرض الرسالة",
    contactEmail: "البريد الإلكتروني:",
    contactPhone: "الهاتف:",
    coverageIntro: "تعرّف على خيارات التأمين بمساعدة جسور. ويعتمد توافر التغطية والاستثناءات والحدود والشروط الفعلية على شركة التأمين ووثيقة التأمين الصادرة.",
    rightsIntro: "نسعى إلى تقديم معلومات واضحة وخدمة باحترام ومساندة العملاء خلال رحلتهم التأمينية.",
    complaintsIntro: "إذا لم تلبِّ الخدمة توقعاتك، يُرجى التواصل معنا حتى نفهم المشكلة ونعمل على الرد عليها.",
    features: ["عملية سهلة", "أسعار تنافسية", "نصائح الخبراء", "وثيقة دقيقة"],
  },
} as const;

export function getUi(locale: Locale) {
  return ui[locale];
}

export function isLocale(locale: string): locale is Locale {
  return locales.some((supportedLocale) => supportedLocale === locale);
}

export function localizePath(locale: Locale, path: string) {
  return `/${locale}${path === "/" ? "" : path}`;
}
