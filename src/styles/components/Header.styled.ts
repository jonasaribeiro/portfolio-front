"use client";

import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #040a2b;
  position: sticky;
  top: 0;
  border-bottom: #ffffff50 solid 1px;
  color: white;
  padding: 0 40px;
  z-index: 1;
  height: 100px;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
