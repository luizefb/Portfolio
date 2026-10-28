export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  intro: string;
  challenge: string;
  approach: string;
  outcome: string;
  features: { title: string; description: string }[];
  stack: string[];
  productionUrl: string;
  theme: "consultorio" | "fila";
};

export const projects: Project[] = [
  {
    slug: "gerenciador-de-consultorio",
    number: "01",
    title: "Gerenciador de consultório",
    category: "Gestão de atendimentos",
    year: "Projeto em desenvolvimento",
    summary:
      "Aplicação para organizar atendidos, agendamentos e registros de atendimento em um único espaço de trabalho.",
    intro:
      "Um espaço de trabalho para consultar informações, planejar a agenda e acompanhar registros sem perder o contexto de cada atendimento.",
    challenge:
      "Dados de pessoas, horários e registros precisam permanecer conectados, claros e protegidos. A interface precisava apoiar a rotina de atendimento sem tornar tarefas simples em processos longos.",
    approach:
      "Estruturei a experiência em áreas de atendidos, calendário, agendamentos e registros. No backend, organizei os domínios em módulos e mantive a comunicação com a interface por uma API intermediada pelo Next.js.",
    outcome:
      "O projeto reúne agenda, fichas e registros em uma aplicação com autenticação, auditoria e validações para evitar conflitos de horário. A implantação pode usar Cloudflare Workers e D1.",
    features: [
      { title: "Agenda conectada", description: "Calendário e agendamentos vinculados às pessoas atendidas." },
      { title: "Histórico por pessoa", description: "Fichas com acesso aos registros e aos atendimentos relacionados." },
      { title: "Acesso protegido", description: "Login e sessão com expiração, além de integração privada entre Next.js e API." },
    ],
    stack: ["Next.js", "React", "TypeScript", "NestJS", "Prisma", "Zod", "SQLite", "Cloudflare D1", "Cloudflare Workers"],
    productionUrl: "https://consultorio-psi-web.hotemaki.workers.dev/",
    theme: "consultorio",
  },
  {
    slug: "sistema-de-gerenciamento-de-filas",
    number: "02",
    title: "Sistema de gerenciamento de filas",
    category: "Gestão de filas",
    year: "Projeto em desenvolvimento",
    summary:
      "Aplicação para gerenciar filas de atendimento, com painel administrativo e páginas públicas para entrada e acompanhamento da senha.",
    intro:
      "Uma experiência para os dois lados da espera: quem organiza o atendimento acompanha a fila; quem aguarda consulta sua posição e o estado da senha.",
    challenge:
      "Uma fila muda o tempo todo. A solução precisava apresentar informações atualizadas e ações diretas para a equipe, sem deixar o cliente sem visibilidade sobre sua vez.",
    approach:
      "Separei painel administrativo, entrada pública e página da senha. A interface usa atualizações periódicas e um serviço compartilhado para os fluxos reais e para a demonstração local com dados fictícios.",
    outcome:
      "O painel permite gerenciar filas e entradas, enquanto as páginas públicas cobrem inscrição e acompanhamento. Há uma demonstração navegável que funciona sem configurar a API.",
    features: [
      { title: "Painel operacional", description: "Criação de filas, chamadas, confirmações e histórico em uma única interface." },
      { title: "Jornada pública", description: "Entrada por link e acompanhamento da senha em páginas próprias." },
      { title: "Demonstração local", description: "Fluxo explorável com dados fictícios salvos apenas no navegador." },
    ],
    stack: ["Next.js", "React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Docker"],
    productionUrl: "https://fila-front.hotemaki.workers.dev/",
    theme: "fila",
  },
];

import type { Locale } from "./i18n";
import { projectEnglish } from "./projects-en";

export function getProjects(locale: Locale): Project[] {
  return locale === "en" ? projects.map((project) => ({ ...project, ...projectEnglish[project.slug] })) : projects;
}

export function getProject(slug: string, locale: Locale = "pt") {
  return getProjects(locale).find((project) => project.slug === slug);
}
