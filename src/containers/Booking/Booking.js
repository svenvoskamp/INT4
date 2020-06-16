import React from "react";
import { useStores } from "../../hooks/index";
import * as firebase from "firebase/app";
import 'firebase/storage';
import style from "./booking.module.css";
import { useHistory } from "react-router-dom";
import {ROUTES} from "../../consts/index";

const Booking = () => {
  const {uiStore, typeStore, countryStore}= useStores();
  const currentBooking = uiStore.currentBooking;
  const type = typeStore.getTypeById(currentBooking.typeId);
  const country = countryStore.getCountryById(currentBooking.countryId);
  console.log(currentBooking);
  const storageRef = firebase.storage().ref();
  const history = useHistory();

  const handleClick = () => {
    history.push(ROUTES.home)
  }

  //RESIZE IMG CODE:
  /* let n = 4;
  const extension = currentBooking.img.substring(currentBooking.img.length - n);
  const newImage = currentBooking.img.slice(0, -4);
  console.log(newImage);
  console.log(extension);

  storageRef.child('images/' + newImage + '_400x300' + extension).getDownloadURL().then(function(url){
    console.log(url);
    var img = document.getElementById('img');
    img.src = url;
  });
  */

  /*
  storageRef.child('images/' + currentBooking.img).getDownloadURL().then(function(url){
    console.log(url);
    var img = document.getElementById('img');
    img.src = url;
  });
  */

  return (
    <div className={style.booking}>
      <div className={style.booking_header}>
        <div className={style.container_back}>
          <button className={style.back} onClick = {handleClick}>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6L2.25 6" stroke="#D52F4F" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.25 11L0.999999 6L7.25 1" stroke="#D52F4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Reservatie voor jullie <span className={style.title_span}>{currentBooking.count}-jarige</span> jubileum.</h1>
          <h2 className={style.subtitle}>{currentBooking.name1} en {currentBooking.name2} deze reservatie hebben jullie vastgelegd. Wij kijken er alvast naar uit!</h2>
        </div>
        <div className={style.content_input}>
          <div className={style.input_media}>
            <video className={style.media_video} width="400" height = "400"  loop autoPlay muted>
              <source src="../../assets/video/woman.webm" type="video/webm"/>
              <source src="../../assets/video/woman.mp4" type="video/mp4"/>
            </video>
            <p className={style.media_name}>{country.country}</p>
          </div>
          <div className={style.input_media}>
            <video className={style.media_video} width="400" height = "400"  loop autoPlay muted>
              <source src="../../assets/video/male.webm" type="video/webm"/>
              <source src="../../assets/video/male.mp4" type="video/mp4"/>
            </video>
            <p className={style.media_name}>{type.type}</p>
          </div>
          <div className={style.input_info}>
            <p className={style.info_title}>{currentBooking.name1} & {currentBooking.name2}</p>
            <div className={style.info_gegevens}>
            <div className={style.info_container}>
              <p className={style.info_text}>{currentBooking.email}</p>
              <p className={style.info_text}>{currentBooking.telephone}</p>
            </div>
            <div className={style.info_container}>
              <p className={style.info_text}>{currentBooking.city} {currentBooking.zip}</p>
              <p className={style.info_text}>{currentBooking.adress} {currentBooking.houseNumber} {currentBooking.busNumber}</p>
            </div>
            </div>
          </div>
        </div>
        <p className={style.content_text}>Bij vragen/problemen contacteer onze klantenservice.</p>
      </div>
    </div>
  );
};

export default Booking;
