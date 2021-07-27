import { React, useContext } from 'react';
import { observer } from 'mobx-react-lite'
import { Context } from '../index';
import Card from '../components/CardProduct';

const ListProduct = observer(() => {
    const product = useContext(Context)
    return (
        <div>
            {product.product.products.map(p => <Card key={p.id} product={p}/>)}
            
        </div>
    )
})

export default ListProduct;

