import {
  StartPageExtraInfoContainer,
  StartPageImageContainer,
  StartPageInfoContainer,
  StartPageSection,
  StartPageText1,
  StartPageText2,
  StartPageText3,
} from "@/styles/components/Start.styled";
import {
  StyledVisualBar1,
  StyledVisualBar2,
} from "@/styles/components/utils.styled";
import AnimatedBackground from "./smallComponents/AnimatedBackgroundStart";

const StartPage = () => {
  return (
    <StartPageSection>
      <AnimatedBackground />
      <StartPageInfoContainer>
        <StyledVisualBar1 />
        <div>
          <h2>
            Seja bem vindo ao meu portifólio, <br /> Me chamo Jonas Afonso
            Ribeiro
          </h2>
        </div>
        <StartPageText1>
          Sou um Desenvolvedor Full-Stack, dedicado a explorar profundamente os
          fundamentos da programação em busca de melhorias constantes. Estou
          comprometido com o aprendizado contínuo e estou sempre à procura de
          oportunidades que me permitam demonstrar minhas habilidades e
          enfrentar novos desafios!
        </StartPageText1>
        <StyledVisualBar2 />
        <StartPageExtraInfoContainer>
          <div>
            <StartPageText2>
              2<span>+</span>
            </StartPageText2>
            <StartPageText3>Anos de experiência</StartPageText3>
          </div>
          <div>
            <StartPageText2>
              10<span>+</span>
            </StartPageText2>
            <StartPageText3>Projetos online</StartPageText3>
          </div>
        </StartPageExtraInfoContainer>
      </StartPageInfoContainer>
      <StartPageImageContainer>
        <figure></figure>
      </StartPageImageContainer>
    </StartPageSection>
  );
};

export default StartPage;
