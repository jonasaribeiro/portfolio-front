import {
  ProjectContent,
  ProjectLI,
  ProjectList,
} from "@/styles/components/Projects.styled";
import { StyledSection } from "@/styles/components/utils.styled";

const ProjectsComponent = () => {
  return (
    <>
      <StyledSection dark>
        <h2>Projetos em destaque</h2>
        <ProjectList>
          <ProjectLI>
            <ProjectContent>
              <h2>Projeto 1</h2>
              <span>Descrição do projeto</span>
            </ProjectContent>
          </ProjectLI>
          <ProjectLI>
            <ProjectContent>
              <h2>Projeto 2</h2>
              <span>Descrição do projeto</span>
            </ProjectContent>
          </ProjectLI>
          <ProjectLI>
            <ProjectContent>
              <h2>Projeto 3</h2>
              <span>Descrição do projeto</span>
            </ProjectContent>
          </ProjectLI>
          <ProjectLI>
            <ProjectContent>
              <h2>Projeto 4</h2>
              <span>Descrição do projeto</span>
            </ProjectContent>
          </ProjectLI>
        </ProjectList>
      </StyledSection>
    </>
  );
};

export default ProjectsComponent;
