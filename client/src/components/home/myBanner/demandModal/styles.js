import styled from "styled-components";

export const DoubleColumnWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div `
    &:nth-child(1) {
        width: 45%;
    }

    &:nth-child(2) {
        width: 45%;
    }
`

export const ThankYouPageWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`