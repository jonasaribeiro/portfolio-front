import styled from "styled-components";
import { StyledSectionBase } from "./utils.styled";

export const ProjectPageSection = styled(StyledSectionBase)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 60px;
  padding-bottom: 60px;

  ul {
    display: flex;
    gap: 30px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
  }

  li {
    width: 100%;
    min-width: 200px;
    max-width: 500px;
    height: 100%;
    aspect-ratio: 2 / 1;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;

    a {
      height: 100%;
      width: 100%;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 101%;
  overflow: hidden;
  position: relative;

  & > img {
    height: 100%;
    width: 100%;
  }

  & > div {
    display: flex;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    justify-content: center;
    align-items: flex-end;
    padding: 12px;

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }

    &:hover h3 {
      font-size: 1.35rem;
    }
  }
`;

export const ProjectName = styled.h3`
  text-align: center;
  color: #fff;
  text-shadow: 0 0 5px black;
  font-weight: bolder;
  font-size: 1.25rem;
`;
