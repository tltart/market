import React from 'react';
import { connect } from 'react-redux';
import Counter from './counter'


let mapStateToProps = (state) => {
    return{
        offers: state.goods.offers
    }
}

const CounterContainer = () => {

    return <Counter />
}

export default connect(mapStateToProps)(CounterContainer)