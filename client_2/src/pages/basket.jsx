import BasketItemContainer from '../components/basketItems/basketItemContainer';
import React from 'react';
import Footer from 'components/common/Footer/footer';
import c from './basket.module.css';



const BasketPage = () =>{

    return(
        <div className={c.wrapper}>
            <h1>Корзина</h1>
            <BasketItemContainer />
            <h1>Итого:</h1>
            <Footer />
        </div>
    )
}

export default BasketPage;