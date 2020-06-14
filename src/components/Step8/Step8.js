import React from "react";
import style from "./step8.module.css"
import { useStores } from "../../hooks/index";

const Step8 = ({setCurrentIndex, text, name1, name2, email, adress, telephone, busNumber, houseNumber, zip, city, country, type}) => {
    const {typeStore, countryStore} = useStores();
    const selectedCountry = countryStore.getCountryById(country);
    const selectedType = typeStore.getTypeById(type);
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
            <p className={style.media_name}>{selectedCountry.country}</p>
          </div>
          <div className={style.input_media}>
            <video className={style.media_video} width="400" height = "400"  loop autoPlay muted>
              <source src="../../assets/video/male.webm" type="video/webm"/>
              <source src="../../assets/video/male.mp4" type="video/mp4"/>
            </video>
            <p className={style.media_name}>{selectedType.type}</p>
          </div>
          <div className={style.input_info}>
            <p className={style.info_title}>{name1} & {name2}</p>
            <div className={style.info_container}>
              <p className={style.info_text}>{email}</p>
              <p className={style.info_text}>{telephone}</p>
            </div>
            <div className={style.info_container}>
              <p className={style.info_text}>{city} {zip}</p>
              <p className={style.info_text}>{adress} {houseNumber} {busNumber}</p>
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
