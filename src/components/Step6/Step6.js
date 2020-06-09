import React from "react";


const Step6 = ({img, setImg, setCurrentIndex}) => {

  const handleClick = () => {
    if(img !== "" ){
      setCurrentIndex(6);
    }
  }
  const handleBack = () => {
    setCurrentIndex(4);
  }

  return (
    <>
    <button onClick = {handleBack}>Terug</button>
    <label htmlFor = "img">
       <span>Stuur de leukste foto van jullie samen van jullie huwelijksreis!</span>
       <input
       type="file"
       id="img"
       name="filename"
       onChange = {e => setImg(e.target.files[0])}/>
      </label>
    <button onClick = {handleClick}>Dit was 'm</button>
    </>
  );
}

export default Step6;
