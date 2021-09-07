import CounterContainer from '../Counter/counterContainer';
import React from 'react';
import c from './basketItem.module.css'



const BasketItem = ({ offer }) => {


    return (
        <div className={c.wrapper__item}>
            <div className={c.img__wrapper}>
                <img src={offer.img} alt={offer.name} />
            </div>
            <div className={c.data__wrapper}>
                <h2>{offer.name}</h2>
                <div className={c.taste}>{offer.taste}</div>
                <CounterContainer />
            </div>
        </div>
    )
}


export default BasketItem;