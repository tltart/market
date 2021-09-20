import BasketItemContainer from '../components/basketItems/basketItemContainer';
import React from 'react';
import Footer from 'components/common/Footer/footer';
import c from './basket.module.css';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        offers: state.goods
    }
}

const BasketPage = ({ offers }) => {

    return (
        <div className={c.wrapper}>
            <h1>Корзина</h1>
            <BasketItemContainer />
            <h1>Итого: {offers.totalPrice}</h1>
            <Footer />
        </div>
    )
}

export default connect(mapStateToProps)(BasketPage);