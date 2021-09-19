import React from 'react';
import { connect } from 'react-redux';
import BasketItem from './basketItem';
import { RemoveGoodBasket, AddGoodBasket } from '../../store/goodsReducer';
import { useEffect } from 'react';
import { useState } from 'react';



let mapStateToProps = (state) => {
    return {
        offers: state.goods.offers,
    }
}



const BasketItemContainer = ({ offers, RemoveGoodBasket, AddGoodBasket }) => {

    const storeGet = () => {
        if (!offers.length) {
            if (localStorage.length) {
                console.log("Беру из localStorage");
                for (let i = 0; i < localStorage.length; i++) {
                    let key = localStorage.key(i);
                    AddGoodBasket(JSON.parse(localStorage.getItem(key)));
                }
            }
        }
    }

    useEffect(() => {
        storeGet()
    }, [localStorage]);

    const removeItem = (id) => {
        console.log(id);
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (JSON.parse(localStorage.getItem(key)).id == id) {
                console.log(id);
                RemoveGoodBasket(id);
                localStorage.removeItem(key);
                window.location.href = '';
            }
        }
    }

    return (
        <div>
            {offers && offers.map(offer => <BasketItem key={offer.id} offer={offer} removeItem={removeItem} />)}
        </div>
    )

}

export default connect(mapStateToProps, { RemoveGoodBasket, AddGoodBasket })(BasketItemContainer)