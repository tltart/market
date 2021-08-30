import React from 'react'
import { connect } from 'react-redux'
import Good from '../components/Good/good'
import c from './goods.module.css'
import { useState } from 'react'
import SelectMenu from '../components/SelectMenu/selectMenu'
import plus from '../assets/icons/plus.svg'
import comment from '../assets/icons/comment.svg'
import home from '../assets/icons/home.svg'
import search from '../assets/icons/search.svg'
import user from '../assets/icons/user.svg'
import { NavLink } from 'react-router-dom'
import { MAIN_ROUTE, LOGIN_ROUTE, BASKET_ROUTE, GOODS_ROUTE } from '../utils/consts'



let mapStateToProps = (state) => {
    return {
        goods: state.goods
    }
}


const GoodsPage = ({ goods }) => {

    let [state, setState] = useState()

    const opt = goods.goods.map(e => ({ value: e.name, label: e.name }))


    const handleChange = () => setState(state);

    return (
        <div className={c.super__main}>
            <div className={c.sel}>
                <h2>Выбрать категорию</h2>
                <SelectMenu value={state} onChange={handleChange} options={opt} placeholder={"Выбрать продукт"} />
            </div>
            <div>
                <h5>Есть в наличии</h5>
            </div>
            <div className={c.main}>
                {goods.goods.map(good => <Good key={good.id} good={good} />)}
            </div>
            <div>
                <h5>Заказать</h5>
            </div>
            <div className={c.main}>
                {goods.goods.map(good => <Good key={good.id} good={good} />)}
            </div>

            <div className={c.menu__wrap}>
                <div className={c.menu}>
                    <NavLink to='/' >
                        <img src={home} alt="home" />
                    </NavLink>
                    <NavLink to='/search'>
                        <img src={search} alt="search" />
                    </NavLink>
                    <NavLink to={GOODS_ROUTE}>
                        <img src={plus} alt="plus" />
                    </NavLink>

                    <img src={comment} alt="comment" />
                    <NavLink to={LOGIN_ROUTE}>
                        <img src={user} alt="user" />
                    </NavLink>

                </div>
            </div>
        </div>
    )
}


export default connect(mapStateToProps)(GoodsPage);