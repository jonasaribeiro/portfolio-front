import { Container, TecListUL } from "@/styles/components/TecList.styled";
import { StyledSection } from "@/styles/components/utils.styled";

const TecListComponent = () => {
  return (
    <>
      <StyledSection>
        <Container>
          <h3>Tecnologias</h3>

          <div>
            <h4>Linguagens</h4>
            <TecListUL>
              <li>
                <p>Javascript</p>
              </li>
              <li>
                <p>Typescript</p>
              </li>
              <li>
                <p>Python</p>
              </li>
            </TecListUL>
          </div>

          <div>
            <h4>Framework</h4>
            <TecListUL>
              <li>
                <p>Jest</p>
              </li>
              <li>
                <p>React.js</p>
              </li>
              <li>
                <p>Next.js</p>
              </li>
              <li>
                <p>Express.js</p>
              </li>
              <li>
                <p>Django</p>
              </li>
            </TecListUL>
          </div>

          <div>
            <h4>Banco de Dados</h4>
            <TecListUL>
              <li>
                <p>PostgreSQL</p>
              </li>
              <li>
                <p>MongoDB</p>
              </li>
              <li>
                <p>SQLite</p>
              </li>
            </TecListUL>
          </div>

          <div>
            <h4>Principais Bibliotecas</h4>
            <TecListUL>
              <li>
                <p>Stripe</p>
              </li>
              <li>
                <p>JWT</p>
              </li>
              <li>
                <p>bcrypt</p>
              </li>
              <li>
                <p>axios</p>
              </li>
              <li>
                <p>styled-components</p>
              </li>
            </TecListUL>
          </div>
        </Container>
      </StyledSection>
    </>
  );
};

export default TecListComponent;
