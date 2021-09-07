import BasketItemContainer from '../components/basketItems/basketItemContainer';
import React from 'react';
import Footer from 'components/common/Footer/footer';




const BasketPage = () =>{

    return(
        <div>
            <h1>Корзина</h1>
            <BasketItemContainer />
            <Footer />
        </div>
    )
}

export default BasketPage;