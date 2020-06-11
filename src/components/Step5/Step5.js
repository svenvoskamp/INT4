import React from "react";
import style from "./step5.module.css"

const Step5 = ({pants, name1, name2, setPants, setCurrentIndex}) => {

  const handleClick = () => {
    if(pants !== "" ){
      setCurrentIndex(5);
    }
  }

  return (
    <>
      <div className={style.content}>
        <h1 className={style.title}>Wie draagt de <span>broek...?</span></h1>
        <h2 className={style.subtitle}>Wie van jullie neemt het meest het voortouw in de relatie?</h2>
        <label htmlFor = "pants">
            <span>Wie heeft de broek aan? {name1} of {name2} </span>
            <input
            id = "pants"
            type = "range"
            min = "0"
            max = "2"
            value = {pants}
            name = "pants"
            onChange={e => setPants(e.currentTarget.value)}
            required
            />
          </label>
        <button className={style.confirm} onClick = {handleClick}>En we leefden nog lang en gelukkig</button>
      </div>
    </>
  );
}

export default Step5;
