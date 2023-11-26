import { styled } from "styled-components";

export const ButtonWrapper = styled.button `
    position: relative;
    padding: 15px 30px;
    color: white;
    background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);
    box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);

    font-family: inherit;
    font-weight: 600;
    letter-spacing: inherit;
    cursor: pointer;
    text-align:center;
    background-size: 300% 100%;
    border: none;

    border-radius: 0.2rem;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        top: 0.1rem;
        right: 0.14rem;
        bottom: 0.15rem;
        left: 0.14rem;
        background-color: white;
        border-radius: 0.1rem;
        z-index: -1;
      }
    
    &::after {
    content: "${props => props.btnText || 'Close'}";
    background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);
    -webkit-background-clip: text;
    color: transparent;
    }

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