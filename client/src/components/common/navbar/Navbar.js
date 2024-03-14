import { useEffect, useState } from "react"
import { Button } from "../button/Button"
// import { DialogModal } from "../dialogModal/DialogModal"
import { LoginButtonWrapper, LogoWrapper, LogoutButtonWrapper, NavbarWrapper, UserAccountWrapper, UserNameInitialsWrapper } from "./styles"
import { Register } from "../../register/Register"
import { Modal } from "../modal/Modal"
import Login from "../../login/Login"

import { connect, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setLogin, clearUserData, showAuthModal } from "../../../redux/actions/authActions"

const mapStateToProps = (state) => {
    return {
        isLogin: state.authReducers.isLogin,
        userData: state.authReducers.userData,
        showAuthModal: state.authReducers.showAuthModal,
    }
}

const Navbar = (props) => {
    const [ page, setPage ] = useState('register')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // If login is success close the auth modal
    useEffect(() => {
        dispatch(showAuthModal(false))
    }, [props.isLogin, dispatch])

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
                isOpen={props.showAuthModal} 
                onClose={() => {
                    dispatch(showAuthModal(false))
                }}
            >
                {
                    page === 'register' ?
                        <Register setPage={setPage} />
                    :
                        <Login setPage={setPage} />
                    
                }
            </Modal>

            <LoginButtonWrapper>
                {
                    props.isLogin ?
                        <>
                            <UserAccountWrapper
                                title='Dashboard'
                                onClick={() => navigate('/dashboard')}
                            >
                                <UserNameInitialsWrapper>
                                    { props.userData.email ? props.userData.email[0].toUpperCase() : 'D'}
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
                            onClick={() => dispatch(showAuthModal(true))}
                            >
                            {props.$btnText}
                        </Button>
                }
            </LoginButtonWrapper>
        </NavbarWrapper>
    )
}

export default connect(mapStateToProps)(Navbar)