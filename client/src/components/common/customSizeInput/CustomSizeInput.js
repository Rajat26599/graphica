import { Label } from "../label/Label"
import { CustomSizeInputWrapper, InputWrapper, MainInput, UnitDropdown, InputAreaWrapper, InputSeparator } from "./styles"

export const CustomSizeInput = (props) => {
    const units = ['px', 'mm', 'cm', 'inch', 'foot', 'm']
    return (
        <CustomSizeInputWrapper>
            {
                ['Width', 'Height'].map((dimention) => (
                    <InputWrapper>
                        <Label label={dimention} />
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