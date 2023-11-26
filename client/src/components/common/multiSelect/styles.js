import styled from 'styled-components'
import { colors, desktop } from '../../constants/globalStyleVariables'

export const MultiSelectWrapper = styled.div `
    margin: ${desktop.formElements.separation} 0;
`

export const WritingArea = styled.input `
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