import styled from "styled-components";
import { StyledSectionBase } from "./utils.styled";
import { animStar } from "../animations";

export const StartPageSection = styled(StyledSectionBase)`
  position: relative;
  display: flex;
  gap: 30px;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  color: white;
  overflow: hidden;
  padding: 30px 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0 10px;
  }
`;

export const StartPageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  padding: 0 20px;
  z-index: 2;

  @media (min-width: 1024px) {
    width: 60%;
    padding: 0;
  }
`;

export const StartPageExtraInfoContainer = styled.div`
  display: flex;
  gap: 50px;
  align-self: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 15rem;
  }

  @media (min-width: 1024px) {
    align-self: baseline;
  }
`;

export const StartPageText1 = styled.p`
  font-size: 1.25rem;
`;

export const StartPageText2 = styled.p`
  font-size: 5rem;
  display: flex;
  align-items: center;

  span {
    font-size: 6rem;
    font-weight: 900;
    color: #0047ff;
  }
`;

export const StartPageText3 = styled.p`
  font-size: 1.25rem;
`;

export const StartPageImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;

  & > figure {
    background: white;
    height: 400px;
    width: 400px;
    border-radius: 100%;
  }
`;

export const Star = styled.div<{
  $size: number;
  $shadows: string;
  $duration: number;
}>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background: transparent;
  box-shadow: ${(props) => props.$shadows};
  animation: ${animStar} ${(props) => props.$duration}s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: ${(props) => props.$size}px;
    height: ${(props) => props.$size}px;
    background: transparent;
    box-shadow: ${(props) => props.$shadows};
  }
`;
