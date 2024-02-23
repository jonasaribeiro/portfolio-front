"use client";

import { Star } from "@/styles/components/Start.styled";
import styled from "styled-components";

const multipleBoxShadow = (n: number) => {
  let value = `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
  }
  return value;
};

const shadowsSmall = multipleBoxShadow(700);
const shadowsMedium = multipleBoxShadow(200);
const shadowsBig = multipleBoxShadow(100);

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
`;

const AnimatedBackground = () => (
  <Background>
    <Star $size={1} $shadows={shadowsSmall} $duration={50} />
    <Star $size={2} $shadows={shadowsMedium} $duration={100} />
    <Star $size={3} $shadows={shadowsBig} $duration={150} />
  </Background>
);

export default AnimatedBackground;
