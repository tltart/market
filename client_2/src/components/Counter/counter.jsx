import React from 'react';
import c from './counter.module.css';

const Counter = () => {

    return (
        <div className={c.counter}>
            <div className={c.minus}></div>
            <div className={c.plus}></div>
            <input type="number" className={c.counter__window} placeholder="1"></input>
            
        </div>
    )
}

export default Counter