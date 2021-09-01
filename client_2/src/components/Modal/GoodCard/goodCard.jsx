import React from 'react';
import c from './goodCard.module.css';
import SelectMenu from 'components/SelectMenu/selectMenu';
import Calendar from 'react-calendar';
import { useState } from 'react'

const GoodCard = ({ good, onChange, value }) => {

    let opt = [];

    if (good) {
        opt = good.taste.map(e => ({ value: e, label: e }));
    }

    const [valuee, setValuee] = useState(new Date());

    return (
        <div className={!good ? `${c.card__wrap}` : `${c.card__wrap} ${c.active}`} >

            <div className={c.card}>
                <div>
                    {!good ?
                        <div></div>
                        :
                        <div className={c.modal} onClick={e => { e.stopPropagation() }}>
                            <img src={good.img} alt={good.name} />
                            <div className={c.content__wrap}>
                                <h2>{good.name}</h2>
                                <p>{good.description}</p>
                                <p>Вес: {good.weight}</p>
                                <h2>Цена: {good.price}</h2>
                                <div className={c.calendar}>
                                    <Calendar onChange={setValuee}
                                        value={valuee} />
                                </div>
                                <div className={c.select__wrap}>
                                    <SelectMenu value={value} onChange={onChange} options={opt} placeholder={"Выбрать вкус"} />
                                </div>
                                <button>В корзину</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default GoodCard;