import { DropdownWrapper, OptionWrapper, CustomOptionWrapper, OptionsGroupWrapper } from "./styles"

export const DropdownOptions = (props) => {
    return (
        <DropdownWrapper>
            {
                <OptionsGroupWrapper>
                    { 
                        props.items?.length===0 ? (<OptionWrapper>No match found</OptionWrapper>)
                        :    
                        props.items.map((item, index) => (
                            <OptionWrapper key={index} onClick={() => props.onClick(item)}>{item}</OptionWrapper>
                        ))
                    
                    }
                    <CustomOptionWrapper onClick={() => props.onClick('Other')}>Other</CustomOptionWrapper>
                </OptionsGroupWrapper>
            }
        </DropdownWrapper>
    )
}