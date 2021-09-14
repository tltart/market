import React from 'react';
import { connect } from 'react-redux';
import BasketItem from './basketItem';
import { RemoveGoodBasket } from '../../store/goodsReducer';
import { useEffect } from 'react';
import { useState } from 'react';



let mapStateToProps = (state) => {
    return {
        offers: state.goods.offers,
    }
}



const BasketItemContainer = ({ offers, RemoveGoodBasket }) => {

    let [loca, setLoca] = useState()

    
    useEffect(() => {

    })

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