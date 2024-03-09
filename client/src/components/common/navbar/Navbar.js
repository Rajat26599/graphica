import { useEffect, useState } from "react"
import { Button } from "../button/Button"
// import { DialogModal } from "../dialogModal/DialogModal"
import { LoginButtonWrapper, LogoWrapper, NavbarWrapper } from "./styles"
import { Register } from "../../register/Register"
import { Modal } from "../modal/Modal"
import Login from "../../login/Login"

import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        isLogin: state.authReducers.isLogin
    }
}

const Navbar = (props) => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ page, setPage ] = useState('register')

    // If login is success close the auth modal
    useEffect(() => {
        setIsOpen(false)
    }, [props.isLogin])

    return (
        <NavbarWrapper>
            <LogoWrapper>
                {props.logo}
            </LogoWrapper>
            <Modal
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)}
            >
                {
                    page === 'register' ?
                        <Register setPage={setPage} />
                    :
                        <Login setPage={setPage} />
                    
                }
            </Modal>
            {/* <DialogModal 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)}
                text={'Feature Unavailable'}
                primaryBtnText={'Ok'}
            ></DialogModal> */}
            <LoginButtonWrapper>
                <Button
                    btnText={props.btnText}
                    onClick={() => setIsOpen(true)}
                ></Button>
            </LoginButtonWrapper>
        </NavbarWrapper>
    )
}

export default connect(mapStateToProps)(Navbar)