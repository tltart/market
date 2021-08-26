import { Container } from '@material-ui/core'
import React from 'react'
import c from './header.module.css'

const Header = () => {

    return (
        <>
            <div className={c.wrap}>
                <h1>Мне вкусно!!!</h1>
            </div>
            <hr></hr>
        </>
    )
}

export default Header;