import { Label } from "../label/Label"
import { TextareaWraper, WritingArea } from "./styles"

export const Textarea = (props) => {
    return (
        <TextareaWraper>
                <Label label={props.label}></Label>
                <WritingArea
                    rows={props.rows} 
                    placeholder={props.placeholder}
                ></WritingArea>

            </TextareaWraper>
    )
}