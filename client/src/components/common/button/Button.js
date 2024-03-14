import { ButtonWrapper } from "./styles"

export const Button = (props) => {
    return (
        <ButtonWrapper onClick={props.onClick} type={props.type}>
            {props.children}
        </ButtonWrapper>
    )
}