import { css } from '@emotion/react';

export const frameStyles = (rounded) => {
    return (css`
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    ${borderRadius(rounded)}
`)};

const borderRadius = (rounded) => rounded?css`border-radius:15px`:css`border-radius:0px`
