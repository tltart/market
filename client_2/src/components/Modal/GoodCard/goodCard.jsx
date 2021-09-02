import React from 'react';
import c from './goodCard.module.css';
import Select from 'react-select';
import Calendar, { registerLocale } from 'react-datepicker';
import ru from "date-fns/locale/ru";

import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
registerLocale("ru", ru);
const GoodCard = ({ good, onChange, value }) => {

    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          background: '#fff',
          borderColor: '#9e9e9e',
          minHeight: '20px',
          height: '20px',
          boxShadow: state.isFocused ? null : null,
        }),

        placeholder: (provided, state) => ({
            ...provided,
            top: ''
        }),

        valueContainer: (provided, state) => ({
          ...provided,
          height: '30px',
          padding: '0 6px'
        }),
    
        input: (provided, state) => ({
          ...provided,
          margin: '0px',
        }),
        indicatorSeparator: (provided, state) => ({
          ...provided,
          height: '18px',
          margin: '0'
        }),
        indicatorsContainer: (provided, state) => ({
          ...provided,
          height: '20px',
        }),
      };

    let opt = [];

    if (good) {
        opt = good.taste.map(e => ({ value: e, label: e }));
    }

    const [data, setData] = useState(null);
    const isWeekday = (data) => {
        const day = setData(data);
        return day !== 0 && day !== 6;
    };
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
                                <div className={c.select__wrap}>
                                <Select value={value} onChange={onChange} 
                                options={opt} placeholder="Выбрать вкус"
                                styles={customStyles}
                                        menuPortalTarget={document.body}
                                        menuPosition={'fixed'}
                                        
                                        />
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

                                    <button className={c.card__button}>В корзину</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default GoodCard;