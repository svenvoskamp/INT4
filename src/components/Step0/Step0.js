import React from "react";
import { useObserver } from "mobx-react-lite";
import style from "./step0.module.css";


const Step0 = ({name1, name2, day, setDay, month, setMonth, year, setYear, setCurrentIndex}) => {

  const handleClick = () => {
    if(day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 2020 && year <= 2021 ){
      setCurrentIndex(2);
    }
  }





  return useObserver (() => (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>{name1} & {name2}, <span className={style.title_span}>wanneer</span> willen jullie langskomen?</h1>
          <h2 className={style.subtitle}>Wanneer is jullie jubileumsdatum?</h2>
        </div>
        <div className={style.content_media}>
          <video id = "counter" className={style.media_video} width="500" height = "500"  loop playsInline autoPlay muted>
            <source src="/assets/video/ring_diamond.webm" type="video/webm"/>
            <source src="/assets/video/ring_diamond.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className={style.container_inputs}>
          <div className={style.input}>
            <p className={style.name_text}>Dag <span className={style.text_italic}>(0-31)</span></p>
            <label htmlFor = "day">
              <input className={style.name_input} id = "day" type = "number" min = "1" max = "31" maxLength = "2" value = {day} name = "day" onChange={e => setDay(e.currentTarget.value)} required />
            </label>
          </div>
          <div className={style.input}>
            <p className={style.name_text}>Maand <span className={style.text_italic}>(0-12)</span></p>
            <label htmlFor = "month">
              <input className={style.name_input} id = "month" type = "number" min = "1" max = "12" maxLength = "2" value = {month} name = "month" onChange={e => setMonth(e.currentTarget.value)} required />
            </label>
          </div>
          <div className={style.input}>
            <p className={style.name_text}>Jaar <span className={style.text_italic}>(2020-2021)</span></p>
            <label htmlFor = "year">
              <input className={style.name_input} id = "year" type = "number" min = "2020" max = "2021" maxLength = "4" value = {year} name = "year" onChange={e => setYear(e.currentTarget.value)} required />
            </label>
          </div>
        </div>
        <div className={style.button_container}>
          <button className={style.confirm} onClick = {handleClick}>We kijken er naar uit!</button>
        </div>
      </div>
    </>
  )
  );
}

export default Step0;
