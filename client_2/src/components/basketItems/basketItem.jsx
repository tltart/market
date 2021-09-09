import CounterContainer from '../Counter/counterContainer';
import React from 'react';
import c from './basketItem.module.css'



const BasketItem = ({ offer }) => {

    return (
        <div className={c.contain__item}>
            <h1>{offer.name}</h1>
            <div className={c.line__top}></div>
            <div className={c.wrapper__item}>
                <div className={c.img__wrapper}>
                    <img src={offer.img} alt={offer.name} />
                </div>
                <div className={c.data__wrapper}>
                    <div className={c.taste}>{offer.taste}</div>
                    <div className={c.price}>
                        <div className={c.counter__wrapper}>
                            <CounterContainer />
                            <h2>X</h2>
                            <h2>{offer.price}₽</h2>
                        </div>
                        <div className={c.offer__price}>
                            <span><h2>{offer.price} ₽</h2></span>
                        </div>
                    </div>
                    <div className={c.date}><h4>{offer.date}</h4></div>
                </div>
            </div>
        </div>
    )
}


export default BasketItem;