import { ProjectPageSection } from "@/styles/components/ProjectsPage.styled";
import { StyledVisualBar1 } from "@/styles/components/utils.styled";
import Project from "./smallComponents/Project";
import { link } from "fs";

const projects = [
  {
    name: "Nu Kenzie",
    link: "https://react-entrega-s1-template-nu-kenzie-jonasafribeiro.vercel.app",
    imgs: ["nu-kenzie-welcome-page.png", "nu-kenzie-menu.png"],
  },
  {
    name: "Burguer Kenzie",
    link: "https://hamburgueria-one-nu.vercel.app",
    imgs: [
      "Burguer-kenzie01.png",
      "Burguer-kenzie02.png",
      "Burguer-kenzie03.png",
    ],
  },
];

const ProjectsPage = () => {
  return (
    <>
      <ProjectPageSection>
        <StyledVisualBar1 />
        <h2>Projetos</h2>
        <ul>
          {projects.map((element, index) => (
            <Project
              key={index}
              name={element.name}
              imgs={element.imgs}
              link={element.link}
            />
          ))}
        </ul>
      </ProjectPageSection>
    </>
  );
};

export default ProjectsPage;
