import React, { useEffect } from "react";
import style from "./step5.module.css"

const Step5 = ({pants, sex1, sex2, name1, name2, setPants, setCurrentIndex}) => {

  const handleClick = () => {
    if(pants !== "" ){
      setCurrentIndex(5);
    }
  }

  useEffect (() => {
    const pants1 = document.getElementById("pants1");
    if(sex1 === "male"){
      pants1.src ="../../assets/video/character_man.webm";
      pants1.onerror = function() {
        pants1.src = "../../assets/video/character_man.mp4";
      }
    if(pants === "0" || pants === "1"){
      pants1.src ="../../assets/video/character_man.webm";
      pants1.onerror = function() {
        pants1.src = "../../assets/video/character_man.mp4";
      }
    }if(pants === "2") {
      pants1.src ="../../assets/video/character_man_naked.webm";
      pants1.onerror = function() {
        pants1.src = "../../assets/video/character_man_naked.mp4";
      }
    }
      pants1.play();
  } if(sex1 === "female"){
    pants1.src ="../../assets/video/character_woman.webm";
    pants1.onerror = function() {
      pants1.src = "../../assets/video/character_woman.mp4";
    }
    if(pants === "0" || pants === "1"){
      pants1.src ="../../assets/video/character_woman.webm";
      pants1.onerror = function() {
        pants1.src = "../../assets/video/character_woman.mp4";
      }
    }if(pants === "2") {
      pants1.src ="../../assets/video/character_woman_naked.webm";
      pants1.onerror = function() {
        pants1.src = "../../assets/video/character_woman_naked.mp4";
      }
    }
      pants1.play()
  }

      const pants2 = document.getElementById("pants2");
      if(sex2 === "female"){
        pants2.src ="../../assets/video/character_woman.webm";
        pants2.onerror = function() {
          pants2.src = "../../assets/video/character_woman.mp4";
        }
      if(pants === "1" || pants === "2"){
        pants2.src ="../../assets/video/character_woman.webm";
        pants2.onerror = function() {
          pants2.src = "../../assets/video/character_woman.mp4";
        }
      }if(pants === "0") {
        pants2.src ="../../assets/video/character_woman_naked.webm";
        pants2.onerror = function() {
          pants2.src = "../../assets/video/character_woman_naked.mp4";
        }
      }
        pants2.play();
    } if(sex2 === "male"){
      pants2.src ="../../assets/video/character_man.webm";
      pants2.onerror = function() {
        pants2.src = "../../assets/video/character_man.mp4";
      }
    if(pants === "1" || pants === "2"){
      pants2.src ="../../assets/video/character_man.webm";
      pants2.onerror = function() {
        pants2.src = "../../assets/video/character_man.mp4";
      }
    }if(pants === "0") {
      pants2.src ="../../assets/video/character_man_naked.webm";
      pants2.onerror = function() {
        pants2.src = "../../assets/video/character_man_naked.mp4";
      }
    }
      pants2.play()
  }
  });

  return (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Wie draagt de <span className={style.title_span}>broek</span>...</h1>
          <h2 className={style.subtitle}>Wie van jullie neemt het meest het voortouw in de relatie?</h2>
        </div>
        <div className={style.content_pants}>
          <video id="pants1" className = {style.pants_video}  width="400" height = "400" loop autoPlay playsInline muted>
            <source src="../../assets/video/character_man.webm" type="video/webm"/>
            <source src="../../assets/video/character_man.mp4" type="video/mp4"/>
          </video>
          <video id="pants2" className = {style.pants_video}  width="400" height = "400" loop autoPlay playsInline muted>
            <source src="../../assets/video/character_woman.webm" type="video/webm"/>
            <source src="../../assets/video/character_woman.mp4" type="video/mp4"/>
          </video>
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
