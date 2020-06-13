import React from "react";
import Country from "../../components/Country/Country";
import { useStores } from "../../hooks/index";
import style from "./step3.module.css"

  const Step3 = ({country, setCountry, setCurrentIndex}) => {
    const {countryStore} = useStores();
    const handleClick = () => {
      if(country !== "" ){
        setCurrentIndex(3);
      }
    }

  return (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Welk land doet jullie denken aan jullie<span>huwelijksreis</span>?</h1>
          <h2 className={style.subtitle}>De bestemming zal voor ons als leidraad dienen om de herbeleving van jullie huwelijksreis te creeëren.</h2>
        </div>
        <div className={style.content_images}>
          {countryStore.countries.map(country => (
              <Country country = {country} key = {country.id} setCountry = {setCountry}/>
            ))}
        </div>
        <div className={style.button_container}>
          <button className={style.confirm} onClick = {handleClick}>En we leefden nog lang en gelukkig</button>
        </div>
      </div>
    </>
  );
}

export default Step3;
