import { useState } from "react"
import { GoToRegister, LoginForm, LoginWrapper } from "./styles"

import { Button } from "../common/button/Button"
import { Input } from "../common/input/Input"
import { Alert } from "../common/alert/Alert"

import { connect } from "react-redux"
import { useDispatch } from "react-redux"

import { setLogin, setUserData } from "../../redux/actions/authActions"
import { endpoints } from "../constants/endpoints"

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin
    }
}

const Login = (props) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errorDesc, setErrorDesc ] = useState('')

    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(process.env.REACT_APP_SERVER_URL + endpoints.AUTH_LOGIN, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.status==='success') {
                    dispatch(setLogin(true))
                    dispatch(setUserData(data.userData))
                } else if(data.status==='error') {
                    setErrorDesc(data.errorDesc)
                }
            })
            .catch(e => console.log(e))
    }

    const getAlert = () => {
        return errorDesc && <Alert errorDesc={errorDesc} />
    }

    return (
        <LoginWrapper>
            <LoginForm onSubmit={(e) => handleSubmit(e)}>
                <h2>Login</h2>
                {getAlert()}
                <Input
                    type='email'
                    label='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    type='password'
                    label='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type='submit'
                    $btnText='Login'
                />
        
                <GoToRegister onClick={() => props.setPage('register')}>Don't have an account? Register</GoToRegister>
            </LoginForm>
        </LoginWrapper>
    )
}

export default connect(mapStateToProps)(Login)