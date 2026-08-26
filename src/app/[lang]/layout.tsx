import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Work_Sans } from 'next/font/google';
import BaseLayout from '@/layouts/base';
import { SITE_URL } from '@/lib/config';
import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sergi Mitjavila',
  jobTitle: 'Senior Fullstack Developer',
  url: SITE_URL,
  image: `${SITE_URL}/profile.png`,
  sameAs: [
    'https://github.com/Caronte92/',
    'https://www.linkedin.com/in/sergi-mitjavila',
  ],
};

interface ILayoutProps {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}

export default async function RootLayout({ children, params }: ILayoutProps) {
  const { lang } = await params;
  const messages = await getMessages({ locale: lang });

  return (
    <html lang={lang} className={workSans.variable}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <NextIntlClientProvider messages={messages}>
          <StyledComponentsRegistry>
            <BaseLayout>{children}</BaseLayout>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
