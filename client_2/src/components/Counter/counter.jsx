import React from 'react';
import c from './counter.module.css';

const Counter = () => {

    return (
        <div className={c.counter}>
            <input className={c.counter__window}></input>
        </div>
    )
}

export default Counter