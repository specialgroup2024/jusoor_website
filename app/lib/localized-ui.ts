export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

const ui = {
  en: {
    navigation: "Primary navigation",
    skipToContent: "Skip to content",
    home: "Home",
    about: "About",
    solutions: "Solutions",
    coverage: "Insurance & coverage",
    contact: "Contact",
    switchLanguage: "View this page in Arabic",
    heroLabel: "Jusoor for Insurance Brokerage",
    exploreSolutions: "Explore our solutions",
    viewCoverage: "View insurance & coverage",
    aboutLabel: "About the company",
    whyLabel: "Why choose us",
    contactIntro: "Contact information will be added when confirmed.",
    contactPending: "Contact details are not included in the supplied content.",
  },
  ar: {
    navigation: "التنقل الرئيسي",
    skipToContent: "انتقل إلى المحتوى",
    home: "الرئيسية",
    about: "من نحن",
    solutions: "الحلول",
    coverage: "التأمين والتغطية",
    contact: "اتصل بنا",
    switchLanguage: "عرض هذه الصفحة باللغة الإنجليزية",
    heroLabel: "جسور لوساطة التأمين",
    exploreSolutions: "استكشف حلولنا",
    viewCoverage: "عرض التأمين والتغطية",
    aboutLabel: "عن الشركة",
    whyLabel: "لماذا يختارنا الناس",
    contactIntro: "ستُضاف معلومات التواصل بعد تأكيدها.",
    contactPending: "لم ترد تفاصيل التواصل في المحتوى المقدم.",
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
