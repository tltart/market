import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../index'
import { ADMIN_ROUTE, LOGIIN_ROUTE, LOGOUT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

import Navbar from "react-bootstrap/Navbar";

import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink style={{ color: 'black', textDecoration: 'none' }} to={SHOP_ROUTE}>Мне вкусно!</NavLink>
                {user.isAuth ?
                    <Nav className="mк-auto">
                        <Nav.Link href={ADMIN_ROUTE}>Управление</Nav.Link>
                        <Nav.Link href={LOGIIN_ROUTE}>Выйти</Nav.Link>
                    </Nav>
                    :
                    <Nav className="mк-auto">
                        <Nav.Link href={LOGIIN_ROUTE}>Авторизация</Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar >
    );
});

export default NavBar;