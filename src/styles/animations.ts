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
