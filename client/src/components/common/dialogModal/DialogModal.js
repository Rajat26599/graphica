import { Button } from "../button/Button"
import { DialogModalWrapper, FooterWrapper } from "./styles"

export const DialogModal = (props) => {
    return (
        <div>
            {
                props.isOpen?
                <DialogModalWrapper>
                    <p>{props.text}</p>
                    <FooterWrapper>
                        <Button onClick={props.onClose}>{props.primaryBtnText}</Button>
                    </FooterWrapper>
                </DialogModalWrapper>
                : null
            }
        </div>
    )
}