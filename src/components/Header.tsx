"use client";

import {
  StyledHeader,
  StyledHeaderContainer,
} from "@/styles/components/Header.styled";
import Image from "next/image";
import Typewriter from "./smallComponents/Typewriter";

const HeaderComponent = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Typewriter text="</>Jonas Ribeiro" />
      </StyledHeaderContainer>
      <StyledHeaderContainer>
        <a href="#">Início</a>
        <a href="#contact">Contato</a>
        <a href="#tecDeck">Tecnologias</a>
        <a href="#projects">Projetos</a>
        <figure>
          <Image
            src="/imgs/Flag_of_Brazil 1.svg"
            alt="BR"
            width={60}
            height={40}
          />
        </figure>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default HeaderComponent;
