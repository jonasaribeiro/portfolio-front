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
    image: "/images/projects/p1.png",
    links: [
      {
        labelKey: "links.github",
        url: "https://github.com/jonasaribeiro/ongproject_backend",
      },
    ],
  },
  {
    id: "proj-02",
    titleKey: "projects.p2.title",
    descriptionKey: "projects.p2.description",
    image: "/images/projects/p2.png",
    links: [{ labelKey: "links.live", url: "http://handsplay.com.br" }],
  },
  {
    id: "proj-03",
    titleKey: "projects.p3.title",
    descriptionKey: "projects.p3.description",
    image: "/images/projects/p3.png",
    links: [
      {
        labelKey: "links.github",
        url: "https://github.com/jonasaribeiro/AuthFlowAPI",
      },
    ],
  },
];
