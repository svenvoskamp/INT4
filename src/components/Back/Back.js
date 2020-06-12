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
        <button className={style.back} onClick = {handleBack}>Back</button>
      </div>
  );
}

export default Back;
