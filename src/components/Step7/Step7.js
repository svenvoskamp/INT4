import React from "react";


const Step7= ({firstName, setFirstName, setCurrentIndex}) => {

  const handleClick = () => {
    if(firstName !== "" ){
      setCurrentIndex(7);
    }
  }
  const handleBack = () => {
    setCurrentIndex(5);
  }

  return (
    <>
    <button onClick = {handleBack}>Terug</button>
    <label htmlFor="firstName" >
    <span>Voornaam:</span>
      <input
        required
        id="name1"
        min="0"
        max="255"
        value={firstName}
        type="text"
        placeholder="Alex"
        onChange={e => setFirstName(e.currentTarget.value)}
      />
    </label>
    <button onClick = {handleClick}>Dit was 'm</button>
    </>
  );
}

export default Step7;
