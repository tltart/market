import RegisterForm from 'components/RegisterForm/registerForm'
import React from 'react'


const LoginPage = () => {

    const formHandle = (data) => {
        console.log(data)
    }

    return (
        <div>
            <RegisterForm onSubmit={formHandle} />
            <h1>Login Page</h1>
        </div>
    )
}




export default LoginPage