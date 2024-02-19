import {
  Card,
  CenterCircle,
  Crop,
  LastCircle,
  ListItem,
  Mask,
  ProjectList,
  ProjectName,
  SecondCircle,
  Void,
} from "@/styles/components/CodeArea.styled";
import { StyledSection } from "@/styles/components/utils.styled";

const projects = [
  { name: "Projeto 1", description: "Descrição do projeto 1" },
  { name: "Projeto 2", description: "Descrição do projeto 2" },
  { name: "Projeto 3", description: "Descrição do projeto 3" },
  { name: "Projeto 4", description: "Descrição do projeto 4" },
  { name: "Projeto 5", description: "Descrição do projeto 5" },
  { name: "Projeto 6", description: "Descrição do projeto 6" },
];

const CodeAreaComponent = () => {
  return (
    <>
      <StyledSection $dark>
        <Void>
          <Crop>
            <ProjectList>
              {projects.map((project, index) => (
                <ListItem
                  key={index}
                  $index={index}
                  $projectsCount={projects.length}
                >
                  <Card>
                    <a href="">
                      <ProjectName>{project.name}</ProjectName>
                      <span>{project.description}</span>
                    </a>
                  </Card>
                </ListItem>
              ))}
            </ProjectList>
            <LastCircle />
            <SecondCircle />
          </Crop>
          <Mask />
          <CenterCircle />
        </Void>
      </StyledSection>
    </>
  );
};

export default CodeAreaComponent;
