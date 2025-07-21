import {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaGamepad,
} from "react-icons/fa";
import { SiJest, SiStripe, SiGithub } from "react-icons/si";

export interface Skill {
  id: string;
  translationKey: string;
  technologies: string[];
  icon: React.ElementType;
}

export const skillsData: Skill[] = [
  {
    id: "languages",
    translationKey: "skills.categories.languages",
    technologies: ["JavaScript", "TypeScript", "Python"],
    icon: FaCode,
  },
  {
    id: "frontend",
    translationKey: "skills.categories.frontend",
    technologies: ["React.js", "Next.js", "HTML", "CSS", "EJS"],
    icon: FaReact,
  },
  {
    id: "backend",
    translationKey: "skills.categories.backend",
    technologies: ["Node.js", "Express", "Django", "Express-rate-limit"],
    icon: FaServer,
  },
  {
    id: "databases_orms",
    translationKey: "skills.categories.databases_orms",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Prisma ORM"],
    icon: FaDatabase,
  },
  {
    id: "testing",
    translationKey: "skills.categories.testing",
    technologies: ["Jest"],
    icon: SiJest,
  },
  {
    id: "cloud",
    translationKey: "skills.categories.cloud",
    technologies: ["AWS", "Google Cloud", "Hostinger (VPS)"],
    icon: FaCloud,
  },
  {
    id: "devops_infra",
    translationKey: "skills.categories.devops_infra",
    technologies: ["Docker", "Linux (Ubuntu)"],
    icon: FaCogs,
  },
  {
    id: "version_control",
    translationKey: "skills.categories.version_control",
    technologies: ["Git", "GitHub"],
    icon: SiGithub,
  },
  {
    id: "apis_services",
    translationKey: "skills.categories.apis_services",
    technologies: ["Stripe"],
    icon: SiStripe,
  },
  {
    id: "game_dev",
    translationKey: "skills.categories.game_dev",
    technologies: ["Unity", "C#"],
    icon: FaGamepad,
  },
];
