import { useEffect } from "react"
import { Button } from "../button/Button"
import { SecondaryButton } from "../secondaryButton/SecondaryButton"
import { ModalWrapper, FooterWrapper, ModalOutside, RightButtons, ThirdButtonSpacer } from "./styles"
import { screenWidth } from "../../constants/globalStyleVariables"

export const Modal = (props) => {
    // Prevent scrolling for medium screens when modal is opened
    useEffect(() => {
        if(props.isOpen && (window.screen.width <= parseInt(screenWidth.medium))) {
            window.scrollTo(0, 0);
            document.body.style.overflowY = 'hidden';
        }
        return () => document.body.style.overflowY = 'auto';
    }, [props.isOpen])

    return (
        <div>
            {
                props.isOpen?
                <ModalOutside>
                    <ModalWrapper width={props.width}>
                        {props.children}
                        <FooterWrapper>
                            <SecondaryButton
                                $btnText={props.closeBtnText}
                                onClick={props.onClose}
                                ></SecondaryButton>
                            <RightButtons>
                                {
                                    props.thirdBtnText?
                                        <Button
                                            onClick={props.thirdBtnClick}
                                            >
                                            {props.thirdBtnText}
                                        </Button> : null
                                }
                                <ThirdButtonSpacer></ThirdButtonSpacer>
                                {
                                    props.primaryBtnText?
                                        <Button 
                                            onClick={props.primaryBtnClick}
                                            >
                                            {props.primaryBtnText} 
                                        </Button> : null
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