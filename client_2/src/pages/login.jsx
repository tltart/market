import RegisterForm from 'components/RegisterForm/registerForm'
import React from 'react'
import c from './login.module.css'

const LoginPage = () => {

    const formHandle = (data) => {
        console.log(data)
    }

    return (
        <div className={c.login}>
            <h1>Регистрация</h1>
            <RegisterForm onSubmit={formHandle} />
            <div className={c.is__login}>
                <p>Уже зарегистрированы?</p>
                <h1>Войти</h1>
            </div>
        </div>
    )
}




export default LoginPage