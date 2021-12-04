import RegisterForm from '../components/RegisterForm/registerForm'
import React from 'react'
import c from './login.module.css'
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import Footer from 'components/common/Footer/footer';
import { login, registration } from '../http/userApi';
import { useState } from 'react';
import { UserThunk } from '../store/userReducer';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return{
        isAuth: state.user.isAuth
    }
}

const LoginPage = ({isAuth, UserThunk}) => {

    let [mess, setMess] = useState();

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const formHandle = async (data) => {
        if (!isLogin) {
            try {
                let bb = await registration(data);
                UserThunk(true);
                return bb
            }
            catch (e) {
                if (e.response && e.response.data) {
                    setMess(e.response.data.message)
                }
                UserThunk(false)
            }
            return 
        }
        try {
            let zz = await login(data);
            UserThunk(true);
            return zz
        }
        catch (e) {
            if (e.response && e.response.data) {
                setMess(e.response.data.message)
            }
            UserThunk(false)
        }
    }


    return (
        <>
            <div className={c.login}>
                {isLogin ?
                    <RegisterForm onSubmit={formHandle} title={"Войти"} isLogin={isLogin} errorMessage={mess} />
                    :
                    <RegisterForm onSubmit={formHandle} title={"Регистрация"} isLogin={isLogin} errorMessage={mess} />}


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
        </>
    )
}




export default connect(mapStateToProps, {UserThunk})(LoginPage) 