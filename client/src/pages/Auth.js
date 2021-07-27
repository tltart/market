import { React } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIIN_ROUTE;

    return (
        <div style={{ display: 'flex', paddingTop: '50px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 600 }}>
                <div className="row">
                    <div className="col s12">
                        <div className="row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h4>{isLogin ? 'Войти' : 'Регистрация'}</h4>
                            <form style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className="input-field col s12">
                                    <input type="email" id="autocomplete-input" className="autocomplete" placeholder="Введите Email"></input>
                                    <input type="password" id="autocomplete-input" className="autocomplete" placeholder="Введите пароль"></input>
                                </div>
                                <div style={{display:'flex', justifyContent:'flex-end'}}>
                                    {isLogin ?
                                        <div style={{display:'flex', width:'100%', justifyContent:'space-around'}}>
                                            Нет аккуанта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                                        
                                        <a className="waves-effect waves-light btn" type="submit">Войти</a>
                                        </div>
                                        :
                                        <a className="waves-effect waves-light btn" type="submit">Регистрация</a>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;