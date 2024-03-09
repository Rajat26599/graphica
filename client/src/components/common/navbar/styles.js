import styled from "styled-components"
import { colors, desktop } from "../../constants/globalStyleVariables"

export const NavbarWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    height: 80px;
    background-color: ${colors.primaryColor};
    color: white;
    align-items: center;
    padding: 0 ${desktop.horizontalSpacing};
`

export const LogoWrapper  = styled.h1 `
    font-size: 2rem;
    cursor: pointer;
` 

export const LoginButtonWrapper = styled.div`
    justify-self: flex-end;
    display: flex;
    align-items: center;
`

export const UserAccountWrapper = styled.div`
    position: relative;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    background-color: darkblue;
    margin-right: 1rem;
    cursor: pointer;

    &:hover {
        background-color: ${colors.pink};
    } 
`

export const UserNameInitialsWrapper = styled.dt`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const LogoutButtonWrapper = styled.h2`
    cursor: pointer;
    
    &:hover {
        color: ${colors.pink};
    } 
`