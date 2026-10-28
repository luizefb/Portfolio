import type { Project } from "./projects";

// English copy is keyed by the stable project slug. Shared URLs, images, and stacks stay in projects.ts.
export const projectEnglish: Record<string, Pick<Project, "title" | "category" | "year" | "summary" | "intro" | "challenge" | "approach" | "outcome" | "features">> = {
  "gerenciador-de-consultorio": {
    title: "Practice management system",
    category: "Care management",
    year: "Work in progress",
    summary: "An application to organize clients, appointments, and care records in one workspace.",
    intro: "A workspace for finding information, planning schedules, and following records without losing the context of each appointment.",
    challenge: "People, schedules, and records need to remain connected, clear, and protected. The interface had to support daily care without turning simple tasks into lengthy processes.",
    approach: "I organized the experience into clients, calendar, appointments, and records. On the backend, I structured the domains as modules and connected them to the interface through an API mediated by Next.js.",
    outcome: "The project brings schedules, client profiles, and records together in an application with authentication, auditing, and checks to prevent scheduling conflicts. It can be deployed with Cloudflare Workers and D1.",
    features: [
      { title: "Connected schedule", description: "Calendar and appointments linked to clients." },
      { title: "History by person", description: "Profiles with access to related records and appointments." },
      { title: "Protected access", description: "Login and expiring sessions, plus a private connection between Next.js and the API." },
    ],
  },
  "sistema-de-gerenciamento-de-filas": {
    title: "Queue management system",
    category: "Queue management",
    year: "Work in progress",
    summary: "An application for managing service queues, with an admin dashboard and public pages for joining and tracking a ticket.",
    intro: "An experience for both sides of the wait: staff can manage the queue, while visitors can check their position and ticket status.",
    challenge: "A queue changes constantly. The solution needed to show current information and direct actions for staff while giving visitors visibility into when their turn is coming.",
    approach: "I separated the admin dashboard, public entry, and ticket page. The interface refreshes periodically and uses a shared service for live flows and a local demo with sample data.",
    outcome: "The dashboard manages queues and entries, while public pages cover registration and ticket tracking. A navigable demo works without setting up the API.",
    features: [
      { title: "Operations dashboard", description: "Queue creation, calls, confirmations, and history in one interface." },
      { title: "Public journey", description: "Join through a link and track a ticket on dedicated pages." },
      { title: "Local demo", description: "An explorable flow with sample data stored only in the browser." },
    ],
  },
};
