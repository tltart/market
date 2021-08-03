import { React, useContext } from 'react';
import { observer } from 'mobx-react-lite'
import { Context } from '../index';
import Card from './CardProdict/CardProduct';

const ListProduct = observer(() => {
    const product = useContext(Context)
    return (
        <div style={{display:'flex', width:'100vw'}}>
            {product.product.products.map(p => <Card key={p.id} product={p}/>)}
        </div>
    )
})

export default ListProduct;

