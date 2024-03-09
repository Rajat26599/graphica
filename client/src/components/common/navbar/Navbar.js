import { useEffect, useState } from "react"
import { Button } from "../button/Button"
// import { DialogModal } from "../dialogModal/DialogModal"
import { LoginButtonWrapper, LogoWrapper, LogoutButtonWrapper, NavbarWrapper, UserAccountWrapper, UserNameInitialsWrapper } from "./styles"
import { Register } from "../../register/Register"
import { Modal } from "../modal/Modal"
import Login from "../../login/Login"

import { connect, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setLogin, clearUserData } from "../../../redux/actions/authActions"

const mapStateToProps = (state) => {
    return {
        isLogin: state.authReducers.isLogin,
        userData: state.authReducers.userData
    }
}

const Navbar = (props) => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ page, setPage ] = useState('register')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // If login is success close the auth modal
    useEffect(() => {
        setIsOpen(false)
    }, [props.isLogin])

    const onLogout = () => {
        dispatch(setLogin(false))
        dispatch(clearUserData())
        navigate('/')
    }

    return (
        <NavbarWrapper>
            <LogoWrapper
                onClick={() => navigate('/')}
            >
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
                {
                    props.isLogin ?
                        <>
                            <UserAccountWrapper
                                title='Dashboard'
                                onClick={() => navigate('/dashboard')}
                            >
                                <UserNameInitialsWrapper>
                                    RS
                                </UserNameInitialsWrapper>
                            </UserAccountWrapper>                    
                            <LogoutButtonWrapper
                                title='Logout'
                                onClick={() => onLogout()}
                            >
                                {'[->'}
                            </LogoutButtonWrapper>
                        </>
                    :
                        <Button
                            btnText={props.btnText}
                            onClick={() => setIsOpen(true)}
                        />
                }
            </LoginButtonWrapper>
        </NavbarWrapper>
    )
}

export default connect(mapStateToProps)(Navbar)