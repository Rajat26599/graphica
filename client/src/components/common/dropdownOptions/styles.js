import styled from "styled-components"
import { desktop, colors } from "../../constants/globalStyleVariables"

export const DropdownWrapper = styled.div `

`

export const OptionsGroupWrapper = styled.div `
    background-color: ${colors.lightPink};
    border: 1px solid ${colors.pink};
`

export const OptionWrapper = styled.p `
    margin: 0;
    padding: 0 ${desktop.formElements.textPadding};

    &:hover {
        background-color: ${colors.pink};
    }
`

export const CustomOptionWrapper = styled.p `
    margin: 0;
    padding: 0 ${desktop.formElements.textPadding};
    background-color: white;

    &:hover {
        background-color: ${colors.pink};
    }
`