import React from 'react'
import c from './good.module.css'

const Good = ({ good, id, click }) => {

    return (
        <div className={c.main}>
            <img src={process.env.REACT_APP_API_URL + good.img} id={id} alt={good.name} onClick={click} />
        </div>
    )
}

export default Good;
