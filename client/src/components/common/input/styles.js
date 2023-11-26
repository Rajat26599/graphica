import styled from 'styled-components'
import { desktop } from '../../constants/globalStyleVariables'

export const InputWrapper = styled.div `
    width: ${props => props.width || '100%'};
    margin: ${desktop.formElements.separation} 0;
`

export const WritingArea = styled.input `
    width: ${props => props.width || '97%'};
    placeholder: ${props => props.placeholder};
    border-width: ${desktop.formElements.borderWidth};
    border-radius: ${desktop.formElements.borderRadius};
    padding: 0.5rem;
    font-family: inherit;
    letter-spacing: inherit;

    &:focus {
        outline-color:${desktop.formElements.focusColor};
    }
`