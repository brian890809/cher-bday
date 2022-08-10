import { css, Theme } from '@emotion/react';

export const frameStyles = (theme, rounded) => {
    console.log(rounded)
    return (css`
    max-width: 50%;
    ${borderRadius(rounded)}
`)};

const borderRadius = ({theme, rounded}) => rounded?css`border-radius:8px`:css`border-radius:0px`
