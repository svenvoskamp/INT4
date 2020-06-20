import React from "react";
import { useObserver } from "mobx-react-lite";


const Step0 = ({name1, name2, day, setDay, month, setMonth, year, setYear, setCurrentIndex}) => {

  const handleClick = () => {
    if(day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1900 && year <= 2020 ){
      setCurrentIndex(2);
    }
  }





  return useObserver (() => (
    <>
        <div>
          <h1>{name1} & {name2}. Wanneer willen jullie langskomen?</h1>
          <h2>Wat is jullie huwelijksdatum?</h2>
        </div>
        <div>
        <label htmlFor = "day">
            <input
            id = "day"
            type = "number"
            min = "1"
            max = "31"
            maxLength = "2"
            value = {day}
            name = "day"
            onChange={e => setDay(e.currentTarget.value)}
            required
            />
          </label>
          <label htmlFor = "month">
            <input
            id = "month"
            type = "number"
            min = "1"
            max = "12"
            maxLength = "2"
            value = {month}
            name = "month"
            onChange={e => setMonth(e.currentTarget.value)}
            required
            />
          </label>
          <label htmlFor = "year">
            <input
            id = "year"
            type = "number"
            min = "1900"
            max = "2020"
            maxLength = "4"
            value = {year}
            name = "year"
            onChange={e => setYear(e.currentTarget.value)}
            required
            />
          </label>
        </div>
        <div>
          <button onClick = {handleClick}>We kijken er naar uit!</button>
      </div>
    </>
  )
  );
}

export default Step0;
