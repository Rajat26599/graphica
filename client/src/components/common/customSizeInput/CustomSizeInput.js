import { Label } from "../label/Label"
import { SubLabel } from "../subLabel/SubLabel"
import { CustomSizeInputWrapper, InputWrapper, MainInput, UnitDropdown, InputAreaWrapper } from "./styles"

export const CustomSizeInput = (props) => {
    const units = ['px', 'mm', 'cm', 'inch', 'foot', 'm']
    return (
        <CustomSizeInputWrapper>
            {
                ['Width', 'Height'].map((dimention) => (
                    <InputWrapper>
                        <Label>{dimention}</Label>
                        <SubLabel>{props.subLabel}</SubLabel>
                        <InputAreaWrapper>
                            <MainInput type={'number'}></MainInput>
                            <UnitDropdown>
                                {
                                    units.map((unit) => (
                                        <option>{unit}</option>
                                    ))
                                }
                            </UnitDropdown>
                        </InputAreaWrapper>
                    </InputWrapper>
                ))
            }
        </CustomSizeInputWrapper>
    )
}