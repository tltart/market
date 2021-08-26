import React from 'react'
import c from './good.module.css'

const Good = ({good}) => {

    return (
        <div className={c.main}>
            <img src={good.img} alt={good.name} />
        </div>
    )
}

export default Good;
