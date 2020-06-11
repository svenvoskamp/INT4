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
        <h1 className={style.title}>Let's go <span>{name1} & {name2}!</span></h1>
        <h2 className={style.subtitle}>Wanneer zijn jullie in het huwelijksbootje gestapt?</h2>
        <label htmlFor = "count">
            <span>Marriage count: {count}</span>
            <input
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
        <button className={style.confirm} onClick = {handleClick}>En we leefden nog lang en gelukkig</button>
      </div>
    </>
  );
}

export default Step2;
