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

const StartPage = () => {
  return (
    <StartPageSection>
      <StartPageInfoContainer>
        <StyledVisualBar1 />
        <div>
          <h2>Seja bem vindo ao meu portifólio,</h2>
          <h2>Me chamo Jonas Afonso Ribeiro</h2>
        </div>
        <StartPageText1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ea
          sed nihil fuga voluptatum? Iste, consectetur mollitia tempora culpa
          aperiam odit a nam similique fugit odio distinctio sequi esse magni!
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
