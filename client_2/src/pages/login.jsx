import RegisterForm from '../components/RegisterForm/registerForm'
import React from 'react'
import c from './login.module.css'
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userApi';
import { useState } from 'react';
import { UserThunk } from '../store/userReducer';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';




const mapStateToProps = (state) => {
    return {
        isAuth: state.user.isAuth,
        name: state.user.name,
        mail: state.user.mail,
    }
}

const LoginPage = ({ isAuth, UserThunk, name, mail }) => {

    const history = useHistory();

    let [mess, setMess] = useState();

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const formHandle = async (data) => {
        if (!isLogin) {
            try {
                let bb = await registration(data);
                bb.isAuth = true;
                UserThunk(bb);
                console.log(bb);
                return bb
            }
            catch (e) {
                if (e.response && e.response.data) {
                    setMess(e.response.data.message)
                }
                UserThunk()
            }
            return
        }
        try {
            let zz = await login(data);
            zz.isAuth = true;
            UserThunk(zz);
            console.log(zz);
            history.push(SHOP_ROUTE);
            return zz
        }
        catch (e) {
            if (e.response && e.response.data) {
                setMess(e.response.data.message)
            }
            UserThunk()
        }
    }


    return (
        <>
            {isAuth ? 
                <div>
                    <h1>Ваш логин: {name}</h1>
                    <h2>Ваша почта: {mail}</h2>
                </div>
            :
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
            }
        </>
    )
}




export default connect(mapStateToProps, { UserThunk })(LoginPage)