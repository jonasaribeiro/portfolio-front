"use client";

import styled from "styled-components";

export const StyledSection = styled.section<{ dark?: boolean }>`
  height: 100vh;
  width: 100%;
  padding-top: 100px;
  background-color: ${({ dark }) => (dark ? "#040A2B" : "white")};
  color: ${({ dark }) => (dark ? "white" : "#040A2B")};
  overflow: hidden;
`;
