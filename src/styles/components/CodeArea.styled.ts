"use client";

import styled from "styled-components";
import { pulseGlow, rotateCCW, rotateCW } from "../animations";

export const Void = styled.div`
  width: auto;
  height: auto;
  max-width: 1024px;
  margin: auto;
  position: relative;
  aspect-ratio: 1 / 1;
  max-width: 100%;
  max-height: 100%;
`;

export const ProjectList = styled.ul`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  outline: 2px dotted magenta;
  z-index: 1;

  &:hover * {
    animation-play-state: paused;
  }
`;

export const ListItem = styled.li<{ $index: number; projectsCount: number }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  animation: ${rotateCW} calc(var(--rotate-speed) * 1s) var(--easing) infinite;

  &,
  & > div {
    animation-delay: ${({ $index, projectsCount }) =>
      `calc((var(--rotate-speed) / ${projectsCount}) * -${$index}s)`};
  }
`;

export const Card = styled.div`
  width: 27%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #535062;
  animation: ${rotateCCW} calc(var(--rotate-speed) * 1s) var(--easing) infinite;
`;

export const ProjectName = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #3b2ed0;
  display: block;
`;

export const CenterCircle = styled.div`
  position: absolute;
  width: 230px;
  aspect-ratio: 1 / 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 18px 36px -18px rgba(12, 5, 46, 0.3),
    0px 30px 60px -12px rgba(12, 5, 46, 0.25);
  border-radius: 50%;
`;

export const LastCircle = styled.div`
  position: absolute;
  width: 66%;
  aspect-ratio: 1 / 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #f5f4fe;
  opacity: 0.25;
  box-shadow: 0px 18px 36px -18px rgba(12, 5, 46, 0.3),
    0px 30px 60px -12px rgba(12, 5, 46, 0.25);
  border-radius: 50%;
`;

export const SecondCircle = styled.div`
  position: absolute;
  width: 40%;
  aspect-ratio: 1 / 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #f5f4fe;
  opacity: 0.5;
  box-shadow: 0px 18px 36px -18px rgba(12, 5, 46, 0.3),
    0px 30px 60px -12px rgba(12, 5, 46, 0.25);
  border-radius: 50%;
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50%;
  animation: ${pulseGlow} 5s linear infinite alternate;
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-image: radial-gradient(
    100% 50% at 100% 50%,
    rgba(60, 26, 229, 0.25) 0%,
    rgba(60, 26, 229, 0.247904) 11.79%,
    rgba(59, 26, 229, 0.241896) 21.38%,
    rgba(58, 26, 229, 0.2324) 29.12%,
    rgba(57, 26, 229, 0.219837) 35.34%,
    rgba(55, 26, 229, 0.20463) 40.37%,
    rgba(53, 26, 229, 0.1872) 44.56%,
    rgba(51, 26, 229, 0.16797) 48.24%,
    rgba(48, 26, 229, 0.147363) 51.76%,
    rgba(46, 26, 229, 0.1258) 55.44%,
    rgba(44, 26, 229, 0.103704) 59.63%,
    rgba(41, 26, 229, 0.0814963) 64.66%,
    rgba(39, 26, 229, 0.0596) 70.88%,
    rgba(36, 26, 229, 0.038437) 78.62%,
    rgba(34, 26, 229, 0.0184296) 88.21%,
    rgba(32, 26, 229, 0) 100%
  );

  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    right: 0;
    display: block;
    background-image: linear-gradient(
      180deg,
      rgba(60, 26, 229, 0) 0%,
      #3c1ae5 50%,
      rgba(60, 26, 229, 0) 100%
    );
  }
`;

export const Crop = styled.div`
  -webkit-mask-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1)
  );
`;
