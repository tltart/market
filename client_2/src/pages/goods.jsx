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
import { SHOP_ROUTE, LOGIN_ROUTE, BASKET_ROUTE } from '../utils/consts'
import {GoodActive} from '../store/goodsReducer'
import GoodCard from '../components/Modal/GoodCard/goodCard'



let mapStateToProps = (state) => {
    return {
        goods: state.goods.goods,
        activeGood: state.goods.activeGood
    }
}

const GoodsPage = ({ goods, activeGood, GoodActive }) => {

    let [product, setProduct] = useState()
    let [taste, setTaste] = useState()

    const opt = goods.map(e => ({ value: e.name, label: e.name }))

    const click = (e) => {
        e.stopPropagation();
        GoodActive(e.target.id);
        document.body.style.overflow = 'hidden';
    }


    const targetGood = goods.filter(good => good.id == activeGood)[0]

    const handleChangeProduct = () => setProduct(product);
    const handleChangeTaste = () => setTaste(taste);

    return (
        <div className={c.super__main} onClick={()=>{GoodActive(null); document.body.style.overflow = '';}}>
            <div className={c.sel}>
                <h2>Выбрать категорию</h2>
                <SelectMenu value={product} onChange={handleChangeProduct} options={opt} placeholder={"Выбрать продукт"} />
            </div>
            <div>
                <h5>Есть в наличии</h5>
            </div>
            <div className={c.main}>
                {goods.map(good => <Good key={good.id} good={good} click={click} id={good.id}/>)}
            </div>
            <div>
                <h5>Заказать</h5>
            </div>
            <div className={c.main}>
                {goods.map(good => <Good key={good.id} good={good} id={good.id}/>)}
            </div>

            <GoodCard good={targetGood} value={taste} onChange={handleChangeTaste} />

            <div className={c.menu__wrap}>
                <div className={c.menu}>
                    <NavLink to='/' >
                        <img src={home} alt="home" />
                    </NavLink>
                    <NavLink to='/search'>
                        <img src={search} alt="search" />
                    </NavLink>
                    <NavLink to={SHOP_ROUTE}>
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


export default connect(mapStateToProps, {GoodActive})(GoodsPage);