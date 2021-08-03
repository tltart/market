import { React, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ListProduct from '../components/ListProduct';
import TypeMenu from '../components/typeMenu';



const Shop = () => {

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeMenu />
                </Col>
                <Col md={9}>
                    <ListProduct />
                </Col>
            </Row>
        </Container>

    );
}

export default Shop;