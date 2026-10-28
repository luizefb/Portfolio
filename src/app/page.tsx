import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero shell" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow reveal">PORTFÓLIO / DESENVOLVIMENTO</p>
            <h1 className="reveal delay-1">Olá, eu sou<br /><em>Luiz Baganha.</em></h1>
            <p className="hero-role reveal delay-2">Desenvolvedor Full Stack</p>
            <p className="hero-description reveal delay-2">Desenvolvo aplicações web de ponta a ponta, da análise de requisitos à interface e à API. Hoje trabalho com sistemas de atendimento, dados e fluxos que precisam funcionar bem na rotina das pessoas.</p>
            <div className="hero-actions reveal delay-3">
              <Link className="button button-primary" href="#projetos">Explorar projetos <span aria-hidden="true">↗</span></Link>
              <a className="text-link" href="/LUIZ_BAGANHA_CURRICULO.pdf" download>Baixar currículo <span aria-hidden="true">↓</span></a>
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
            <div className="portrait-caption">DESENVOLVEDOR FULL STACK · BELÉM, PA</div>
          </div>
          <a className="scroll-cue" href="#projetos">ROLE PARA EXPLORAR <span aria-hidden="true">↓</span></a>
        </section>

        <section className="projects-section" id="projetos">
          <div className="shell">
            <div className="section-heading"><div><p className="eyebrow">01 / TRABALHOS SELECIONADOS</p><h2>Projetos em <em>destaque.</em></h2></div></div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.slug}>
                  <Link href={`/projetos/${project.slug}`} className="project-image-link" aria-label={`Ver detalhes de ${project.title}`}><ProjectVisual project={project} /></Link>
                  <div className="project-info"><div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.year}</span></div><h3><Link href={`/projetos/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><div className="project-bottom"><div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><Link className="circle-arrow" href={`/projetos/${project.slug}`} aria-label={`Conhecer ${project.title}`}>↗</Link></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section shell" id="sobre">
          <div className="about-label"><p className="eyebrow">02 / SOBRE MIM</p><span className="about-asterisk" aria-hidden="true">✳</span></div>
          <div className="about-content"><h2>Do requisito à entrega.<br /><em>Software para uso real.</em></h2><div className="about-columns"><p>Sou Luiz Eduardo Frazão Baganha, desenvolvedor Full Stack formado em Ciência da Computação na FACI Wyden. Desde junho de 2025, atuo na Polícia Militar do Pará no desenvolvimento de um sistema institucional para gestão de atendimentos psicossociais e demais processos administrativos da unidade.</p><p>Trabalho com Next.js, React, TypeScript, NestJS, Prisma e PostgreSQL. Minha atuação reúne interfaces responsivas, APIs REST e levantamento de requisitos com usuários, traduzindo necessidades da operação em funcionalidades claras e seguras.</p></div><div className="about-links"><a href="https://github.com/luizefb" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/luizefb/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="mailto:luizeduardobaganha@gmail.com">Entrar em contato ↗</a></div></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
