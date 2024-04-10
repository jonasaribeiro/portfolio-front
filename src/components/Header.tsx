"use client";

import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderNavText,
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
        <StyledHeaderNavText href="#">Início</StyledHeaderNavText>
        <StyledHeaderNavText href="#contact">Contato</StyledHeaderNavText>
        <StyledHeaderNavText href="#tecDeck">Tecnologias</StyledHeaderNavText>
        <StyledHeaderNavText href="#projects">Projetos</StyledHeaderNavText>
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
