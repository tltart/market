import Footer from '../components/common/Footer/footer';
import React from 'react'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { GetOrder } from '../store/orderReducer';
import TrackCard from '../components/trackCard/trackCard';


const mapStateToProps = (state) => {
    return {
        orders: state.orders.orders,
    }
}

const TrackPage = ({ orders, GetOrder }) => {

    // Нуен запрос на сервер. НЕ ЗАБУДЬ!!!! /////////////////////////////////////////////

    const storeGet = () => {
        if (!orders.length) {
            GetOrder();
        }
    }

    useEffect(() => {
        storeGet();
    }, [orders]);

    return (
        <div>
            <h2>Отслеживание заказов</h2>
            {orders.length ? 
                orders.map(item => <TrackCard key={item.id} order={item}/>)
                :
                <h2>
                    У вас нет заказов
                </h2>
        }
            <Footer />
        </div>
    )
}

export default connect(mapStateToProps, {GetOrder})(TrackPage);