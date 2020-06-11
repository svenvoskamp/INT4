import React from "react";
import style from "./step6.module.css"

const Step6 = ({img, setImg, setCurrentIndex}) => {

  const handleClick = () => {
    if(img !== "" ){
      setCurrentIndex(6);
    }
  }

  return (
    <>
      <div className={style.content}>
        <h1 className={style.title}>Jullie mooiste <span>herinnering!</span></h1>
        <h2 className={style.subtitle}>Upload jullie meeste memorable foto van jullie huwelijkreis.</h2>
        <label htmlFor = "img">
          <span>Stuur de leukste foto van jullie samen van jullie huwelijksreis!</span>
          <input
          type="file"
          id="img"
          name="filename"
          onChange = {e => setImg(e.target.files[0])}/>
          </label>
        <button className={style.confirm} onClick = {handleClick}>Dit was 'm</button>
      </div>
    </>
  );
}

export default Step6;
