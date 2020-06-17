import React, { useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import style from "./step2.module.css"

const Step2 = ({name1, name2, count, setCount, setCurrentIndex}) => {

  const handleClick = () => {
    if(count !== "" ){
      setCurrentIndex(2);
    }
  }

  useEffect (() => {
    const counter = document.getElementById("counter");
    if(count >= 0 && count <= 14){
      if(counter.currentSrc.includes("silver")){
      } else {
        counter.src ="/assets/video/ring_silver.webm";
        counter.onerror = function() {
          counter.src = "/assets/video/ring_silver.mp4";
        }
      }
    }
    if(count >= 15 && count <= 29){
      if(counter.currentSrc.includes("gold")){
      }else {
      counter.src ="/assets/video/ring_gold.webm";
      counter.onerror = function() {
        counter.src = "/assets/video/ring_gold.mp4";
      }
    }
  }
    if(count >= 29 && count <= 44){
      if(counter.currentSrc.includes("diamond")){
      }else{
      counter.src ="/assets/video/ring_diamond.webm";
      counter.onerror = function() {
        counter.src = "/assets/video/ring_diamond.mp4";
      }
    }
  }
    if(count >= 44 && count <= 60){
      if(counter.currentSrc.includes("pearl")){
      }else {
      counter.src ="/assets/video/ring_pearl.webm";
      counter.onerror = function() {
        counter.src = "/assets/video/ring_pearl.mp4";
      }
    }
  }
    counter.play();
    }
  );



  return useObserver (() => (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Let's go <span className={style.title_span}>{name1} & {name2}!</span></h1>
          <h2 className={style.subtitle}>Wanneer zijn jullie in het huwelijksbootje gestapt?</h2>
        </div>
        <div className={style.content_media}>
          <video id = "counter" className={style.media_video} width="500" height = "500"  loop playsInline autoPlay muted>
            <source src="/assets/video/ring_diamond.webm" type="video/webm"/>
            <source src="/assets/video/ring_diamond.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className={style.container_slider}>
          <div className={style.slider_placeholder}>
            <p>1 jaar</p>
            <p>60 jaar</p>
          </div>
          <label htmlFor = "count">
            <input className={style.slider}
            id = "count"
            type = "range"
            min = "1"
            max = "60"
            value = {count}
            name = "count"
            onChange={e => setCount(e.currentTarget.value)}
            required
            />
          </label>
          <div className={style.count_container}>
            <p className={style.slider_count}>{count} jaar</p>
          </div>
        </div>
        <div className={style.button_container}>
          <button className={style.confirm} onClick = {handleClick}>En we leefden nog lang en gelukkig</button>
        </div>
      </div>
    </>
  )
  );
}

export default Step2;
