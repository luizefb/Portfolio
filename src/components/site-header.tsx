import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Luiz Eduardo Baganha, voltar ao início">
          <span className="brand-name">Luiz Eduardo<br />Baganha</span>
        </Link>
        <nav className="main-nav" aria-label="Navegação principal">
          <Link href="/#projetos">Projetos</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#contato">Contato</Link>
        </nav>
        <a className="header-link" href="mailto:luizeduardobaganha@gmail.com">Vamos conversar <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
