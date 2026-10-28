import { cookies } from "next/headers";

export type Locale = "pt" | "en";

const translations = {
  pt: {
    nav: { projects: "Projetos", about: "Sobre", contact: "Contato", talk: "Vamos conversar", main: "Navegação principal", home: "Luiz Eduardo Baganha, voltar ao início", switch: "Switch to English" },
    hero: { eyebrow: "PORTFÓLIO / DESENVOLVIMENTO", greeting: "Olá, eu sou", role: "Desenvolvedor Full Stack", description: "Desenvolvo aplicações web de ponta a ponta, da análise de requisitos à interface e à API. Hoje trabalho com sistemas de atendimento, dados e fluxos que precisam funcionar bem na rotina das pessoas.", explore: "Explorar projetos", resume: "Baixar currículo", caption: "DESENVOLVEDOR FULL STACK · BELÉM, PA", scroll: "ROLE PARA EXPLORAR" },
    home: { workLabel: "01 / TRABALHOS SELECIONADOS", workTitle: "Projetos em", workEmphasis: "destaque.", projectDetails: "Ver detalhes de", projectMeet: "Conhecer", aboutLabel: "02 / SOBRE MIM", aboutTitle: "Do requisito à entrega.", aboutEmphasis: "Software para uso real.", aboutFirst: "Sou Luiz Eduardo Frazão Baganha, desenvolvedor Full Stack formado em Ciência da Computação na FACI Wyden. Desde junho de 2025, atuo na Polícia Militar do Pará no desenvolvimento de um sistema institucional para gestão de atendimentos psicossociais e demais processos administrativos da unidade.", aboutSecond: "Trabalho com Next.js, React, TypeScript, NestJS, Prisma e PostgreSQL. Minha atuação reúne interfaces responsivas, APIs REST e levantamento de requisitos com usuários, traduzindo necessidades da operação em funcionalidades claras e seguras.", getInTouch: "Entrar em contato" },
    case: { back: "Voltar aos projetos", project: "PROJETO", visit: "Acessar projeto em produção", overview: "VISÃO GERAL", overviewTitle: "O projeto em", overviewEmphasis: "contexto.", type: "TIPO", technologies: "TECNOLOGIAS", process: "PROCESSO / 01 — 03", challenge: "01 / DESAFIO", challengeTitle: "Entender o problema", approach: "02 / ABORDAGEM", approachTitle: "Dar forma à solução", result: "03 / RESULTADO", resultTitle: "Construir para uso real", features: "O QUE A APLICAÇÃO FAZ", featuresTitle: "Detalhes que", featuresEmphasis: "importam.", next: "PRÓXIMO PROJETO" },
    footer: { eyebrow: "TEM UMA IDEIA OU OPORTUNIDADE?", title: "Vamos construir", emphasis: "algo bom juntos.", role: "Desenvolvedor Full Stack" },
    notFound: { eyebrow: "404 / PÁGINA NÃO ENCONTRADA", title: "Esse caminho não", emphasis: "leva a um projeto.", back: "Voltar ao início" },
    metadata: { title: "Luiz Eduardo Baganha — Desenvolvedor Full Stack", description: "Portfólio de Luiz Eduardo Baganha, desenvolvedor Full Stack. Projetos de gestão de consultório e de filas de atendimento.", openGraphDescription: "Projetos selecionados e trajetória em desenvolvimento de software." },
  },
  en: {
    nav: { projects: "Projects", about: "About", contact: "Contact", talk: "Let's talk", main: "Main navigation", home: "Luiz Eduardo Baganha, back to home", switch: "Mudar para português" },
    hero: { eyebrow: "PORTFOLIO / DEVELOPMENT", greeting: "Hi, I'm", role: "Full Stack Developer", description: "I build web applications end to end, from requirements analysis to the interface and API. Today I work on service systems, data, and workflows that need to work well in people's daily routines.", explore: "Explore projects", resume: "Download résumé", caption: "FULL STACK DEVELOPER · BELÉM, BRAZIL", scroll: "SCROLL TO EXPLORE" },
    home: { workLabel: "01 / SELECTED WORK", workTitle: "Featured", workEmphasis: "projects.", projectDetails: "View details of", projectMeet: "Explore", aboutLabel: "02 / ABOUT ME", aboutTitle: "From requirements to delivery.", aboutEmphasis: "Software for real use.", aboutFirst: "I'm Luiz Eduardo Frazão Baganha, a Full Stack Developer with a degree in Computer Science from FACI Wyden. Since June 2025, I've worked with the Military Police of Pará, developing an institutional system to manage psychosocial care and other administrative processes for the unit.", aboutSecond: "I work with Next.js, React, TypeScript, NestJS, Prisma, and PostgreSQL. My work combines responsive interfaces, REST APIs, and requirements gathering with users, turning operational needs into clear, secure features.", getInTouch: "Get in touch" },
    case: { back: "Back to projects", project: "PROJECT", visit: "View live project", overview: "OVERVIEW", overviewTitle: "The project in", overviewEmphasis: "context.", type: "TYPE", technologies: "TECHNOLOGIES", process: "PROCESS / 01 — 03", challenge: "01 / CHALLENGE", challengeTitle: "Understand the problem", approach: "02 / APPROACH", approachTitle: "Shape the solution", result: "03 / OUTCOME", resultTitle: "Build for real use", features: "WHAT THE APPLICATION DOES", featuresTitle: "Details that", featuresEmphasis: "matter.", next: "NEXT PROJECT" },
    footer: { eyebrow: "HAVE AN IDEA OR OPPORTUNITY?", title: "Let's build", emphasis: "something great together.", role: "Full Stack Developer" },
    notFound: { eyebrow: "404 / PAGE NOT FOUND", title: "This path doesn't", emphasis: "lead to a project.", back: "Back to home" },
    metadata: { title: "Luiz Eduardo Baganha — Full Stack Developer", description: "Portfolio of Luiz Eduardo Baganha, Full Stack Developer. Projects for practice management and service queues.", openGraphDescription: "Selected projects and experience in software development." },
  },
};

export function t(locale: Locale) { return translations[locale]; }

export async function getLocale(): Promise<Locale> {
  return (await cookies()).get("portfolio-locale")?.value === "en" ? "en" : "pt";
}
