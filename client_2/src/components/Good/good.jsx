import React from 'react'
import c from './good.module.css'

const Good = ({ good, id, click }) => {

    return (
        <div className={c.main}>
            <img src={good.img} id={id} alt={good.name} onClick={click} />
        </div>
    )
}

export default Good;
