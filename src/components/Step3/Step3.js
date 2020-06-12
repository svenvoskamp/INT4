import React from "react";
import Type from "../../components/Type/Type";
import { useStores } from "../../hooks/index";
import style from "./step3.module.css"

const Step3 = ({type, setType, setCurrentIndex}) => {
  const { uiStore, typeStore, countryStore, bookingStore} = useStores();
  const handleClick = () => {
    if(type !== "" ){
      setCurrentIndex(3)
    }
  }

  return (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Waar zijn jullie op <span>huwelijksreis</span>geweest?</h1>
          <h2 className={style.subtitle}>De bestemming zal voor ons als leidraad dienen om de herbeleving van jullie huwelijksreis te creeëren.</h2>
        </div>
        {typeStore.types.map(type => (
            <Type type = {type} key = {type.id} setType = {setType}/>
          ))}
        <button className={style.confirm} onClick = {handleClick}>En we leefden nog lang en gelukkig</button>
      </div>
    </>
  );
}

export default Step3;
