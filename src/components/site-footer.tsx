import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = t(locale).footer;
  return (
    <footer className="site-footer" id="contato">
      <div className="shell footer-top">
        <div>
          <p className="eyebrow light">{copy.eyebrow}</p>
          <h2>{copy.title}<br /><em>{copy.emphasis}</em></h2>
        </div>
        <a className="footer-email" href="mailto:luizeduardobaganha@gmail.com">luizeduardobaganha@gmail.com <span aria-hidden="true">↗</span></a>
      </div>
      <div className="shell footer-bottom">
        <Link href="/" className="footer-name">Luiz Eduardo Baganha</Link>
        <p>Luiz Eduardo Baganha · {copy.role}</p>
        <div className="footer-social">
          <a href="https://github.com/luizefb" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/luizefb/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  );
}
