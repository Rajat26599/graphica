import { Label } from "../label/Label"
import { TextareaWraper, WritingArea } from "./styles"
import { SubLabel } from "../subLabel/SubLabel"

export const Textarea = (props) => {
    return (
        <TextareaWraper>
                <Label>{props.label}</Label>
                <SubLabel>{props.subLabel}</SubLabel>
                <WritingArea
                    rows={props.rows} 
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                ></WritingArea>

            </TextareaWraper>
    )
}