import React from "react";
import { useStores } from "../../hooks/index";
import style from "./booking.module.css";
import { useHistory } from "react-router-dom";
import {ROUTES} from "../../consts/index";

const Booking = () => {
  const {uiStore, typeStore, countryStore}= useStores();
  const currentBooking = uiStore.currentBooking;
  const type = typeStore.getTypeById(currentBooking.typeId);
  const country = countryStore.getCountryById(currentBooking.countryId);
  const history = useHistory();

  const handleClick = () => {
    history.push(ROUTES.home)
  }

  return (
    <div className="booking">
      <div className={style.header}>
        <div className={style.container_back}>
          <button className={style.back} onClick = {handleClick}>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6L2.25 6" stroke="#D52F4F" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.25 11L0.999999 6L7.25 1" stroke="#D52F4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <svg className={style.nav_logo} width="64" height="45" viewBox="0 0 64 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.5 45L35.0714 33.7145L37.8571 30.9464L46.5 39.4637L58.4286 27.6104L46.5714 15.8991L17.3571 44.8581L0 27.6104L17 10.7177L28.3571 22.0741L25.5714 24.8423L17 16.254L5.57143 27.6104L17.3571 39.3218L46.5714 10.2918L64 27.6104L46.5 45Z" fill="#D53151"/>
            <path d="M13.3574 0L31.2146 19.235L50.5717 0H13.3574ZM33.0003 3.12303H42.9289L33.0003 12.989V3.12303ZM29.8574 3.12303V13.1309L20.5717 3.12303H29.8574Z" fill="#D53151"/>
          </svg>
      </div>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Reservatie voor jullie <span className={style.title_span}>{currentBooking.count}-jarige</span> jubileum.</h1>
          <h2 className={style.subtitle}>{currentBooking.name1} en {currentBooking.name2}, deze reservatie hebben jullie vastgelegd. Wij kijken er alvast naar uit!</h2>
        </div>
        <div className={style.content_input}>
          <div className={style.input_media}>
            <video className={style.media_video} width="400" height = "400"  loop autoPlay muted>
              <source src="../../assets/video/country_indonesia.webm" type="video/webm"/>
              <source src="../../assets/video/country_indonesia.mp4" type="video/mp4"/>
            </video>
            <p className={style.media_name}>{country.country}</p>
          </div>
          <div className={style.input_media}>
            {type.type === "Ontspanning" &&
            <video className={style.media_video} width="400" height = "400"  loop autoPlay playsInline muted>
              <source src="../../assets/video/type_relax.webm" type="video/webm"/>
              <source src="../../assets/video/type_relax.mp4" type="video/mp4"/>
            </video>
            }
            {type.type === "Avontuurlijk" &&
            <video className={style.media_video} width="400" height = "400"  loop autoPlay playsInline muted>
              <source src="../../assets/video/type_adventure.webm" type="video/webm"/>
              <source src="../../assets/video/type_adventure.mp4" type="video/mp4"/>
          </video>
            }
            {type.type === "Cultuur" &&
            <video className={style.media_video} width="400" height = "400"  loop autoPlay playsInline muted>
              <source src="../../assets/video/type_culture.webm" type="video/webm"/>
              <source src="../../assets/video/type_culture.mp4" type="video/mp4"/>
          </video>
            }
            <p className={style.media_name}>{type.type}</p>
          </div>
        </div>
        <p className={style.content_text}>Bij vragen/problemen contacteer onze klantenservice.</p>
      </div>
    </div>
  );
};

export default Booking;
