import React from "react";
import style from "./step8.module.css"
import { useStores } from "../../hooks/index";

const Step8 = ({setCurrentIndex, day, month, text, name1, name2, email, adress, telephone, busNumber, houseNumber, zip, city, country, type}) => {
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
            <p className={style.info_title}>{day} - {month} - 2020</p>
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
          <div className={style.halo_team}>
            <svg width="39" height="27" viewBox="0 0 39 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.3359 26.9997L21.3717 20.2284L23.0692 18.5675L28.3359 23.678L35.6049 16.566L28.3795 9.53916L10.577 26.9146L0 16.566L10.3594 6.43033L17.2801 13.2442L15.5826 14.9051L10.3594 9.75209L3.39509 16.566L10.577 23.5928L28.3795 6.1748L39 16.566L28.3359 26.9997Z" fill="#D52F4F"/>
              <path d="M8.13965 0L19.0213 11.541L30.8171 0H8.13965ZM20.1095 1.87382H26.1597L20.1095 7.79337V1.87382ZM18.1943 1.87382V7.87855L12.5359 1.87382H18.1943Z" fill="#D52F4F"/>
            </svg>
            <p className={style.input_control}>
              Deze reservatie is onder voorbehoud en wij laten jullie spoedig iets weten!
              <br></br>
              Alvast bedankt namens het `Halo` Team!
            </p>
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
