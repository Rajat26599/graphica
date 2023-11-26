import styled from 'styled-components'
import { desktop } from '../../constants/globalStyleVariables'

export const AutoCompleteWrapper = styled.div `
    margin: ${desktop.formElements.separation} 0;
    width: ${props => props.width || '100%'};
`

export const WritingArea = styled.input `
    width: ${props => props.width || '95%'};
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