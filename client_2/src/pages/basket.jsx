import BasketItemContainer from '../components/basketItems/basketItemContainer';
import React from 'react';
import Footer from 'components/common/Footer/footer';
import c from './basket.module.css';
import { connect } from 'react-redux';
import { useState } from 'react';
import { RemoveGoodBasket, AddGoodBasket, RemoveOfferFromStorage } from '../store/goodsReducer'
import { Ordering } from '../store/orderReducer'
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const mapStateToProps = (state) => {
    return {
        offers: state.goods.offers,
        totalPrice: state.goods.totalPrice,
        orders: state.orders.orders
    }
}

const BasketPage = ({ offers, totalPrice, Ordering, orders, RemoveGoodBasket, AddGoodBasket, RemoveOfferFromStorage }) => {

    let [active, setActive] = useState(false)

    const history = useHistory();

    const buyOffers = (e) => {
        e.preventDefault();
        setActive(true);
        RemoveOfferFromStorage();
        Ordering(offers);
        setTimeout(()=>{history.push('/track')},1000);
    }

    const storeGet = () => {
        if (!offers.length) {
            if (localStorage.getItem('offer')) {
                let of = JSON.parse(localStorage.getItem('offer'));
                of.map(item => AddGoodBasket(item));
            }
        }
    }

    useEffect(() => {
        storeGet();
    }, [localStorage]);

    const removeItem = (id) => {
        RemoveGoodBasket(id);
        window.location.href = '';
    }


return (
    <div className={c.wrapper}>
        <h1>Корзина</h1>
        <BasketItemContainer offers={offers} removeItem={removeItem} />
        {offers.length ?
            <div>
                <h1 id={c.total__price}>Итого: {totalPrice} ₽</h1>
                <div className={c.button__wrapper}><button className={c.basket__button} 
                onClick={buyOffers}>Оформить заказ</button></div>
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

export default connect(mapStateToProps, { Ordering, RemoveGoodBasket, AddGoodBasket, RemoveOfferFromStorage })(BasketPage);