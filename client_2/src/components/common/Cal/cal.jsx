import React from 'react';
import Calendar from 'react-datepicker';
import { useState } from 'react'
import c from './cal.module.css'




const Cal = ({ input, meta, ...props }) => {
  let [calendarDatee, setCalendarDatee] = useState(null);

  return (
    <div className={c.forma}>
      <Calendar
        {...input}
        {...props}
        filterDate={d => {
          return new Date() < d;
        }}
        placeholderText="Выбрать дату"
        selected={calendarDatee}
        onChange={e => setCalendarDatee(e)}
        dateFormat="dd/MM/yyyy"
      />
      <div>
        {meta.touched && meta.error &&
          <p className={c.error}>{meta.error}</p>}
      </div>
    </div>
  )
}

export default Cal;