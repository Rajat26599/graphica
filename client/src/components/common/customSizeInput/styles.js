import styled from "styled-components";
import { colors, desktop } from "../../constants/globalStyleVariables";

export const CustomSizeInputWrapper = styled.div `
    display: flex;
    justify-content: space-between;
`

export const InputWrapper = styled.div `
    width: 45%;
`

export const InputAreaWrapper = styled.div `
    display: flex;
`

export const MainInput = styled.input.attrs(props => ({
    type: props.type,
  })) `
    width: 60%;
    placeholder: ${props => props.placeholder};
    border-width: ${desktop.formElements.borderWidth};
    border-top-left-radius: ${desktop.formElements.borderRadius};
    border-bottom-left-radius: ${desktop.formElements.borderRadius};
    padding: 0.5rem;
    font-family: inherit;
    letter-spacing: inherit;

    &:focus {
        outline-color:${desktop.formElements.focusColor};
    }
`

export const UnitDropdown = styled.select `
    width: 40%;
    background-color: ${colors.lightGray};

    &:focus {
        outline-color:${desktop.formElements.focusColor};
    }
`

export const InputSeparator = styled.div `
    width: 10%;
`