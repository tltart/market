import React from 'react'
import { connect } from 'react-redux'
import Good from '../components/Good/good'
import c from './goods.module.css'
import { useState } from 'react'
import SelectMenu from 'components/SelectMenu/selectMenu'



let mapStateToProps = (state) => {
    return {
        goods: state.goods
    }
}

const GoodsPage = ({ goods }) => {

    return (
        <>
            <SelectMenu goods={goods.goods} />
            <div className={c.main}>
                {goods.goods.map(good => <Good key={good.id} good={good} />)}
            </div>
        </>
    )
}


export default connect(mapStateToProps)(GoodsPage);