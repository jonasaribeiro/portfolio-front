import {
  ProjectContent,
  ProjectLI,
  ProjectList,
  ProjectsPageContainer,
} from "@/styles/components/Projects.styled";
import { StyledSection } from "@/styles/components/utils.styled";

const ProjectsComponent = () => {
  return (
    <>
      <StyledSection $dark>
        <ProjectsPageContainer>
          <h3>Projetos em destaque</h3>
          <ProjectList>
            <ProjectLI>
              <ProjectContent>
                <h3>Projeto 1</h3>
                <span>Descrição do projeto</span>
              </ProjectContent>
            </ProjectLI>
            <ProjectLI>
              <ProjectContent>
                <h3>Projeto 2</h3>
                <span>Descrição do projeto</span>
              </ProjectContent>
            </ProjectLI>
            <ProjectLI>
              <ProjectContent>
                <h3>Projeto 3</h3>
                <span>Descrição do projeto</span>
              </ProjectContent>
            </ProjectLI>
            <ProjectLI>
              <ProjectContent>
                <h3>Projeto 4</h3>
                <span>Descrição do projeto</span>
              </ProjectContent>
            </ProjectLI>
          </ProjectList>
        </ProjectsPageContainer>
      </StyledSection>
    </>
  );
};

export default ProjectsComponent;
