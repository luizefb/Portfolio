import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Luiz Eduardo Baganha — Desenvolvedor Full Stack",
    template: "%s | Luiz Eduardo Baganha",
  },
  description:
    "Portfólio de Luiz Eduardo Baganha, desenvolvedor Full Stack. Projetos de gestão de consultório e de filas de atendimento.",
  openGraph: {
    title: "Luiz Eduardo Baganha — Desenvolvedor Full Stack",
    description: "Projetos selecionados e trajetória em desenvolvimento de software.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
