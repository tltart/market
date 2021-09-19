import React from 'react';
import GoodCard from './goodCard';
import { AddGoodBasket } from '../../../store/goodsReducer';
import { connect } from 'react-redux';
import { useState } from 'react';
import moment from 'moment';


let mapStateToProps = (state) => {
    return {
        offers: state.goods.offers,
    }
}


const GoodCardContainer = ({ good, click, AddGoodBasket, offers }) => {

    let [taste, setTaste] = useState('default');
    let [calendarDate, setCalendarDate] = useState(null);
    let [warningDiv, setWarningDiv] = useState();

    const selectHandle = (e) => {
        setTaste(e.target.value);
    }

    const formHandle = (e) => {
        e.preventDefault();
        if (calendarDate && taste != 'default') {
            setCalendarDate(calendarDate);
            AddGoodBasket({ id: `${good.id}${taste}`, name: good.name, date: moment(calendarDate).format("DD-MM-YYYY"), taste: taste, img: good.img, count: 1 });
            click(e);
            setWarningDiv('');
            setTaste('default');
            setCalendarDate(null);
        }
        else if (!calendarDate) {
            setWarningDiv('warning__date');
        }
        else {
            setWarningDiv('warning__taste');
        }

    }

    return (
        <GoodCard selectHandle={selectHandle}
            calendarDate={calendarDate} good={good}
            setCalendarDate={setCalendarDate}
            selectValue={taste} formHandle={formHandle}
            warning={warningDiv} setWarning={setWarningDiv}
        />
    )
}



export default connect(mapStateToProps, { AddGoodBasket })(GoodCardContainer)