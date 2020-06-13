import React from "react";
import style from "./step6.module.css"

const Step6 = ({img, setImg, setCurrentIndex}) => {

  const handleClick = () => {
    if(img !== "" ){
      setCurrentIndex(6);
    }
  }

  const handleInput = e => {
    if(e.target.files[0]){
      const img = document.getElementById("id_img");
      console.log(img);
      img.src = URL.createObjectURL(e.target.files[0]);
      img.onload = function() {
        URL.revokeObjectURL(img.src);
      }
    }
  }

  return (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Jullie mooiste <span>herinnering!</span></h1>
          <h2 className={style.subtitle}>Upload jullie meeste memorable foto van jullie huwelijkreis.</h2>
        </div>
        <label htmlFor = "img">
          <input className={style.input_image}
          type="file"
          id="img"
          name="filename"
          onChange = {e => {setImg(e.target.files[0]); handleInput(e)}}/>
          <div className={style.polaroid_container}>
            <img id = "id_img" className = {style.polaroid_image} src = "" alt = ""/>
            <img className={style.content_polaroid} src="/assets/images/polaroid.png" />
            <svg className={style.polaroid_add} width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="31.8505" y1="2.75311" x2="26.3944" y2="53.4604" stroke="#424242" stroke-width="5" stroke-linecap="round"/>
              <line x1="53.9256" y1="31.2787" x2="3.2183" y2="25.8226" stroke="#424242" stroke-width="5" stroke-linecap="round"/>
            </svg>
          </div>
        </label>
        <div className={style.button_container}>
          <button className={style.confirm} onClick = {handleClick}>Dit was 'm</button>
        </div>
      </div>
    </>
  );
}

export default Step6;
