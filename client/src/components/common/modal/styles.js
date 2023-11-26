import styled from 'styled-components';

export const ModalOutside = styled.div `
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
`

export const ModalWrapper = styled.div `
    width: ${props => props.width || 'calc(100vw/2)'};
    position: relative;
    margin: auto;
    top: 10%;
    background-color: white;
    color: black;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 2rem;
`

export const FooterWrapper = styled.div `
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
`

export const RightButtons = styled.div `
    display: flex;
    justify-content: space-between;
`

export const ThirdButtonSpacer = styled.div `
    margin-right: 1rem;
`