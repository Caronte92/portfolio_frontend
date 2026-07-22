import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HomeMemo from '@/layouts/home';

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
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function HomePage() {
  return <HomeMemo />;
}
