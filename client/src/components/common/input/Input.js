import { Label } from "../label/Label"
import { InputWrapper, WritingArea } from "./styles"

export const Input = (props) => {
    return (
        <InputWrapper>
            <Label label={props.label}></Label>
            <WritingArea width={props.width} placeholder={props.placeholder}></WritingArea>
        </InputWrapper>
    )
}