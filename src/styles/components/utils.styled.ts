"use client";

import styled from "styled-components";

export const StyledSection = styled.section<{ $dark?: boolean }>`
  height: calc(100vh - 100px);
  width: 100%;
  background-color: ${({ $dark }) => ($dark ? "#040A2B" : "white")};
  color: ${({ $dark }) => ($dark ? "white" : "#040A2B")};
  overflow: hidden;
`;
