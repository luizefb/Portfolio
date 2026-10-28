import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { setLocale } from "@/lib/locale-action";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = t(locale).nav;
  const nextLocale = locale === "pt" ? "en" : "pt";

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label={copy.home}>
          <span className="brand-name">Luiz Eduardo<br />Baganha</span>
        </Link>
        <nav className="main-nav" aria-label={copy.main}>
          <Link href="/#projetos">{copy.projects}</Link>
          <Link href="/#sobre">{copy.about}</Link>
          <Link href="/#contato">{copy.contact}</Link>
        </nav>
        <div className="header-actions">
          <form action={setLocale}>
            <input type="hidden" name="locale" value={nextLocale} />
            <button className="language-switch" type="submit" data-locale={locale} aria-label={copy.switch} title={copy.switch}>
              <span className="language-switch-thumb" aria-hidden="true" />
              <span className={`language-switch-option${locale === "pt" ? " is-active" : ""}`} aria-hidden="true">PT</span>
              <span className={`language-switch-option${locale === "en" ? " is-active" : ""}`} aria-hidden="true">EN</span>
            </button>
          </form>
          <a className="header-link" href="mailto:luizeduardobaganha@gmail.com">{copy.talk} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </header>
  );
}
