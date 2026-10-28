import type { Metadata } from "next";
import { getLocale, t } from "@/lib/i18n";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = t(locale).metadata;
  return {
    title: { default: copy.title, template: "%s | Luiz Eduardo Baganha" },
    description: copy.description,
    openGraph: { title: copy.title, description: copy.openGraphDescription, type: "website", locale: locale === "en" ? "en_US" : "pt_BR" },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  return (
    <html lang={locale === "en" ? "en" : "pt-BR"}>
      <body>{children}</body>
    </html>
  );
}
