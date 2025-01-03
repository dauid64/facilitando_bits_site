import type { Metadata } from "next";
import "./globals.css";
import { Karla } from "next/font/google"
import Header from "@/components/base/Header";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Language } from "../../../constants/language";

export const metadata: Metadata = {
  title: "Facilitando Bits",
  description: "Blog sobre desenvolvimento de software",
};

const karla = Karla({ subsets: ["latin"] });

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: {locale: string};
  }>
) {
  const params = await props.params;

  const {
    locale
  } = params;

  const {
    children
  } = props;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Language)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={karla.className + " bg-slate-800 text-white"}>
        <NextIntlClientProvider messages={messages}>
          <Header/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
