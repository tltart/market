import RegisterForm from '../components/RegisterForm/registerForm'
import React from 'react'
import c from './login.module.css'
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'


const LoginPage = () => {

    const formHandle = (data) => {
        console.log(data)
    }
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <div className={c.login}>
            {isLogin ?
                <RegisterForm onSubmit={formHandle} title={"Войти"} isLogin={isLogin} />
                :
                <RegisterForm onSubmit={formHandle} title={"Регистрация"} isLogin={isLogin} />}
                

            {isLogin ?
                <div className={c.is__login}>
                    <p>Нет аккуанта?</p><NavLink to={REGISTRATION_ROUTE}><h2>Регистрация</h2></NavLink>
                </div>
                :
                <div className={c.is__login}>
                    <p>Уже зарегистрированы?</p><NavLink to={LOGIN_ROUTE}><h2>Войти</h2></NavLink>
                </div>
            }

        </div>
    )
}




export default LoginPage