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

    const ll = [...Array()].map((_, i) => i)

    const storeGet = () => {
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            ll.push(JSON.parse(localStorage.getItem(key))); 
        }
    }

    useEffect(() => {
        storeGet()
    }, [offers])

    const removeItem = (id) => {
        RemoveGoodBasket(id)
    }
    return (
        <div>
            {ll && ll.map(ll => <BasketItem key={ll.good} offer={ll} removeItem={removeItem} />)}
        </div>
    )

}

export default connect(mapStateToProps, { RemoveGoodBasket })(BasketItemContainer)