import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contato">
      <div className="shell footer-top">
        <div>
          <p className="eyebrow light">TEM UMA IDEIA OU OPORTUNIDADE?</p>
          <h2>Vamos construir<br /><em>algo bom juntos.</em></h2>
        </div>
        <a className="footer-email" href="mailto:luizeduardobaganha@gmail.com">luizeduardobaganha@gmail.com <span aria-hidden="true">↗</span></a>
      </div>
      <div className="shell footer-bottom">
        <Link href="/" className="footer-name">Luiz Eduardo Baganha</Link>
        <p>Luiz Eduardo Baganha · Desenvolvedor Full Stack</p>
        <div className="footer-social">
          <a href="https://github.com/luizefb" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/luizefb/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  );
}
