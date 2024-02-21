"use client";

import styled from "styled-components";

export const ProjectsPageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const ProjectList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 500px;
  gap: 10px;
`;

export const ProjectLI = styled.li`
  flex: 0 0 120px;
  border-radius: 0.5rem;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  box-shadow: 1px 5px 15px #3844db;
  position: relative;
  overflow: hidden;

  &:nth-of-type(1) {
    background: black no-repeat 50% / cover;
  }
  &:nth-of-type(2) {
    background: white no-repeat 50% / cover;
  }
  &:nth-of-type(3) {
    background: green no-repeat 50% / cover;
  }
  &:nth-of-type(4) {
    background: blue no-repeat 50% / cover;
  }

  &:hover {
    flex: 0 0 250px;
    box-shadow: 1px 3px 15px #7645d8;
    transform: translatey(-30px);
  }

  &: hover > div {
    opacity: 1;
    transform: translatey(0%);
    visibility: visible;
  }
`;

export const ProjectContent = styled.div`
  font-size: 1.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 15px;
  opacity: 0;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  background: rgb(2, 2, 46);
  background: linear-gradient(
    0deg,
    rgba(2, 2, 46, 0.6755077030812324) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translatey(100%);
  transition: opacity 0.5s ease-in-out, transform 0.5s 0.2s;
  visibility: hidden;

  span {
    display: block;
    margin-top: 5px;
    font-size: 1.2rem;
  }
`;
