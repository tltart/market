import React from 'react';
import c from './trackCard.module.css'
import moment from 'moment';
import { useState } from 'react';
import { useEffect } from 'react';

const TrackCard = ({ order }) => {

    let [day, setDay] = useState('...')

    const dayCheck = (or) => {
        console.log(or);
        if (or < 10) {
            if (or < 5) {
                if (or == 1) {
                    return setDay('день')
                }
                return setDay("дня");
            }
            return setDay("дней");
        }
        else if (or >= 10) {
            if (or >= 20) {
                if (or >= 30) {
                    return dayCheck(or % 30)
                }
                return dayCheck(or % 20)
            }
            return dayCheck(or % 10)
        }

    }

    useEffect(() => { dayCheck(order.dayToEnd) }, [])
    
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