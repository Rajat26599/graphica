import { useState } from "react"
import { Input } from "../common/input/Input"
import { RegisterForm, RegisterWrapper, Roles, RolesList } from "./styles"
import { Button } from "../common/button/Button"

export const Register = (props) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ roles, setRoles ] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(process.env.REACT_APP_SERVER_URL + '/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                roles
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.status==='success') {
                    props.setPage('login')
                }
            })
            .catch(e => console.log(e))
    }

    return (
        <RegisterWrapper>
            <h2>Register</h2>
            <RegisterForm onSubmit={(e) => handleSubmit(e)}>
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

                <label>You are a</label>
                <RolesList>
                    <Roles>
                        <input
                            type='checkbox'
                            value='Customer'
                            onChange={(e) => {
                                if(e.target.checked) {
                                    setRoles([...roles, 'customer'])
                                } else {
                                    let newRoles = roles.filter(role => role !== 'customer')
                                    setRoles(newRoles)
                                }
                            }}
                        />
                        <label>Customer</label>
                    </Roles>
                    <Roles>
                        <input
                            type='checkbox'
                            value='Designer'
                            onChange={(e) => {
                                if(e.target.checked) {
                                    setRoles([...roles, 'designer'])
                                } else {
                                    let newRoles = roles.filter(role => role !== 'designer')
                                    setRoles(newRoles)
                                }
                            }}
                        />
                        <label>Designer</label>
                    </Roles>
                </RolesList>

                <Button 
                    type='submit'
                    btnText='Register'
                />
                <br /><br />
                <button onClick={() => props.setPage('login')}>Already a member? Login</button>
            </RegisterForm>
        </RegisterWrapper>
    )
}