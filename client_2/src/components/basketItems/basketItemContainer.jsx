import React from 'react';
import { connect } from 'react-redux';
import BasketItem from './basketItem';
import { RemoveGoodBasket } from '../../store/goodsReducer';



let mapStateToProps = (state) => {
    return {
        offers: state.goods.offers,
    }
}



const BasketItemContainer = ({ offers, RemoveGoodBasket }) => {
    const removeItem = (id) => {
        RemoveGoodBasket(id)
    }
    return (
        <div>
            {offers && offers.map(offer => <BasketItem key={offer.id} offer={offer} removeItem={removeItem} />)}
        </div>
    )

}

export default connect(mapStateToProps, { RemoveGoodBasket })(BasketItemContainer)