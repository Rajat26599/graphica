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
` 

export const LoginButtonWrapper = styled.div `
    justify-self: flex-end;
`