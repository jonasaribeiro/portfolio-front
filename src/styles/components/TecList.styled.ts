"use client";

import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  gap: 25px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  p {
    color: white;
  }
`;

export const TecListUL = styled.ul`
  display: flex;
  gap: 10px;

  li {
    background: #09165b;
    padding: 8px 15px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
