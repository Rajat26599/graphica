import styled from 'styled-components';
import { colors, desktop } from '../../constants/globalStyleVariables';

export const BannerWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px ${desktop.horizontalSpacing};
    background-color: ${props => props.$backgroundColor};
`

export const Tagline = styled.h1 `
    color: ${props => props.color || colors.primaryColor};
    font-size: 3.5rem;
`

export const Subtagline = styled.p `
   width: 80%;
   margin-bottom: 2rem;
`

export const ButtonArea = styled.div `
    display: flex;
`

export const ImageWrapper = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt,
})) `
    width: ${props => props.width};
    height: auto;
`