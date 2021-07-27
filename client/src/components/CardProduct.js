import { React } from 'react'
import { useHistory } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../utils/consts';

const Card = ({product}) => {

    const history = useHistory();
    return (
        <div className="row">
            <div className="col s12 m3" onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}>
                <div className="card">
                    <div className="card-image">
                        <img src={product.img} />
                        <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                        <p>{product.name}</p>
                    </div>
                    <div className="card-action" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <a href="#">Описание</a>
                        <p>{product.price} ₽</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;