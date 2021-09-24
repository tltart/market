import React from 'react';
import { connect } from 'react-redux';
import Good from '../components/Good/good';
import c from './goods.module.css';
import { useState, useEffect } from 'react';
import SelectMenu from '../components/SelectMenu/selectMenu';
import { GoodActive } from '../store/goodsReducer';
import GoodCardContainer from '../components/Modal/GoodCard/goodCardContainer';
import Footer from '../components/common/Footer/footer';
import { useHistory } from 'react-router-dom';


let mapStateToProps = (state) => {
    return {
        goods: state.goods.goods,
        activeGood: state.goods.activeGood,
        names: state.goods.names,
    }
};

const GoodsPage = ({ goods, names, activeGood, GoodActive }) => {

    const history = useHistory();

    let [product, setProduct] = useState();

    useEffect(() => {
        hashCheck(window.location.hash);
    }, [window.location.hash]);

    const optionSelect = names.map(e => ({ value: e, label: e }));

    const hashCheck = (e) => {
        if (!e) {
            GoodActive(null);
            document.body.style.overflow = '';
        }
    };

    const rootClick = () => {
        GoodActive(null);
        document.body.style.overflow = '';
        window.location.replace('#', '');
    };

    const click = (e) => {
        e.stopPropagation();
        if (e.target.id) {
            GoodActive(e.target.id);
            document.body.style.overflow = 'hidden';
            window.location.hash = e.target.id;
            return
        }
        else {
            GoodActive(null);
            document.body.style.overflow = '';
            history.goBack();
        }

    };

    const targetGood = goods.filter(good => good.id == activeGood)[0];

    const handleChangeProduct = (product) => {
        product.label === "Все" ? setProduct('') : setProduct(product)
  
    }
    
    return (
        <div className={c.super__main} onClick={rootClick}>
            <div className={c.sel}>
                <h2>Выбрать категорию</h2>
                <SelectMenu product={product} handleChange={handleChangeProduct} options={optionSelect} />
            </div>
            <div>
                <h5>Есть в наличии</h5>
            </div>
            <div className={c.main}>
                {goods.filter(good => product ? product.label === good.name : true).
                    map(good => <Good key={good.id} good={good} click={click} id={good.id} />)}
            </div>
            {/* <div>
                <h5>Заказать</h5>
            </div>
            <div className={c.main}>
                {goods.map(good => <Good key={good.id} good={good} id={good.id} />)}
            </div> */}
            <GoodCardContainer good={targetGood} click={click} />

            <div className={c.menu__wrap}>
                <Footer />
            </div>
        </div>
    )
}


export default connect(mapStateToProps, { GoodActive })(GoodsPage);