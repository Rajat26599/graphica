import { Label } from "../label/Label"
import { InputWrapper, WritingArea } from "./styles"

export const Input = (props) => {

    return (
        <InputWrapper>
            <Label label={props.label}></Label>
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