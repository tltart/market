import CounterContainer from '../Counter/counterContainer';
import React from 'react';
import c from './basketItem.module.css'



const BasketItem = ({ offer }) => {

    return (
        <>
            <h1 style={{marginLeft:"20px"}}>{offer.name}</h1>
            <div className={c.wrapper__item}>
                <div className={c.img__wrapper}>
                    <img src={offer.img} alt={offer.name} />
                </div>
                <div className={c.data__wrapper}>

                    <div className={c.taste}>{offer.taste}</div>
                    <div className={c.price}>
                        <CounterContainer />
                        <div className={c.equal}></div>
                        <div className={c.offer__price}><span><h2>{offer.price} ₽</h2></span></div>
                    </div>
                    <div className={c.date}><h4>{offer.date}</h4></div>
                </div>
            </div>
            <hr />
        </>
    )
}


export default BasketItem;