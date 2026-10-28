import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, getProjects, projects } from "@/lib/projects";
import { getLocale, t } from "@/lib/i18n";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug, await getLocale());
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const locale = await getLocale();
  const copy = t(locale).case;
  const project = getProject((await params).slug, locale);
  if (!project) notFound();
  const nextProject = getProjects(locale).find((item) => item.slug !== project.slug)!;

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="case-main">
        <div className="shell case-intro">
          <Link className="back-link" href="/#projetos">← {copy.back}</Link>
          <div className="case-kicker"><span>{copy.project} {project.number} / {project.category.toUpperCase()}</span><span>{project.year}</span></div>
          <h1>{project.title}<span className="case-period">.</span></h1>
          <p className="case-lead">{project.intro}</p>
          <a className="button button-primary production-link" href={project.productionUrl} target="_blank" rel="noopener noreferrer">{copy.visit} <span aria-hidden="true">↗</span></a>
          <div className="case-hero-visual"><ProjectVisual project={project} large /></div>
        </div>

        <section className="case-overview shell"><div><p className="eyebrow">{copy.overview}</p><h2>{copy.overviewTitle}<br /><em>{copy.overviewEmphasis}</em></h2></div><div><p className="overview-text">{project.summary}</p><div className="overview-meta"><div><span>{copy.type}</span><strong>{project.category}</strong></div><div><span>{copy.technologies}</span><strong>{project.stack.join(" · ")}</strong></div></div></div></section>

        <section className="case-story"><div className="shell"><p className="eyebrow">{copy.process}</p><div className="story-grid"><article><span>{copy.challenge}</span><h3>{copy.challengeTitle}</h3><p>{project.challenge}</p></article><article><span>{copy.approach}</span><h3>{copy.approachTitle}</h3><p>{project.approach}</p></article><article><span>{copy.result}</span><h3>{copy.resultTitle}</h3><p>{project.outcome}</p></article></div></div></section>

        <section className="case-features shell"><div className="section-heading"><div><p className="eyebrow">{copy.features}</p><h2>{copy.featuresTitle} <em>{copy.featuresEmphasis}</em></h2></div></div><div className="feature-list">{project.features.map((feature, index) => <div className="feature-row" key={feature.title}><span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p><span aria-hidden="true">↗</span></div>)}</div></section>

        <section className="next-project"><div className="shell"><p className="eyebrow light">{copy.next}</p><Link href={`/projetos/${nextProject.slug}`}>{nextProject.title}<span aria-hidden="true">↗</span></Link></div></section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
