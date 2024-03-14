import styled from "styled-components";
import { screenWidth } from "../../../constants/globalStyleVariables";

export const DoubleColumnWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    
    @media (max-width: ${screenWidth.medium}) {
        flex-direction: column; 
        align-items: unset;
    }
`
export const Column = styled.div `
    &:nth-child(1) {
        width: 45%;
    }

    &:nth-child(2) {
        width: 45%;
    }

    @media (max-width: ${screenWidth.medium})  { 
        &:nth-child(1) {
            width: 100%;
        }
    
        &:nth-child(2) {
            width: 100%;
        }
    }
`

export const ThankYouPageWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`