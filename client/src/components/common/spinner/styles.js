import styled from "styled-components"
import { spin } from "../../../util/animations/spin"

export const SpinnerWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    opacity: 0.5;
`

export const MySpinnerWrapper = styled.div`
    position: absolute;
    top: calc(50% - 5rem);
    left: 50%;
    transform: translate(-50%, -50%);
`

export const MySpinner = styled.div`
    border: 10px solid #f3f3f3;
    border-top: 10px solid #3498db;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: ${spin} 1s linear infinite;
`