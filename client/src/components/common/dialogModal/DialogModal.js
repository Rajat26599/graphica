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
                        <Button $btnText={props.primaryBtnText} onClick={props.onClose}></Button>
                    </FooterWrapper>
                </DialogModalWrapper>
                : null
            }
        </div>
    )
}