import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getLocale, t } from "@/lib/i18n";

export default async function NotFound() {
  const locale = await getLocale();
  const copy = t(locale).notFound;
  return <><SiteHeader locale={locale} /><main className="not-found shell"><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.title}<br /><em>{copy.emphasis}</em></h1><Link className="button button-primary" href="/">{copy.back} ↗</Link></main><SiteFooter locale={locale} /></>;
}
