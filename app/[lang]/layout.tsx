import { PropsWithChildren } from "react";

import { AppBar, AppBarContainer } from "@portfolio/components";
import { getDictionary } from "@portfolio/get-dictionary";
import { PageParams } from "@portfolio/types";
import { i18n } from "@portfolio/utils";
import Link from "next/link";
import "./globals.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params: { lang },
}: PropsWithChildren<PageParams>) {
  const { common } = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className="h-screen font-mono">
        <header className="fixed w-full flex justify-center mt-5">
          <AppBarContainer>
            <AppBar
              items={[
                {
                  name: "work",
                  label: (
                    <Link locale={lang} href="/work">
                      {common.appBar.work}
                    </Link>
                  ),
                },
                {
                  name: "about",
                  label: (
                    <Link locale={lang} href="/about">
                      {common.appBar.about}
                    </Link>
                  ),
                },
                {
                  name: "projects",
                  label: (
                    <Link locale={lang} href="/projects">
                      {common.appBar.projects}
                    </Link>
                  ),
                },
                {
                  name: "contact",
                  label: common.appBar.contact,
                  component: "button",
                },
              ]}
            />
          </AppBarContainer>
        </header>
        <main className="h-full">
          <div className="h-full container mx-auto px-3">{children}</div>
        </main>
        <footer></footer>
      </body>
    </html>
  );
}

export const metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
};
