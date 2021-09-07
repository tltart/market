import React from 'react';
import { connect } from 'react-redux';
import Counter from './counter'


let mapStateToProps = (state) => {
    return{
        offers
    }
}

const CounterContainer = () => {

    return(
        <div>
            <Counter />
        </div>
    )
}

export default connect()(CounterContainer)