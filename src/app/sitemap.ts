import type { MetadataRoute } from 'next';
import { hreflangByLocale, i18n } from '../../i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_FRONT_URL;

  return i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        i18n.locales.map((l) => [hreflangByLocale[l], `${baseUrl}/${l}`])
      ),
    },
  }));
}
