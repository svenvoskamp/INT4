import React from "react";

const Step5 = ({pants, name1, name2, setPants, setCurrentIndex}) => {

  const handleClick = () => {
    if(pants !== "" ){
      setCurrentIndex(5);
    }
  }
  const handleBack = () => {
    setCurrentIndex(3);
  }

  return (
    <>
    <button onClick = {handleBack}>Terug</button>
    <label htmlFor = "pants">
        <span>Wie heeft de broek aan? {name1} of {name2} </span>
        <input
        id = "pants"
        type = "range"
        min = "0"
        max = "2"
        value = {pants}
        name = "pants"
        onChange={e => setPants(e.currentTarget.value)}
        required
        />
      </label>
    <button onClick = {handleClick}>En we leefden nog lang en gelukkig</button>
    </>
  );
}

export default Step5;
