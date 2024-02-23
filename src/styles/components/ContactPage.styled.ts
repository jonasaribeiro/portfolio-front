"use client";

import styled from "styled-components";
import { StyledSectionBase } from "./utils.styled";

export const ContactPageSection = styled(StyledSectionBase)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  color: white;
  align-items: center;
`;

export const ContactPageOutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 10px 20px;
    color: white;
    background: #0008cc;
    border-style: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const ContactPageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: #c9d5ff;
  max-width: 1200px;
  width: 100%;
  height: calc(100vh - 300px);
  padding: 50px 40px;
  color: black;

  & > div {
    width: 40%;
  }

  img {
    cursor: pointer;
  }
`;

export const ContactPageInnerContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
`;

export const ContactPageInfoContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  font-size: 1.25rem;
`;

export const ContactPageInfoContainer2 = styled.div`
  display: flex;
  gap: 15px;
`;

export const ContactPageInnerContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;

  h3 {
    font-size: 1.75rem;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    gap: 10px;
  }

  input {
    padding: 10px 20px;
    font-size: 1rem;
  }

  textarea {
    padding: 10px 20px;
    font-size: 1rem;
  }
`;
