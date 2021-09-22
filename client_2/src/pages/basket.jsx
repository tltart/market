import BasketItemContainer from '../components/basketItems/basketItemContainer';
import React from 'react';
import Footer from 'components/common/Footer/footer';
import c from './basket.module.css';
import { connect } from 'react-redux';
import { useState } from 'react'
import orderReducer, {Ordering} from '../store/orderReducer'

const mapStateToProps = (state) => {
    return {
        offers: state.goods.offers,
        totalPrice: state.goods.totalPrice,
        orders: state.orders.orders
    }
}

const BasketPage = ({ offers, totalPrice, Ordering, orders }) => {

    let [active, setActive] = useState(false)

    const buyOffer = (e) => {
        e.preventDefault();
        setActive(true);
        Ordering(offers);
    }

    return (
        <div className={c.wrapper}>
            <h1>Корзина</h1>
            <BasketItemContainer />
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

export default connect(mapStateToProps, {Ordering})(BasketPage);