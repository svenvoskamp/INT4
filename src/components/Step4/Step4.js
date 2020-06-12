import React from "react";
import Country from "../../components/Country/Country";
import { useStores } from "../../hooks/index";
import style from "./step4.module.css"

const Step4 = ({country, setCountry, setCurrentIndex}) => {
  const { uiStore, typeStore, countryStore, bookingStore} = useStores();
  const handleClick = () => {
    if(country !== "" ){
      setCurrentIndex(4);
    }
  }
  return (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Wat typeert jullie als <span>huwelijkspaar.</span></h1>
          <h2 className={style.subtitle}>De bestemming zal voor ons als leidraad dienen om de herbeleving van jullie huwelijksreis te creeëren.</h2>
        </div>
        <div className={style.content_images}>
          {countryStore.countries.map(country => (
              <Country country = {country} key = {country.id} setCountry = {setCountry}/>
            ))}
        </div>
        <div>
        <button className={style.confirm} onClick = {handleClick}>En we leefden nog lang en gelukkig</button>
        </div>
      </div>
    </>
  );
}

export default Step4;
