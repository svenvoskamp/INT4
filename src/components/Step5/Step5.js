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
        <div className={style.content_header}>
          <h1 className={style.title}>Wie draagt de <span>broek...?</span></h1>
          <h2 className={style.subtitle}>Wie van jullie neemt het meest het voortouw in de relatie?</h2>
        </div>
        <div className={style.container_slider}>
          <div className={style.slider_placeholder}>
            <p>{name1}</p>
            <p>50/50</p>
            <p>{name2}</p>
          </div>
          <label htmlFor = "pants">
            <input className={style.slider}
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
        </div>
        <div className={style.button_container}>
          <button className={style.confirm} onClick = {handleClick}>En we leefden nog lang en gelukkig</button>
        </div>
      </div>
    </>
  );
}

export default Step5;
