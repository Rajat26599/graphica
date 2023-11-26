import { styled } from "styled-components";

export const ButtonWrapper = styled.button `
    padding: 15px 30px;
    color: white;
    background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);
    box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);

    font-family: inherit;
    font-weight: 600;
    letter-spacing: inherit;
    cursor: pointer;
    text-align:center;
    border: none;
    background-size: 300% 100%;

    border-radius: 3px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

    &:hover {
        background-position: 100% 0;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
    }

    &:focus {
        outline: none;
    }
`