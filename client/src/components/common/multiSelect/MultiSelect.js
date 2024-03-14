import { DropdownOptions } from "../dropdownOptions/DropdownOptions"
import { Label } from "../label/Label"
import { MultiSelectWrapper, WritingArea } from "./styles"

export const MultiSelect = (props) => {
    return (
        <MultiSelectWrapper>
            <Label>{props.label}</Label>
            <SubLabel>{props.subLabel}</SubLabel>
            <WritingArea placeholder={props.placeholder}></WritingArea>
            <DropdownOptions items={props.items} />
        </MultiSelectWrapper>
    )
}