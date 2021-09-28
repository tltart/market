import Footer from '../components/common/Footer/footer';
import React from 'react'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { GetOrder, GetTimeToEnd } from '../store/orderReducer';
import TrackCard from '../components/trackCard/trackCard';
import c from './track.module.css'
import moment from 'moment';
import { getOrders } from 'store/selectors/orderSelector';


const mapStateToProps = (state) => {
    return {
        orders: getOrders(state),
    }
}

const TrackPage = ({ orders, GetOrder, GetTimeToEnd }) => {

    // Нуен запрос на сервер. НЕ ЗАБУДЬ!!!! /////////////////////////////////////////////

    // console.log(orders[0].date);


    const storeGet = () => {
        if (!orders.length) {
            GetOrder();
        }
    }

    useEffect(() => {
        storeGet();
        GetTimeToEnd();
    }, []);

    return (
        <div id={c.wrap__card}>
            <h2>Отслеживание заказов</h2>
            {orders.length ?
                orders.map(item => <TrackCard key={item.id} order={item} />)
                :
                <h2>
                    У вас нет заказов
                </h2>
            }
            <Footer />
        </div>
    )
}

export default connect(mapStateToProps, { GetOrder, GetTimeToEnd })(TrackPage);