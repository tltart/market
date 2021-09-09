import React from 'react';
import Calendar from 'react-datepicker';
import {useState} from 'react'





const Cc = () => {
  let [calendarDatee, setCalendarDatee] = useState(null);

  return (
    <Calendar
      filterDate={d => {
        return new Date() < d;
      }}
      placeholderText="Выбрать дату"
      selected={calendarDatee}
      onChange={e => setCalendarDatee(e)}
      dateFormat="dd/MM/yyyy"
    />
  )
}

export default Cc;