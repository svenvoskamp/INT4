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
        <button className={style.back} onClick = {handleBack}>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 6L2.25 6" stroke="#D52F4F" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.25 11L0.999999 6L7.25 1" stroke="#D52F4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>
      </div>
  );
}

export default Back;
