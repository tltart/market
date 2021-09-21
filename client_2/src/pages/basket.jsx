import BasketItemContainer from '../components/basketItems/basketItemContainer';
import React from 'react';
import Footer from 'components/common/Footer/footer';
import c from './basket.module.css';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        offers: state.goods.offers,
        totalPrice: state.goods.totalPrice
    }
}

const BasketPage = ({ offers, totalPrice}) => {

    const buyOffer = (e) => {
        e.preventDefault();
        console.log("Ваш заказ отправлен в работу");
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
                <h2 className={c.out__offer}>В корзине нет заказов</h2>
            }
            <Footer />
        </div>
    )
}

export default connect(mapStateToProps)(BasketPage);