import styled, { keyframes } from 'styled-components';
import { colors, desktop, breakpoints } from '../../constants/globalStyleVariables';

// KEYFRAMES

const movement_one = keyframes`
    0%,
    100% { transform: none; },
    50% { transform: translate(50%, 20%) scale(1); }
`
const movement_two = keyframes`
    0%,
    500% { transform: none; },
    50% { transform: translate(20%, 80%) scale(1.3);}
`

// STYLED COMPONENTS

export const BannerWrapper = styled.div`
    background-color: ${props => props.backgroundColor};
`

export const BannerMain = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px ${desktop.horizontalSpacing};
    position: relative;
    z-index: 1;

    @media only screen and (max-width: ${breakpoints.mobile}) {
        flex-direction: column-reverse;
    }
`

export const BannerContent = styled.div`
    @media only screen and (max-width: ${breakpoints.mobile}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
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

    @media only screen and (max-width: ${breakpoints.mobile}) {
        width: 80%;
    }
`

// Bubbles

export const BlobContainer = styled.div`
    height: ${props => props.bannerHeight}px;
    overflow: hidden;
    position:absolute;
    width: 100%;
    filter: blur(10px);
`

const MovementOne = styled.div`
    animation: ${props => props.animation === 'movement_one' ? movement_one : movement_two} ${props => props.time}s ease-in-out infinite both;
`

export const Blob = styled(MovementOne)((props) => ({
    borderRadius: '50%',
    // opacity: '0.8',
    position: 'absolute',
    background: `${props.background}`,
    height: `${props.height}px`,
    width: `${props.width}px`,
    left: `${props.left}px`,
    top: `${props.top}px`,
}))

// export const Blob = styled.div`
//     border-radius: 50%;
//     opacity: 0.8;
//     position: absolute;

//     ${props => (`
//         background: ${props.background};
//         height: ${props.height}px;
//         width: ${props.width}px;
//         left: ${props.left}px;
//         top: ${props.top}px;
//     `)}
// `