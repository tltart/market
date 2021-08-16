import React from 'react'
import vidd from './vidd.webm'
import c from './header.module.css'


const Header = () => {

    return (
        <div className={c.wrapper__video}>
            <div className={c.video__opacity}></div>
            <video autoPlay muted loop>
                <source src={vidd} type='video/webm; codecs="vp8, vorbis"' />
            </video>
        </div>
    )
}

export default Header;