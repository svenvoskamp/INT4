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
          <h1 className={style.title}>Snel eens <span className={style.title_span}>controleren!</span></h1>
          <h2 className={style.subtitle}>Deze informatie gaven jullie ons, klopt dit?</h2>
          <p className={style.subtitle}>{text}</p>
        </div>
        <div className={style.content_input}>
          <div className={style.input_media}>
            <video className={style.media_video} width="400" height = "400"  loop autoPlay playsInline muted>
              <source src="/assets/video/country_indonesia.webm" type="video/webm"/>
              <source src="/assets/video/country_indonesia.mp4" type="video/mp4"/>
            </video>
            <p className={style.media_name}>{selectedCountry.country}</p>
          </div>
          <div className={style.input_media}>
          {selectedType.type === "Ontspanning" &&
            <video className={style.media_video} width="400" height = "400"  loop playsInline autoPlay muted>
              <source src="../../assets/video/type_relax.webm" type="video/webm"/>
              <source src="../../assets/video/type_relax.mp4" type="video/mp4"/>
            </video>
            }
            {selectedType.type === "Avontuurlijk" &&
            <video className={style.media_video} width="400" height = "400"  loop playsInline autoPlay muted>
              <source src="../../assets/video/type_adventure.webm" type="video/webm"/>
              <source src="../../assets/video/type_adventure.mp4" type="video/mp4"/>
          </video>
            }
            {selectedType.type === "Cultuur" &&
            <video className={style.media_video} width="400" height = "400"  loop playsInline autoPlay muted>
              <source src="../../assets/video/type_culture.webm" type="video/webm"/>
              <source src="../../assets/video/type_culture.mp4" type="video/mp4"/>
          </video>
            }
            <p className={style.media_name}>{selectedType.type}</p>
          </div>
          <div className={style.input_info}>
            <p className={style.info_title}>{name1} & {name2}</p>
            <div className={style.info_gegevens}>
            <div className={style.info_container}>
              <p className={style.info_text}>{email}</p>
              <p className={style.info_text}>{telephone}</p>
            </div>
            <div className={style.info_container}>
              <p className={style.info_text}>{city} {zip}</p>
              <p className={style.info_text}>{adress} {houseNumber} {busNumber}</p>
            </div>
            </div>
          </div>
          <p className={style.input_control}>
            Wij zullen jullie reservatie bekijken en laten jullie spoedig iets weten!
            <br></br>
            Alvast bedankt namens het ‘Jubileum’ Team!
          </p>
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
