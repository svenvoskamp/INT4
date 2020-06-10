import React from "react";

const Step8 = ({setCurrentIndex}) => {

  const handleBack = () => {
    setCurrentIndex(6);
  }

  return (
    <>
    <button onClick = {handleBack}>Terug</button>
    <h1>Snel eens <span>controleren!</span></h1>
    <h2>Deze informatie gaven jullie ons, klopt dit?</h2>
    <input type="submit" value="Verzend"/>
    </>
  );
}

export default Step8;
