import styled from "styled-components";

export const ModalBackground = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  max-width: 600px;
  border-radius: 10px;
  text-align: center;
  gap: 20px;
  display: flex;
  flex-direction: column;

  & > h2 {
    color: #0070f3;
  }

  & > p {
    text-align: left;
  }
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  padding: 14px 20px;
  background: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #005bb5;
  }
`;
