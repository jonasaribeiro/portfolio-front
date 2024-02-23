"use client";

import styled from "styled-components";

export const StyledTypewriter = styled.h1`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  font-size: 3rem;
  font-weight: bolder;
  color: white;
  line-height: 1.2;
`;

export const StyledBookmark = styled.div`
  position: absolute;
  margin-top: -100px;
`;

export const StyledSectionBase = styled.section`
  width: 100%;
  min-height: calc(100vh - 100px);
  padding: 0 40px;
  border-top: #ffffff50 solid 1px;
`;

export const StyledVisualBar1 = styled.div`
  background: #d9d9d9;
  width: 200px;
  height: 10px;
  align-self: baseline;
`;

export const StyledVisualBar2 = styled.div`
  background: #d9d9d9;
  width: 540px;
  height: 1px;
`;
