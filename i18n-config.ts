export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'cat'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

// `cat` is our URL segment for Catalan, but hreflang requires the ISO 639-1 code `ca`.
export const hreflangByLocale: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  cat: 'ca',
};
