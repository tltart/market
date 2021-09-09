import React from 'react';
import Calendar from 'react-datepicker';
import { useState } from 'react'





const Cal = ({ input, meta, ...props }) => {
  let [calendarDatee, setCalendarDatee] = useState(null);
  
  return (
    <>
      <Calendar
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
          <p>{meta.error}</p>}
      </div>
    </>
  )
}

export default Cal;