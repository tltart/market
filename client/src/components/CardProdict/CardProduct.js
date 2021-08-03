import { React } from 'react'
import { useHistory } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../utils/consts';
import c from './cardProduct.module.css'

const Card = ({product}) => {

    const history = useHistory();
    return (
        <div className={c.main} onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}>
            <img src={product.img}></img>
            <div>
                <h4>{product.name}</h4>
                <hr/>
            </div>
            <div>
                <p>Цена: {product.price}</p>
            </div>
            <div>
                <button>В корзину</button>
            </div>
            
        </div>
    )
}

export default Card;