import {
  TecDeckPageCard,
  TecDeckPageCardBar,
  TecDeckPageCardFigure,
  TecDeckPageCardTitle,
  TecDeckPageDeckContainer,
  TecDeckPageSection,
} from "@/styles/components/TecDeckPage.styled";
import { StyledVisualBar1 } from "@/styles/components/utils.styled";
import Image from "next/image";

const tecArray = [
  { name: "javascript", img: "javascript.svg" },
  { name: "typescript", img: "typescript.svg" },
  { name: "typeorm", img: "typeorm.svg" },
  { name: "stripe", img: "stripe.svg" },
  { name: "sqlite", img: "sqlite.svg" },
  { name: "react", img: "react.svg" },
  { name: "python", img: "python.svg" },
  { name: "postgresql", img: "postgresql.svg" },
  { name: "JWT", img: "json-web-tokens.svg" },
  { name: "expressjs", img: "expressjs.svg" },
  { name: "django", img: "django.svg" },
];

const TecDeckPage = () => {
  return (
    <TecDeckPageSection>
      <StyledVisualBar1 />
      <h2>Deck de Tecnologias</h2>
      <TecDeckPageDeckContainer>
        {tecArray.map((tecInfo, index) => (
          <TecDeckPageCard key={index}>
            <TecDeckPageCardTitle>{tecInfo.name}</TecDeckPageCardTitle>
            <TecDeckPageCardBar>
              <div />
              <div />
            </TecDeckPageCardBar>
            <TecDeckPageCardFigure>
              <Image
                src={"/imgs/tec-icons/" + tecInfo.img}
                alt={tecInfo.img}
                width={120}
                height={120}
              />
            </TecDeckPageCardFigure>
          </TecDeckPageCard>
        ))}
      </TecDeckPageDeckContainer>
    </TecDeckPageSection>
  );
};

export default TecDeckPage;
