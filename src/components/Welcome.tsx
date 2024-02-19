import {
  Container,
  StyledText,
  StyledTextContainer,
} from "@/styles/components/Welcome.styled";
import { StyledSection } from "@/styles/components/utils.styled";
import Typewriter from "./smallComponents/Typewriter";

const WelcomeComponent = () => {
  return (
    <>
      <StyledSection $dark>
        <Container>
          <StyledTextContainer>
            <Typewriter text="Hello World!" />
            <StyledText>Placeholde - Frase curta de apresentação</StyledText>
          </StyledTextContainer>
          <div>
            <h2>placeholder para imagens</h2>
          </div>
        </Container>
      </StyledSection>
    </>
  );
};

export default WelcomeComponent;
