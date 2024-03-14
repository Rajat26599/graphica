import styled from 'styled-components';
import { colors, desktop, screenWidth } from '../../constants/globalStyleVariables';

export const BannerWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px ${desktop.horizontalSpacing};
    background-color: ${props => props.$backgroundColor};

    @media (max-width: ${screenWidth.medium})  { 
        flex-direction: column-reverse;
    }
`

export const Tagline = styled.h1 `
    color: ${props => props.color || colors.primaryColor};
    font-size: 3.5rem;

    @media (max-width: ${screenWidth.medium})  { 
        text-align: center;
    }
`

export const Subtagline = styled.p `
    width: 80%;
    margin-bottom: 2rem;

    @media (max-width: ${screenWidth.medium})  { 
        width: 100%;
        text-align: center;
    }
`

export const ButtonArea = styled.div `
    display: flex;

    @media (max-width: ${screenWidth.medium})  { 
        justify-content: center;
    }
`

export const ImageWrapper = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt,
})) `
    width: ${props => props.width};
    height: auto;

    @media (max-width: ${screenWidth.medium})  { 
        width: 80vw;
    }
`