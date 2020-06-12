import React from "react";
import style from "./step8.module.css"

const Step8 = ({setCurrentIndex}) => {

  return (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Snel eens <span>controleren!</span></h1>
          <h2 className={style.subtitle}>Deze informatie gaven jullie ons, klopt dit?</h2>
        </div>
        <input className={style.confirm} type="submit" value="Verzend"/>
      </div>
    </>
  );
}

export default Step8;
