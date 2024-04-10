import styled from "styled-components";
import { StyledSectionBase } from "./utils.styled";

export const TecDeckPageSection = styled(StyledSectionBase)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
`;

export const TecDeckPageDeckContainer = styled.div`
  max-width: 100%;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 90px;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const TecDeckPageCard = styled.div`
  display: flex;
  height: 245px;
  width: 175px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  margin-left: -50px;

  a {
    height: 100%;
    width: 100%;
  }

  &:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
  }

  &:hover {
    position: relative;
    left: -50px;
    transition: 0.4s ease-out;
  }

  &:hover :not(:first-child) {
    width: 130px;
    transition: 0.4 ease-out;
  }

  @media (min-width: 1024px) {
    width: 200px;
    height: 280px;
    &:hover :not(:first-child) {
      width: 150px;
    }
  }
`;

export const TecDeckPageCardTitle = styled.p`
  color: white;
  font-weight: 300;
  position: absolute;
  left: 20px;
  top: 15px;
  text-transform: capitalize;
`;

export const TecDeckPageCardBar = styled.div`
  position: absolute;
  top: 70px;
  left: 20px;
  height: 5px;
  width: 100%;

  :first-child {
    background-color: #2e3033;
    width: 130px;
    height: 100%;
  }

  :not(:first-child) {
    position: absolute;
    top: 0;
    width: 0px;
    height: 100%;
    background: rgb(0, 154, 217);
    background: linear-gradient(
      90deg,
      rgba(0, 154, 217, 1) 0%,
      rgba(217, 147, 0, 1) 65%,
      rgba(255, 186, 0, 1) 100%
    );
    transition: 0.6s ease-out;
  }

  @media (min-width: 1024px) {
    :first-child {
      width: 150px;
    }
  }
`;

export const TecDeckPageCardFigure = styled.figure`
  position: absolute;
  top: 110px;
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  display: flex;

  @media (min-width: 1024px) {
    left: calc(50% - 60px);
  }
`;
