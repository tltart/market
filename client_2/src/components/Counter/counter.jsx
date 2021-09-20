import React from 'react';
import c from './counter.module.css';

const Counter = ({minusCounter, plusCounter, count, change}) => {

    console.log("Render Counter Container");

    return (
        <div className={c.counter}>
            <div className={c.minus} onClick={minusCounter}></div>
            <div className={c.plus} onClick={plusCounter}></div>
            <input type="number" value={count} onChange={change} className={c.counter__window} placeholder={count}></input>
            
        </div>
    )
}

export default Counter