import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-work-sans',
});

interface ILayoutProps {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}

export default async function RootLayout({ children, params }: ILayoutProps) {
  const { lang } = await params;
  const messages = await getMessages({ locale: lang });

  return (
    <html lang={lang} className={workSans.variable}>
      <body className={workSans.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
