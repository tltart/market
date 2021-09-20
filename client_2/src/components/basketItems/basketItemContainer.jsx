import React from 'react';
import { connect } from 'react-redux';
import BasketItem from './basketItem';
import { useEffect } from 'react';
import { AddGoodBasket, RemoveGoodBasket } from '../../store/goodsReducer'


let mapStateToProps = (state) => {
    return {
        offers: state.goods.offers
    }
}



const BasketItemContainer = ({ offers, AddGoodBasket, RemoveGoodBasket }) => {

    const storeGet = () => {
        if (!offers.length) {
            if (localStorage.length) {
                for (let i = 0; i < localStorage.length; i++) {
                    let key = localStorage.key(i);
                    AddGoodBasket(JSON.parse(localStorage.getItem(key)));
                }    
            }
        }
    }

    useEffect(() => {
        storeGet()
    }, [offers]);


    const removeItem = (id) => {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (JSON.parse(localStorage.getItem(key)).id == id) {
                RemoveGoodBasket(id);
                localStorage.removeItem(key);
                window.location.href = '';
            }
        }
    }

    console.log("Render Basket Container");

    return (
        <div>
            {offers && offers.map(offer => <BasketItem key={offer.id} offer={offer} removeItem={removeItem} price_total={offer.price * offer.count} />)}
        </div>
    )

}

export default connect(mapStateToProps, { AddGoodBasket, RemoveGoodBasket })(BasketItemContainer)