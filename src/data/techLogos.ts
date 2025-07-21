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
  SiExpress,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiAmazon,
  SiGooglecloud,
  SiGithub,
  SiJest,
  SiSharp,
  SiUnity,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export interface TechLogo {
  id: string;
  name: string;
  icon: React.ElementType;
}

export const techLogosData: TechLogo[] = [
  // Frontend
  { id: "nextjs", name: "Next.js", icon: SiNextdotjs },
  { id: "react", name: "React", icon: SiReact },
  { id: "html", name: "HTML5", icon: SiHtml5 },
  { id: "css", name: "CSS3", icon: SiCss3 },
  { id: "node", name: "Node.js", icon: SiNodedotjs },
  { id: "express", name: "Express", icon: SiExpress },
  { id: "django", name: "Django", icon: SiDjango },
  { id: "typescript", name: "TypeScript", icon: SiTypescript },
  { id: "javascript", name: "JavaScript", icon: SiJavascript },
  { id: "python", name: "Python", icon: SiPython },
  { id: "java", name: "Java", icon: FaJava },
  { id: "csharp", name: "C#", icon: SiSharp },
  { id: "postgresql", name: "PostgreSQL", icon: SiPostgresql },
  { id: "mysql", name: "MySQL", icon: SiMysql },
  { id: "mongodb", name: "MongoDB", icon: SiMongodb },
  { id: "prisma", name: "Prisma", icon: SiPrisma },
  { id: "docker", name: "Docker", icon: SiDocker },
  { id: "git", name: "Git", icon: SiGit },
  { id: "github", name: "GitHub", icon: SiGithub },
  { id: "aws", name: "AWS", icon: SiAmazon },
  { id: "gcp", name: "Google Cloud", icon: SiGooglecloud },
  { id: "linux", name: "Linux", icon: SiLinux },
  { id: "jest", name: "Jest", icon: SiJest },
  { id: "unity", name: "Unity", icon: SiUnity },
];