import { keyframes } from "styled-components";

export const fadingIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

export const progressing = keyframes`
    from { width: 0; }
    to { width: 100%; }
`;

export const rotating = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;
