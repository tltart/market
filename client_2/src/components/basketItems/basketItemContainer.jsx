import React from 'react';
import {connect} from 'react-redux';
import BasketItem from './basketItem';



let mapStateToProps = (state) =>{
    return {
        offers: state.goods.offers,
    }
}

const BasketItemContainer = ({offers}) => {

    return(
        <div>
            {offers && offers.map(offer=> <BasketItem key={offer.id} offer={offer} />)}
        </div>
    )

}

export default connect(mapStateToProps)(BasketItemContainer)