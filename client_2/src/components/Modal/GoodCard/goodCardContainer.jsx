import React from 'react';
import GoodCard from './goodCard';
import moment from 'moment';
import { useState } from 'react';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}



const GoodCardContainer = ({ good, click }) => {

    let [calendarDate, setCalendarDate] = useState(null);
    let [selectValue, setSelectValue] = useState('default');

    const selectHandle = (e) => {
        setSelectValue(e.target.value);
    }

    const formHandle = (e) => {
        e.preventDefault();
        console.log(moment(calendarDate).format("DD-MM-YYYY"));
        console.log(selectValue);
        click(e);
    }

    return (
        <GoodCard selectHandle={selectHandle}
            calendarDate={calendarDate} good={good}
            setCalendarDate={setCalendarDate}
            selectValue={selectValue} formHandle={formHandle}
        />
    )
}



export default connect(mapStateToProps, mapDispatchToProps)(GoodCardContainer)