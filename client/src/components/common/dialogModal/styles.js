import styled from 'styled-components';

export const DialogModalWrapper = styled.div `
    width: ${props => props.width || 'calc(100vw/2)'};
    position: absolute;
    left: calc(100vw/4);
    top: calc(100vh/4);
    background-color: white;
    color: black;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 30px;
`

export const FooterWrapper = styled.div `
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
`