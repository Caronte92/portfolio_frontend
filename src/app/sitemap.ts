import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';
import { hreflangByLocale, i18n } from '../../i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return i18n.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        i18n.locales.map((l) => [hreflangByLocale[l], `${SITE_URL}/${l}`])
      ),
    },
  }));
}
