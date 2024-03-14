import { Label } from "../label/Label"
import { InputWrapper, WritingArea } from "./styles"
import { SubLabel } from "../subLabel/SubLabel"

export const Input = (props) => {

    return (
        <InputWrapper>
            <Label>{props.label}</Label>
            <SubLabel>{props.subLabel}</SubLabel>
            <WritingArea 
                type={props.type} 
                value={props.value} 
                width={props.width} 
                placeholder={props.placeholder}
                onChange={props.onChange}
            ></WritingArea>
        </InputWrapper>
    )
}