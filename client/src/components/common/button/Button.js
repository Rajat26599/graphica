import { ButtonWrapper } from "./styles"

export const Button = (props) => {
    return (
        <ButtonWrapper onClick={props.onClick}>
            {props.btnText}
        </ButtonWrapper>
    )
}