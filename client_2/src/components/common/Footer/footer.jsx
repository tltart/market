import React from 'react';
import c from './footer.module.css';
import plus from '../../../assets/icons/plus.svg'
import comment from '../../../assets/icons/comment.svg'
import home from '../../../assets/icons/home.svg'
import search from '../../../assets/icons/search.svg'
import user from '../../../assets/icons/user.svg'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE, LOGIN_ROUTE, BASKET_ROUTE } from '../../../utils/consts'


const Footer = () => {

    return (
        <div className={c.menu}>
            <NavLink to='/' >
                <img src={home} alt="home" />
            </NavLink>
            <NavLink to='/search'>
                <img src={search} alt="search" />
            </NavLink>
            <NavLink to={BASKET_ROUTE}>
                <img src={plus} alt="plus" />
            </NavLink>
            <img src={comment} alt="comment" />
            <NavLink to={LOGIN_ROUTE}>
                <img src={user} alt="user" />
            </NavLink>
        </div>
    )
}


export default Footer;

