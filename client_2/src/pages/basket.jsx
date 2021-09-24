import BasketItemContainer from '../components/basketItems/basketItemContainer';
import React from 'react';
import Footer from 'components/common/Footer/footer';
import c from './basket.module.css';
import { connect } from 'react-redux';
import { useState } from 'react';
import { RemoveGoodBasket, AddOfferFromStorage } from '../store/goodsReducer'
import { Ordering } from '../store/orderReducer'
import { useEffect } from 'react';

const mapStateToProps = (state) => {
    return {
        offers: state.goods.offers,
        totalPrice: state.goods.totalPrice,
        orders: state.orders.orders
    }
}

const BasketPage = ({ offers, totalPrice, Ordering, orders, AddOfferFromStorage, RemoveGoodBasket }) => {

    let [active, setActive] = useState(false)

    const buyOffer = (e) => {
        e.preventDefault();
        setActive(true);
        Ordering(offers);
    }

    const storeGet = () => {
        if (!offers.length) {
            if (localStorage.getItem('offer')) {
                let of = JSON.parse(localStorage.getItem('offer'));
                of.map(item => AddOfferFromStorage(item));
            }
        }
    }

    useEffect(() => {
        storeGet();
    }, [localStorage]);

    const removeItem = (id) => {
        // if (localStorage.getItem('offer')) {
        //     let of = JSON.parse(localStorage.getItem('offer'))
        //     of.filter((item) => item.id != id);
        //     localStorage.setItem('offer', of);
        //     RemoveGoodBasket(id);
        //     window.location.href = '';
        // }

    }

    return (
        <div className={c.wrapper}>
            <h1>Корзина</h1>
            <BasketItemContainer offers={offers} AddOfferFromStorage={AddOfferFromStorage}
                RemoveGoodBasket={RemoveGoodBasket}
                removeItem={removeItem}
            />
            {offers.length ?
                <div>
                    <h1 id={c.total__price}>Итого: {totalPrice} ₽</h1>
                    <div className={c.button__wrapper}><button className={c.basket__button} onClick={buyOffer}>Оформить заказ</button></div>
                </div>
                :
                <h2 className={c.empty__basket}>В корзине нет заказов</h2>
            }
            {active &&
                <div className={`${c.success__offers} ${c.active}`}>
                    <h2 className={c.success__card}>Ваш заказ отправлен</h2>
                </div>
            }
            <Footer />
        </div>
    )
}

export default connect(mapStateToProps, { Ordering, AddOfferFromStorage, RemoveGoodBasket })(BasketPage);