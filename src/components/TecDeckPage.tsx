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
  {
    name: "javascript",
    img: "javascript.svg",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    name: "typescript",
    img: "typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  { name: "python", img: "python.svg", link: "https://www.python.org/" },
  {
    name: "node.js",
    img: "nodejs.svg",
    link: "https://nodejs.org/",
  },
  {
    name: "sqlite",
    img: "sqlite.svg",
    link: "https://www.sqlite.org/",
  },
  {
    name: "postgresql",
    img: "postgresql.svg",
    link: "https://www.postgresql.org/",
  },
  { name: "typeorm", img: "typeorm.svg", link: "https://typeorm.io/" },
  { name: "prisma", img: "prisma.svg", link: "https://www.prisma.io/" },
  { name: "react", img: "react.svg", link: "https://react.dev/" },
  { name: "next.js", img: "next-js.svg", link: "https://nextjs.org/" },
  {
    name: "styled-components",
    img: "styled-components.svg",
    link: "https://styled-components.com/",
  },
  {
    name: "expressjs",
    img: "expressjs.svg",
    link: "https://expressjs.com/pt-br/",
  },
  { name: "django", img: "django.svg", link: "https://www.djangoproject.com/" },
  { name: "stripe", img: "stripe.svg", link: "https://stripe.com/" },
  { name: "JWT", img: "json-web-tokens.svg", link: "https://jwt.io/" },
];

const TecDeckPage = () => {
  return (
    <TecDeckPageSection>
      <StyledVisualBar1 />
      <h2>Deck de Tecnologias</h2>
      <TecDeckPageDeckContainer>
        {tecArray.map((tecInfo, index) => (
          <TecDeckPageCard key={index}>
            <a href={tecInfo.link} target="_blank">
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
            </a>
          </TecDeckPageCard>
        ))}
      </TecDeckPageDeckContainer>
    </TecDeckPageSection>
  );
};

export default TecDeckPage;
