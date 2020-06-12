import React from "react";
import style from "./step2.module.css"

const Step2 = ({name1, name2, count, setCount, setCurrentIndex}) => {

  const handleClick = () => {
    if(count !== "" ){
      setCurrentIndex(2);
    }
  }

  return (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Let's go <span>{name1} & {name2}!</span></h1>
          <h2 className={style.subtitle}>Wanneer zijn jullie in het huwelijksbootje gestapt?</h2>
        </div>
        <div className={style.content_media}>
          <img src="/assets/images/silver_ring.png"/>
        </div>
        <div className={style.container_slider}>
          <div className={style.slider_placeholder}>
            <p>1 jaar</p>
            <p>80 jaar</p>
          </div>
          <label htmlFor = "count">
            <input className={style.slider}
            id = "count"
            type = "range"
            min = "1"
            max = "80"
            value = {count}
            name = "count"
            onChange={e => setCount(e.currentTarget.value)}
            required
            />
          </label>
          <div className={style.count_container}>
            <p className={style.slider_count}>{count}</p>
          </div>
        </div>
        <div>
          <button className={style.confirm} onClick = {handleClick}>En we leefden nog lang en gelukkig</button>
        </div>
      </div>
    </>
  );
}

export default Step2;
