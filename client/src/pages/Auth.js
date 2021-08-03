import { React } from 'react';
import { Container, Form } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIIN_ROUTE;

    return (
        <Container className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">

                <h2 className="m-auto">Авторизация</h2>
                <Form >
                    <Form.Control className="mt-2" placeholder="Введите Email" />
                    <Form.Control className="mt-2" placeholder="Введите Пароль" />
                    <Row className="d-flex align-items-center justify-content-space-between">
                        <div>
                            Нет аккуанта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                        </div>
                        <Button variant={"outline-success"}>
                            Войти
                        </Button>
                    </Row>
                </Form>

            </Card>

        </Container>
    );
}

export default Auth;