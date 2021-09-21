import React from 'react';
import c from './goodCard.module.css';
import cc from '../../SelectMenu/customSelect/customSelect.module.css'
import Calendar, { registerLocale } from 'react-datepicker';
import ru from "date-fns/locale/ru";
import 'react-datepicker/dist/react-datepicker.css'
import CustomSelect from '../../SelectMenu/customSelect/customSelect';
import iconBasket from '../../../assets/icons/selection.json';
import IcomoonReact from "icomoon-react";

registerLocale("ru", ru);

const GoodCard = ({ good, setCalendarDate, calendarDate, selectHandle, selectValue, formHandle, warning }) => {

    return (
        <div className={!good ? `${c.card__wrap}` : `${c.card__wrap} ${c.active}`}>

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
                                <div className={c.footer_wrapper}>
                                    <div className={c.option__wrapper}>
                                        <div className={warning !== 'warning__taste' ? `${c.select__wrap}` : `${c.select__wrap} ${cc.warning}`}>
                                            <CustomSelect changee={selectHandle} value={selectValue} />
                                        </div>
                                        <div className={warning !== "warning__date" ? `${c.calendar}` : `${c.calendar} ${c.warning}`}>
                                            <Calendar
                                                locale="ru"
                                                filterDate={d => {
                                                    return new Date() < d;
                                                }}
                                                placeholderText="Выбрать дату"
                                                selected={calendarDate}
                                                onChange={e=> setCalendarDate(e)}
                                                dateFormat="dd/MM/yyyy"
                                                disabledKeyboardNavigation
                                            />
                                        </div>
                                    </div>
                                    <button className={c.card__button} onClick={formHandle}>
                                        <IcomoonReact iconSet={iconBasket} color="#fff" size={40} icon="basket" />
                                        <br />
                                        В корзину
                                    </button>
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