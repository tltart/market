import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from '../index';

const TypeMenu = observer(() => {
    
    const product = useContext(Context);

    return (
        <ListGroup>
            {product.product.products.map(item=>
                <ListGroup.Item
                style={{cursor:'pointer'}}
                active={item.id === product.product.selectedProduct.id}
                onClick = {() => product.product.setSelectedProduct(item)} 
                key={item.id}> 
                    {item.name} 
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})


export default TypeMenu;