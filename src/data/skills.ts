import { FaCode, FaCloud, FaServer, FaDatabase, FaReact } from "react-icons/fa";
import { IoBuild } from "react-icons/io5";

export interface Skill {
  id: string;
  translationKey: string;
  technologies: string[];
  icon: React.ElementType;
}

export const skillsData: Skill[] = [
  {
    id: "prog_languages",
    translationKey: "skills.categories.progLanguages",
    technologies: ["React.js", "Next.js", "EJS", "HTML", "CSS", "JavaScript", "TypeScript"],
    icon: FaCode,
  },
  {
    id: "devops_tools",
    translationKey: "skills.categories.devopsTools",
    technologies: ["Node.js", "Express", "TypeScript", "JavaScript"],
    icon: IoBuild,
  },
  {
    id: "cloud_hosting",
    translationKey: "skills.categories.cloudHosting",
    technologies: ["PostgreSQL", "Prisma ORM"],
    icon: FaCloud,
  },
  {
    id: "frontend",
    translationKey: "skills.categories.frontend",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    icon: FaReact,
  },
  {
    id: "backend",
    translationKey: "skills.categories.backend",
    technologies: ["Docker", "Git", "GitHub", "Linux (Ubuntu)", "VPS"],
    icon: FaServer,
  },
  {
    id: "databases",
    translationKey: "skills.categories.databases",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    icon: FaDatabase,
  },
];