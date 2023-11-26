import { useEffect, useState } from "react"
import { Button } from "../button/Button"
import { DialogModal } from "../dialogModal/DialogModal"
import { LoginButtonWrapper, LogoWrapper, NavbarWrapper } from "./styles"

export const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <NavbarWrapper>
            <LogoWrapper>
                {props.logo}
            </LogoWrapper>
            <DialogModal 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)}
                text={'Feature Unavailable'}
                primaryBtnText={'Ok'}
                ></DialogModal>
            <LoginButtonWrapper>
                <Button
                    btnText={props.btnText}
                    onClick={() => setIsOpen(true)}
                ></Button>
            </LoginButtonWrapper>
        </NavbarWrapper>
    )
}