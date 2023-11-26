import styled from 'styled-components'
import { desktop } from '../../constants/globalStyleVariables'

export const TextareaWraper = styled.div `
    width: 97%;
    margin: ${desktop.formElements.separation} 0;
`

export const WritingArea = styled.textarea `
    placeholder: ${props => props.placeholder};
    border-radius: ${desktop.formElements.borderRadius};
    padding: 0.5rem;
    width: 100%;
    font-family: inherit;
    letter-spacing: inherit;

    &:focus {
        outline-color:${desktop.formElements.focusColor};
    }
`