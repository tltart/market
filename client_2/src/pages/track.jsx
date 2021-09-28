import Footer from '../components/common/Footer/footer';
import React from 'react'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { GetOrder } from '../store/orderReducer';
import TrackCard from '../components/trackCard/trackCard';
import c from './track.module.css'
import moment from 'moment';


const mapStateToProps = (state) => {
    return {
        orders: state.orders.orders,
    }
}

const TrackPage = ({ orders, GetOrder }) => {

    // Нуен запрос на сервер. НЕ ЗАБУДЬ!!!! /////////////////////////////////////////////

    // console.log(orders[0].date);


    const storeGet = () => {
        if (!orders.length) {
            GetOrder();
            var now = moment(new Date()); //todays date
            var end = moment(orders[0].date); // another date
            var duration = moment.duration(now.diff(end));
            var days = duration.asDays();
            console.log(days)
        }
    }

    useEffect(() => {
        storeGet();

    }, [orders]);

    return (
        <div id={c.wrap__card}>
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