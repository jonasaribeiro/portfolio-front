"use client";

import styled from "styled-components";
import { StyledSectionBase } from "./utils.styled";
import Image from "next/image";

export const ProjectPageSection = styled(StyledSectionBase)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 60px;
  padding-bottom: 60px;

  ul {
    display: flex;
    gap: 30px;
    flex-wrap: nowrap;
    flex-direction: row;
}
  }

  li {
    overflow: hidden;
    border-radius: 10px;
  }
`;

export const ImageContainer = styled.div`
  height: 150px;
  overflow: hidden;
  position: relative;

  & > img {
    height: 100%;
    transition: transform 0.5 ease, box-shadow 0.5s ease;
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
