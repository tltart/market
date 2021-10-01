import React from 'react';
import c from './trackCard.module.css'
import moment from 'moment';
import { useState } from 'react';
import { useEffect } from 'react';

const TrackCard = ({ order }) => {

    let [day, setDay] = useState('...')

    const dayCheck = (order) => {
        if (order < 10) {
            if (order < 5) {
                if (order == 1) {
                    return setDay('день')
                }
            return setDay("дня");
            }
            return setDay("дней");
        }

        else if (order >= 10)
            if (order >= 20) {
                if (order >= 30) return dayCheck(order % 30)
                return dayCheck(order % 20)
            }
        return dayCheck(order.dayToEnd % 10)
    }

    useEffect(()=>{dayCheck(order.dayToEnd)},[])

    return (
        <div>
            <div id={c.card__track}>
                <hr />
                <span><h3>Название: {order.name}</h3></span>
                <span><h3>Вкус: {order.taste}</h3></span>
                <h3>Дата выдачи: {moment(order.date).format("DD-MM-YYYY")}</h3>
                {order.dayToEnd == 0 ? <h4>Выдача заказа: Завтра</h4> : <h4>Выдача через: {order.dayToEnd} {day}</h4>}
                <hr />
            </div>

        </div>
    )
}

export default TrackCard;