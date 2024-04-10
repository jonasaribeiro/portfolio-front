import styled from "styled-components";

export const StyledTypewriter = styled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  font-size: 2rem;
  font-weight: bolder;
  color: white;
  line-height: 1.2;
  @media (min-width: 540px) {
    font-size: 3rem;
  }
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
  width: 100%;
  height: 10px;

  @media (min-width: 1024px) {
    align-self: baseline;
    width: 200px;
  }
`;

export const StyledVisualBar2 = styled.div`
  background: #d9d9d9;
  width: 100%;
  height: 1px;

  @media (min-width: 1024px) {
    align-self: baseline;
    width: 540px;
  }
`;
