import React, { useState } from 'react';
import CreateProduct from '../components/modals/createProduct';
import { Button, Container } from 'react-bootstrap';

const Admin = () => {

    const [ ProductModal, setProductModal ] = useState(false);

    return (
        <div>
            <Container>
                <Button variant={"outline-success"} onClick={() => setProductModal(true)}>Добавить продукт</Button>
                <CreateProduct show={ProductModal} onHide={() => setProductModal(false)} />
            </Container>

        </div >
    );
}

export default Admin;