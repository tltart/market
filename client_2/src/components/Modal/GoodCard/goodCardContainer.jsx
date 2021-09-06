import React from 'react';
import GoodCard from './goodCard';
import moment from 'moment';
import { useState } from 'react';
import { connect } from 'react-redux';



const GoodCardContainer = ({ good, click, taste, setTaste }) => {

    let [calendarDate, setCalendarDate] = useState(null);

    const selectHandle = (e) => {
        setTaste(e.target.value);
    }

    const formHandle = (e) => {
        e.preventDefault();
        console.log(moment(calendarDate).format("DD-MM-YYYY"));
        console.log(taste);
        click(e);
    }

    return (
        <GoodCard selectHandle={selectHandle}
            calendarDate={calendarDate} good={good}
            setCalendarDate={setCalendarDate}
            selectValue={taste} formHandle={formHandle}
        />
    )
}



export default GoodCardContainer