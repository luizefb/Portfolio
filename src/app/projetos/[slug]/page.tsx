import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const nextProject = projects.find((item) => item.slug !== project.slug)!;

  return (
    <>
      <SiteHeader />
      <main className="case-main">
        <div className="shell case-intro">
          <Link className="back-link" href="/#projetos">← Voltar aos projetos</Link>
          <div className="case-kicker"><span>PROJETO {project.number} / {project.category.toUpperCase()}</span><span>{project.year}</span></div>
          <h1>{project.title}<span className="case-period">.</span></h1>
          <p className="case-lead">{project.intro}</p>
          <a className="button button-primary production-link" href={project.productionUrl} target="_blank" rel="noopener noreferrer">Acessar projeto em produção <span aria-hidden="true">↗</span></a>
          <div className="case-hero-visual"><ProjectVisual project={project} large /></div>
        </div>

        <section className="case-overview shell"><div><p className="eyebrow">VISÃO GERAL</p><h2>O projeto em<br /><em>contexto.</em></h2></div><div><p className="overview-text">{project.summary}</p><div className="overview-meta"><div><span>TIPO</span><strong>{project.category}</strong></div><div><span>TECNOLOGIAS</span><strong>{project.stack.join(" · ")}</strong></div></div></div></section>

        <section className="case-story"><div className="shell"><p className="eyebrow">PROCESSO / 01 — 03</p><div className="story-grid"><article><span>01 / DESAFIO</span><h3>Entender o problema</h3><p>{project.challenge}</p></article><article><span>02 / ABORDAGEM</span><h3>Dar forma à solução</h3><p>{project.approach}</p></article><article><span>03 / RESULTADO</span><h3>Construir para uso real</h3><p>{project.outcome}</p></article></div></div></section>

        <section className="case-features shell"><div className="section-heading"><div><p className="eyebrow">O QUE A APLICAÇÃO FAZ</p><h2>Detalhes que <em>importam.</em></h2></div></div><div className="feature-list">{project.features.map((feature, index) => <div className="feature-row" key={feature.title}><span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p><span aria-hidden="true">↗</span></div>)}</div></section>

        <section className="next-project"><div className="shell"><p className="eyebrow light">PRÓXIMO PROJETO</p><Link href={`/projetos/${nextProject.slug}`}>{nextProject.title}<span aria-hidden="true">↗</span></Link></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
