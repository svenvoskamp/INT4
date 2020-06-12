import React from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts/index";
import style from "./back.module.css";

const Back = ({currentIndex, setCurrentIndex}) => {
    const history = useHistory();
    const handleBack = () => {
        if(currentIndex === 0){
            history.push(ROUTES.home);
        }
        else {
        setCurrentIndex(currentIndex - 1);
        }
    }

  return (
      <div className={style.container_back}>
        <button className={style.back} onClick = {handleBack}><img src="/assets/buttons/arrow_back.svg" /></button>
      </div>
  );
}

export default Back;
