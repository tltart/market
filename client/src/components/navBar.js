import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../index'
import { ADMIN_ROUTE, LOGIIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <nav>
            <div className="nav-wrapper">
                <NavLink to={SHOP_ROUTE} className="brand-logo" style={{ marginLeft: '20px' }} >Мне Вкусно!</NavLink>
                {user.isAuth ?
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={ADMIN_ROUTE} >Админ панель</Link></li>
                    </ul>
                    :
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={LOGIIN_ROUTE}>Выйти</Link></li>
                        <li><Link to={REGISTRATION_ROUTE}>Авторизация</Link></li>
                    </ul>
                }
            </div>
        </nav>
    );
});

export default NavBar;