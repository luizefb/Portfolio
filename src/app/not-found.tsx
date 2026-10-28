import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return <><SiteHeader /><main className="not-found shell"><p className="eyebrow">404 / PÁGINA NÃO ENCONTRADA</p><h1>Esse caminho não<br /><em>leva a um projeto.</em></h1><Link className="button button-primary" href="/">Voltar ao início ↗</Link></main><SiteFooter /></>;
}
