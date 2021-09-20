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

const CounterContainer = ({ offer, GoodCount }) => {

    let [count, setCount] = useState(offer.count);

    const change = (e) => {
        e.preventDefault();
        setCount(e.target.value);
        GoodCount({ count: count, id: offer.id });
    }

    useEffect(() => {
        GoodCount({ count: count, id: offer.id });
    }, [count])

    const plusCounter = (e) => {
        e.preventDefault();
        setCount(count + 1);

    }
    const minusCounter = (e) => {
        if (count > 1) {
            e.preventDefault();
            setCount(count - 1);
            return
        }
        alert("Значение не может быть меньше одного!!!");
    }

    console.log("Render Counter Container");

    return <Counter minusCounter={minusCounter} plusCounter={plusCounter} count={count} change={change} />
}

export default connect(mapStateToProps, { GoodCount })(CounterContainer)