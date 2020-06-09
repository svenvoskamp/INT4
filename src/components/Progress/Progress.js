import React from "react";

const Progress = ({currentIndex}) => {

  return (
    <>
    <progress id="progress" value={currentIndex * 14.3} max="100"></progress>
    </>
  );
}

export default Progress;
