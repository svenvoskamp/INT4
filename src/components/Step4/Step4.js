import React from "react";
import Type from "../../components/Type/Type";
import { useStores } from "../../hooks/index";
import style from "./step4.module.css"

const Step4 = ({type, setType, setCurrentIndex}) => {
  const {typeStore} = useStores();
  const handleClick = () => {
    if(type !== "" ){
      setCurrentIndex(4)
    }
  }

  return (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Wat voor type <span className={style.title_span}>huwelijkspaar</span> waren jullie in ...</h1>
          <h2 className={style.subtitle}>De bestemming zal voor ons als leidraad dienen om de herbeleving van jullie huwelijksreis te creeëren.</h2>
        </div>
        <div className={style.content_images}>
          {typeStore.types.map(type => (
              <Type type = {type} key = {type.id} setType = {setType}/>
            ))}
        </div>
        <div className={style.button_container}>
          <button className={style.confirm} onClick = {handleClick}>That's us</button>
        </div>
      </div>
    </>
  );
}

export default Step4;
