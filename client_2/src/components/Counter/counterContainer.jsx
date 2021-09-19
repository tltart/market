import React from 'react';
import { connect } from 'react-redux';
import Counter from './counter';
import { GoodCount } from '../../store/goodsReducer'
import { useState } from 'react';
import { useEffect } from 'react';


let mapStateToProps = (state) => {
    return {
        offers: state.goods.offers
    }
}

const CounterContainer = ({offer, GoodCount}) => {

    let [count, setCount] = useState(offer.count);

    const change = (e) => {
        e.preventDefault();
        setCount(e.target.value)
    }

    const plusCounter = (e) => {
        console.log("pluss");
        setCount(count+1)
        GoodCount({count: count, id: offer.id});
    }
    const minusCounter = (e) => {
        console.log("minus");
        setCount(count-1)
        GoodCount(count, offer.id);
    }


    return <Counter minusCounter={minusCounter} plusCounter={plusCounter} count={count} change={change} />
}

export default connect(mapStateToProps, { GoodCount })(CounterContainer)