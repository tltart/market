import React from 'react';
import BasketItem from './basketItem';
import { v4 as uuid } from 'uuid'
import { useEffect } from 'react';



const BasketItemContainer = ({ offers, removeItem }) => {

    return (
        <div>
            {offers && offers.map(offer => <BasketItem key={offer.key} offer={offer} removeItem={removeItem} price_total={offer.totalPriceProduct} />)}
        </div>
    )

}

export default BasketItemContainer;