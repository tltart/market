import React from 'react'
import { connect } from 'react-redux'
import Good from '../components/Good/good'
import Select from 'react-select'
import c from './goods.module.css'
import { useState } from 'react'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

let mapStateToProps = (state) => {
    return {
        goods: state.goods
    }
}

const GoodsPage = ({ goods }) => {

    let [state, setState] = useState('Выбрать опцию')

    const handleChange = () => {
        setState(state);
        console.log(`Option selected:`);
    };
    return (
        <>
            <Select value={state} onChange={handleChange} options={options} />
            <div className={c.main}>
                {goods.goods.map(good => <Good key={good.id} good={good} />)}
            </div>
        </>
    )
}


export default connect(mapStateToProps)(GoodsPage);