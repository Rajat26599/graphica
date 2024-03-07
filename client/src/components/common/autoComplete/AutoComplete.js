import { useState, useEffect } from "react"
import { DropdownOptions } from "../dropdownOptions/DropdownOptions"
import { Label } from "../label/Label"
import { AutoCompleteWrapper, WritingArea } from "./styles"

export const AutoComplete = (props) => {
    const [showDropdownOptions, setShowDropdownOptions] = useState(true)

    useEffect(() => {
        if(props.allItems.includes(props.value) || props.value==='Other' || props.value==='' ) setShowDropdownOptions(false)
        else setShowDropdownOptions(true)
    }, [props.value, props.allItems])

    return (
        <AutoCompleteWrapper>
            <Label label={props.label}></Label>
            <WritingArea placeholder={props.placeholder} onChange={props.onChange} value={props.value}></WritingArea>
            {
                showDropdownOptions && 
                <DropdownOptions 
                    items={props.items} 
                    onClick={(item) => props.onSelect(item)}
                    />
            }
        </AutoCompleteWrapper>
    )
}