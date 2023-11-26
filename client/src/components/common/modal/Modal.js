import { Button } from "../button/Button"
import { SecondaryButton } from "../secondaryButton/SecondaryButton"
import { ModalWrapper, FooterWrapper, ModalOutside, RightButtons, ThirdButtonSpacer } from "./styles"

export const Modal = (props) => {
    return (
        <div>
            {
                props.isOpen?
                <ModalOutside>
                    <ModalWrapper width={props.width}>
                        {props.children}
                        <FooterWrapper>
                            <SecondaryButton
                                btnText={props.closeBtnText}
                                onClick={props.onClose}
                                ></SecondaryButton>
                            <RightButtons>
                                {
                                    props.thirdBtnText?
                                        <Button
                                            btnText={props.thirdBtnText} 
                                            onClick={props.thirdBtnClick}
                                            ></Button> : null
                                }
                                <ThirdButtonSpacer></ThirdButtonSpacer>
                                {
                                    props.primaryBtnText?
                                        <Button 
                                            btnText={props.primaryBtnText} 
                                            onClick={props.primaryBtnClick}
                                            ></Button> : null
                                }
                            </RightButtons>
                        </FooterWrapper>
                    </ModalWrapper>
                </ModalOutside>
                : null
            }
        </div>
    )
}