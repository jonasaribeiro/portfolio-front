// src/data/techLogos.ts
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Definimos um tipo para cada logo
export interface TechLogo {
  id: string;
  name: string;
  icon: React.ElementType;
}

export const techLogosData: TechLogo[] = [
  { id: "nextjs", name: "Next.js", icon: SiNextdotjs },
  { id: "react", name: "React", icon: SiReact },
  { id: "node", name: "Node.js", icon: SiNodedotjs },
  { id: "typescript", name: "TypeScript", icon: SiTypescript },
  { id: "javascript", name: "JavaScript", icon: SiJavascript },
  { id: "python", name: "Python", icon: SiPython },
  { id: "docker", name: "Docker", icon: SiDocker },
  { id: "git", name: "Git", icon: SiGit },
  { id: "postgresql", name: "PostgreSQL", icon: SiPostgresql },
  { id: "prisma", name: "Prisma", icon: SiPrisma },
  { id: "java", name: "Java", icon: FaJava },
];