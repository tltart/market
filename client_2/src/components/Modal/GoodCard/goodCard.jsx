import React from 'react';
import c from './goodCard.module.css';
import Select from 'react-select';
import Calendar, { registerLocale } from 'react-datepicker';
import ru from "date-fns/locale/ru";
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import CustomSelect from '../../SelectMenu/customSelect/customSelect';
import iconBasket from '../../../assets/icons/selection.json';
import IcomoonReact, { iconList } from "icomoon-react";



registerLocale("ru", ru);


const GoodCard = ({ good, onChange, value }) => {

    const [data, setData] = useState(null);
    const isWeekday = (data) => {
        const day = setData(data);
        return day !== 0 && day !== 6;
    };


    const formHandle = (data) => {
        data.preventDefault();
        console.log(data)
    }

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
                                <form onSubmit={formHandle}>
                                    <div className={c.footer_wrapper}>
                                        <div className={c.option__wrapper}>

                                            <div className={c.select__wrap}>
                                                <CustomSelect />
                                            </div>
                                            <div className={c.calendar}>
                                                <Calendar
                                                    locale="ru"
                                                    filterDate={d => {
                                                        return new Date() < d;
                                                    }}
                                                    placeholderText="Выбрать дату"
                                                    selected={data}
                                                    onChange={(e) => setData(e)}
                                                    dateFormat="dd/MM/yyyy"
                                                />
                                            </div>
                                        </div>
                                        <button className={c.card__button} type="submit">
                                            <IcomoonReact iconSet={iconBasket} color="#fff" size={40} icon="basket" />
                                            <br />
                                            В корзину
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default GoodCard;