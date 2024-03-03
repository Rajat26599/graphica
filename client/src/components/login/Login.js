import { LoginForm, LoginWrapper } from "./styles"

export const Login = (props) => {
    return (
        <LoginWrapper>
            <LoginForm>
                <h1>Login Form</h1>
                <button onClick={() => props.setPage('register')}>Don't have an account? Register</button>
            </LoginForm>
        </LoginWrapper>
    )
}