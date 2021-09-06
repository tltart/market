import React from 'react'
import { connect } from 'react-redux'
import Good from '../components/Good/good'
import c from './goods.module.css'
import { useState } from 'react'
import SelectMenu from '../components/SelectMenu/selectMenu'
import { GoodActive, AddGoodBasket } from '../store/goodsReducer'
import GoodCardContainer from '../components/Modal/GoodCard/goodCardContainer'
import Footer from '../components/common/Footer/footer'


let mapStateToProps = (state) => {
    return {
        goods: state.goods.goods,
        activeGood: state.goods.activeGood,
        offers: state.goods.offers,
    }
}

const GoodsPage = ({ goods, activeGood, GoodActive, AddGoodBasket, offers }) => {

    let [product, setProduct] = useState();
    let [taste, setTaste] = useState('default');
    let [selectValue, setSelectValue] = useState('default');

    const opt = goods.map(e => ({ value: e.name, label: e.name }));

    const click = (e) => {
        e.stopPropagation();
        if (e.target.id) {
            GoodActive(e.target.id);
            document.body.style.overflow = 'hidden';
            return;
        }
        else {
            AddGoodBasket({ id: targetGood.name, taste: taste });
            GoodActive(null)
            console.log(offers);
            return;
        }
    }


    const targetGood = goods.filter(good => good.id == activeGood)[0]

    const handleChangeProduct = () => setProduct(product);
    const handleChangeTaste = () => setTaste(taste);

    return (
        <div className={c.super__main} onClick={() => { GoodActive(null); document.body.style.overflow = ''; }}>
            <div className={c.sel}>
                <h2>Выбрать категорию</h2>
                <SelectMenu value={product} onChange={handleChangeProduct} options={opt} placeholder={"Выбрать продукт"} />
            </div>
            <div>
                <h5>Есть в наличии</h5>
            </div>
            <div className={c.main}>
                {goods.map(good => <Good key={good.id} good={good} click={click} id={good.id} />)}
            </div>
            <div>
                <h5>Заказать</h5>
            </div>
            <div className={c.main}>
                {goods.map(good => <Good key={good.id} good={good} id={good.id} />)}
            </div>

            <GoodCardContainer good={targetGood} click={click} taste={taste} setTaste={setTaste} />

            <div className={c.menu__wrap}>
                <Footer />
            </div>
        </div>
    )
}


export default connect(mapStateToProps, { GoodActive, AddGoodBasket })(GoodsPage);