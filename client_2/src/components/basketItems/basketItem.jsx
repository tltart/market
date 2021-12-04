import CounterContainer from '../Counter/counterContainer';
import React from 'react';
import c from './basketItem.module.css'
import moment from 'moment';



const BasketItem = ({ offer, removeItem, price_total}) => {
    return (
        <div className={c.contain__item}>
            <h1>{offer.name}</h1>
            <div className={c.close} onClick={() => removeItem(offer.id)}>
                <div className={c.close__icon}></div>
            </div>
            <div className={c.line__top}></div>
            <div className={c.wrapper__item}>
                <div className={c.img__wrapper}>
                    <img src={process.env.REACT_APP_API_URL + offer.img} alt={offer.name} />
                </div>
                <div className={c.data__wrapper}>
                    <div className={c.taste}>{offer.taste}</div>
                    <div className={c.price}>
                        <div className={c.counter__wrapper}>
                            <CounterContainer offer={offer} />
                            <h2>X</h2>
                            <h2>{offer.price}₽</h2>
                        </div>
                        <div className={c.offer__price}>
                            <span><h2>Цена: {price_total} ₽</h2></span>
                        </div>
                    </div>
                    <div className={c.date}><span><h4>Забрать: {moment(offer.date).format("DD-MM-YYYY")}</h4></span></div>
                </div>
            </div>
        </div>
    )
}


export default BasketItem;