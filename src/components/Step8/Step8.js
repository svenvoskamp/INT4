import React from "react";

const Step8 = ({setCurrentIndex}) => {

  const handleBack = () => {
    setCurrentIndex(6);
  }

  return (
    <>
    <button onClick = {handleBack}>Terug</button>
    <input type="submit" value="Verzend"/>
    </>
  );
}

export default Step8;
