import {
  StyledHeader,
  StyledHeaderContainer,
} from "@/styles/components/Header.styled";
import Image from "next/image";

const HeaderComponent = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <div>X</div>
        <Image
          src="./imgs/logo-white.svg"
          alt="{JAR}"
          width={150}
          height={50}
        />
      </StyledHeaderContainer>
      <StyledHeaderContainer>
        <a href="#about-me">CONTATO</a>
        <figure>
          <p>BR</p>
          <p>|</p>
          <p>EN</p>
        </figure>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default HeaderComponent;
