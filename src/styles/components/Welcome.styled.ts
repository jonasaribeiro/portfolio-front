"use client";

import styled from "styled-components";
import { blinkCursor } from "../animations";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledText = styled.p`
  color: white;
  font-size: 1.25rem;
`;

export const StyledTypewriter = styled.h2`
  display: inline-block;
  width: min-content;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.05em solid white;
  animation: ${blinkCursor} 0.75s step-end infinite;
  font-size: 3rem;
  font-weight: bold;
  color: blue;
  line-height: 1.2; /* Ajuste conforme necessário */
  height: 3.6rem; /* Exemplo baseado em font-size: 3rem e line-height: 1.2 */
`;
