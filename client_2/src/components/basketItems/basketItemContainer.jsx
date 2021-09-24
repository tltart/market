import React from 'react';
import BasketItem from './basketItem';



const BasketItemContainer = ({ offers, removeItem }) => {

    return (
        <div>
            {offers && offers.map(offer => <BasketItem key={offer.id} offer={offer} removeItem={removeItem} price_total={offer.totalPriceProduct} />)}
        </div>
    )

}

export default BasketItemContainer;