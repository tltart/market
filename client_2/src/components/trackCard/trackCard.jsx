import React from 'react';
import c from './trackCard.module.css'

const TrackCard = ({ order }) => {

    return (
        <div>
            <div id={c.card__track}>
                <hr />
                <span><h3>Название: {order.name}</h3></span>
                <span><h3>Вкус: {order.taste}</h3></span>
                <span><h3>Дата: {order.date}</h3><h4>Осталось: </h4></span>
                
                <hr />
            </div>

        </div>
    )
}

export default TrackCard;