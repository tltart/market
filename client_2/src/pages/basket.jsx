import BasketItemContainer from '../components/basketItems/basketItemContainer';
import React from 'react';
import Footer from 'components/common/Footer/footer';
import c from './basket.module.css';
import { connect } from 'react-redux';
import { useState } from 'react';
import { RemoveGoodBasket, AddGoodBasket } from '../store/goodsReducer';
import { getOffers, getTotalPrice } from '../store/selectors/goodSelector';
import { OrderSendThunk } from '../store/orderReducer'
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const mapStateToProps = (state) => {
    return {
        offers: getOffers(state),
        totalPrice: getTotalPrice(state)
    }
}

const BasketPage = ({ offers, totalPrice, OrderSendThunk, RemoveGoodBasket, AddGoodBasket }) => {

    let [active, setActive] = useState(false);

    let [activeError, setActiveError] = useState(false);
    let [messErr, setMessErr] = useState();

    const history = useHistory();

    const buyOffers = (e) => {
        e.preventDefault();


        OrderSendThunk(offers).then(() =>{
            console.log('====================================');
            console.log("lsmvlkfvmlfskvm,");
            console.log('====================================');
        }).catch(()=>{
            console.log('====================================');
            console.log("govnino");
            console.log('====================================');
        })
        //     .then(() => {
        //     console.log("lskvmslvmslvm");
        //     if (offers.length) {
        //         console.log("page");
        //         console.log(offers.length);
        //         setActiveError(true);
        //         setMessErr("Ошибка ебаная");
        //         setTimeout(() => {
        //             setActiveError(false);
        //             setMessErr(null);
        //         }, 1000)
        //     }

        //     else {
        //         console.log("Ну все ровненько");
        //         setActive(true);
        //         setTimeout(() => { history.push('/track') }, 1000);
        //     }
        // })



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
    }, [offers]);

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
            {activeError &&
                <div className={`${c.err__offers} ${c.active}`}>
                    <h2 className={c.err__card}>{messErr}</h2>
                </div>
            }
            <Footer />
        </div>
    )
}

export default connect(mapStateToProps, { OrderSendThunk, RemoveGoodBasket, AddGoodBasket })(BasketPage);