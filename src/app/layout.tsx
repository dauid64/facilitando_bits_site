import type { Metadata } from "next";
import "./globals.css";
import { Karla } from "next/font/google"
import Link from "next/link";
import Select from "@/components/common/Select";

export const metadata: Metadata = {
  title: "Facilitando Bits Blog",
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
        <header className="bg-slate-900 text-white p-4 flex justify-between items-center">
          <div className="flex flex-col items-center bg-orange-500 rounded-full justify-center text-center" style={{ width: 80, height: 80 }}>
            <span className="font-bold text-xs">Facilitando</span>
            <span className="font-bold text-xs">Bits</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href={"/"} className="text-lg">Posts</Link>
          </div>
          <div className="flex flex-col items-center">
            <Select>
              <option value="US">Português</option>
              <option value="CA">Inglês</option>
            </Select>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
