import { keyframes } from "styled-components";

export const rotateCW = keyframes`
    from {
        transform: translate3d(0px, -50%, -1px) rotate(-45deg);
    }
    to {
        transform: translate3d(0px, -50%, 0px) rotate(-315deg);
    }
`;

export const rotateCCW = keyframes`
    from {
        transform: rotate(45deg);
    }
    to {
        transform: rotate(315deg);
    }
`;

export const pulseGlow = keyframes`
    from {
        background-size: 60%;
    }
    to {
        background-size: 100%;
    }
`;

export const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const blinkCursor = keyframes`
  0% { border-color: transparent; }
  50% { border-color: white; }
  100% { border-color: transparent; }
`;
