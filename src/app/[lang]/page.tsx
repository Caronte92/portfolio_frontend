import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HomeMemo from '@/layouts/home';
import { SITE_URL } from '@/lib/config';
import { hreflangByLocale, i18n } from '../../../i18n-config';

interface IHomePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: IHomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          hreflangByLocale[locale],
          `${SITE_URL}/${locale}`,
        ])
      ),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: `${SITE_URL}/profile.png`,
          width: 282,
          height: 282,
        },
      ],
    },
  };
}

export default async function HomePage() {
  return <HomeMemo />;
}
