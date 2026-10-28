import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className={`project-visual visual-${project.theme} ${large ? "visual-large" : ""}`}>
      <div className="screenshot-window">
        <Image
          src={`/projects/${project.theme}.png`}
          alt={`Captura da aplicação ${project.title} com dados fictícios`}
          fill
          sizes={large ? "(max-width: 900px) 100vw, 1100px" : "(max-width: 900px) 100vw, 600px"}
          className="screenshot-image"
        />
      </div>
    </div>
  );
}
