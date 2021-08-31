import React from 'react'
import c from './good.module.css'

const Good = ({ good, click }) => {


    return (
        <div className={c.main}>
            <img src={good.img} alt={good.name} onClick={click} />
        </div>
    )
}

export default Good;
