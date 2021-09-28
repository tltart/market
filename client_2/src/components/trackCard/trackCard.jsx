import React from 'react';
import c from './trackCard.module.css'
import moment from 'moment';

const TrackCard = ({ order }) => {

    return (
        <div>
            <div id={c.card__track}>
                <hr />
                <span><h3>Название: {order.name}</h3></span>
                <span><h3>Вкус: {order.taste}</h3></span>
                <span><h3>Дата: {moment(order.date).format("DD-MM-YYYY")}</h3><h4>Выдача через: {order.dayToEnd && order.dayToEnd} </h4></span>
                
                <hr />
            </div>

        </div>
    )
}

export default TrackCard;