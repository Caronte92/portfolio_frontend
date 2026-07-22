import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HomeMemo from '@/layouts/home';
import { hreflangByLocale, i18n } from '../../../i18n-config';

interface IHomePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: IHomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: 'Metadata' });
  const baseUrl = process.env.NEXT_PUBLIC_FRONT_URL;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          hreflangByLocale[locale],
          `${baseUrl}/${locale}`,
        ])
      ),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: `${baseUrl}/profile.png`,
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
