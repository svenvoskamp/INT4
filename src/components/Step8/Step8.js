import React from "react";
import style from "./step8.module.css"

const Step8 = ({setCurrentIndex, text}) => {

  return (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Snel eens <span>controleren!</span></h1>
          <h2 className={style.subtitle}>Deze informatie gaven jullie ons, klopt dit?</h2>
          <p className={style.subtitle}>{text}</p>
        </div>
        <div className={style.content_input}>
          <div className={style.input_media}>
            <video className={style.media_video} width="400" height = "400"  loop autoPlay muted>
              <source src="../../assets/video/woman.webm" type="video/webm"/>
              <source src="../../assets/video/woman.mp4" type="video/mp4"/>
            </video>
            <p className={style.media_name}>Indonesië</p>
          </div>
          <div className={style.input_media}>
            <video className={style.media_video} width="400" height = "400"  loop autoPlay muted>
              <source src="../../assets/video/male.webm" type="video/webm"/>
              <source src="../../assets/video/male.mp4" type="video/mp4"/>
            </video>
            <p className={style.media_name}>Luie Ontspanners</p>
          </div>
          <div className={style.input_info}>
            <p className={style.info_title}>Lucas & Fien</p>
            <div className={style.info_container}>
              <p className={style.info_text}>alexander@gmail.com</p>
              <p className={style.info_text}>0474 08 10 45 63</p>
            </div>
            <div className={style.info_container}>
              <p className={style.info_text}>Brussel 1000</p>
              <p className={style.info_text}>Antwerpsesteen weg 14 (2A)</p>
            </div>
            <div className={style.info_container}>
              <p className={style.info_italic}>Bancontact</p>
            </div>
          </div>
        </div>
        {text === "" &&
        <div className={style.button_container}>
          <input className={style.confirm} type="submit" value="Verzend"/>
        </div>
        }
      </div>
    </>
  );
}

export default Step8;
