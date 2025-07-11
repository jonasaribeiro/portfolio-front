// src/data/projects.ts

export interface ProjectLink {
  labelKey: string;
  url: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  links: ProjectLink[];
}

export const projectsData: Project[] = [
  {
    id: "proj-01",
    titleKey: "projects.p1.title",
    descriptionKey: "projects.p1.description",
    image: "/images/projects/project-01.png",
    links: [
      // ATUALIZADO: Removemos o prefixo "projects."
      { labelKey: "links.github", url: "https://github.com/seu-usuario/projeto-1" },
      { labelKey: "links.liveDemo", url: "https://projeto-1.seusite.com" },
    ],
  },
  {
    id: "proj-02",
    titleKey: "projects.p2.title",
    descriptionKey: "projects.p2.description",
    image: "/images/projects/project-02.png",
    links: [
      { labelKey: "links.github", url: "https://github.com/seu-usuario/projeto-2" },
    ],
  },
  {
    id: "proj-03",
    titleKey: "projects.p3.title",
    descriptionKey: "projects.p3.description",
    image: "/images/projects/project-03.png",
    links: [
      { labelKey: "links.github", url: "https://github.com/seu-usuario/projeto-3" },
      { labelKey: "links.liveDemo", url: "https://projeto-3.seusite.com" },
    ],
  },
  {
    id: "proj-04",
    titleKey: "projects.p4.title",
    descriptionKey: "projects.p4.description",
    image: "/images/projects/project-04.png",
    links: [
      { labelKey: "links.github", url: "https://github.com/seu-usuario/projeto-4" },
    ],
  },
  {
    id: "proj-05",
    titleKey: "projects.p5.title",
    descriptionKey: "projects.p5.description",
    image: "/images/projects/project-05.png",
    links: [
      { labelKey: "links.github", url: "https://github.com/seu-usuario/projeto-5" },
      { labelKey: "links.liveDemo", url: "https://projeto-5.seusite.com" },
    ],
  },
  {
    id: "proj-06",
    titleKey: "projects.p6.title",
    descriptionKey: "projects.p6.description",
    image: "/images/projects/project-06.png",
    links: [
      { labelKey: "links.github", url: "https://github.com/seu-usuario/projeto-6" },
      { labelKey: "links.liveDemo", url: "https://projeto-6.seusite.com" },
      { labelKey: "links.caseStudy", url: "#" }, 
    ],
  },
];