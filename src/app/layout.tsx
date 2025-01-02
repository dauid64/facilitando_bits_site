import type { Metadata } from "next";
import "./globals.css";
import { Karla } from "next/font/google"
import Header from "@/components/base/Header";

export const metadata: Metadata = {
  title: "Facilitando Bits",
  description: "Blog sobre desenvolvimento de software",
};

const karla = Karla({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={karla.className + " bg-slate-800 text-white"}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
