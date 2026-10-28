import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectVisual } from "@/components/project-visual";
import { getProjects } from "@/lib/projects";
import { getLocale, t } from "@/lib/i18n";

export default async function HomePage() {
  const locale = await getLocale();
  const copy = t(locale);
  const projects = getProjects(locale);
  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <section className="hero shell" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow reveal">{copy.hero.eyebrow}</p>
            <h1 className="reveal delay-1"><span className="hero-title-line">{copy.hero.greeting}</span><span className="hero-title-line hero-title-line-name"><em>Luiz Baganha.</em></span></h1>
            <p className="hero-role reveal delay-2">{copy.hero.role}</p>
            <p className="hero-description reveal delay-2">{copy.hero.description}</p>
            <div className="hero-actions reveal delay-3">
              <Link className="button button-primary" href="#projetos">{copy.hero.explore} <span aria-hidden="true">↗</span></Link>
              <a className="text-link" href="/LUIZ_BAGANHA_CURRICULO.pdf" download>{copy.hero.resume} <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-art hero-art-photo reveal delay-2">
            <div className="portrait-frame">
              <Image
                src="/luiz-baganha.jpg"
                alt="Luiz Eduardo Baganha"
                fill
                priority
                sizes="(max-width: 800px) 85vw, 420px"
                className="portrait-image"
              />
            </div>
            <div className="portrait-caption">{copy.hero.caption}</div>
          </div>
          <a className="scroll-cue" href="#projetos">{copy.hero.scroll} <span aria-hidden="true">↓</span></a>
        </section>

        <section className="projects-section" id="projetos">
          <div className="shell">
            <div className="section-heading"><div><p className="eyebrow">{copy.home.workLabel}</p><h2>{copy.home.workTitle} <em>{copy.home.workEmphasis}</em></h2></div></div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.slug}>
                  <Link href={`/projetos/${project.slug}`} className="project-image-link" aria-label={`${copy.home.projectDetails} ${project.title}`}><ProjectVisual project={project} /></Link>
                  <div className="project-info"><div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.year}</span></div><h3><Link href={`/projetos/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><div className="project-bottom"><div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><Link className="circle-arrow" href={`/projetos/${project.slug}`} aria-label={`${copy.home.projectMeet} ${project.title}`}>↗</Link></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section shell" id="sobre">
          <div className="about-label"><p className="eyebrow">{copy.home.aboutLabel}</p><span className="about-asterisk" aria-hidden="true">✳</span></div>
          <div className="about-content"><h2>{copy.home.aboutTitle}<br /><em>{copy.home.aboutEmphasis}</em></h2><div className="about-columns"><p>{copy.home.aboutFirst}</p><p>{copy.home.aboutSecond}</p></div><div className="about-links"><a href="https://github.com/luizefb" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/luizefb/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="mailto:luizeduardobaganha@gmail.com">{copy.home.getInTouch} ↗</a></div></div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
