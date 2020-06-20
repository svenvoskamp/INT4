import React from "react";
import style from "./progress.module.css";

const Progress = ({currentIndex}) => {

  return (
    <>
    <progress className={style.progressbar} id="progress" value={currentIndex * 12.5} max="100"></progress>
    </>
  );
}

export default Progress;
