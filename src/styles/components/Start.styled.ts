"use client";

import styled from "styled-components";
import { StyledSectionBase } from "./utils.styled";

export const StartPageSection = styled(StyledSectionBase)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const StartPageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 60%;
`;

export const StartPageExtraInfoContainer = styled.div`
  display: flex;
  gap: 50px;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 15rem;
}
    
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
  width: 40%;
  height: 100%;
  justify-content: center;

  & > figure {
    background: white;
    height: 400px;
    width: 400px;
    border-radius: 100%;
  }
`;
