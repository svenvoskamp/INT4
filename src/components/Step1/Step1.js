import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts/index";

const Step1 = ({name1, name2, sex1, sex2, setName1, setName2, setSex1, setSex2, setCurrentIndex}) => {



  const history = useHistory();

  const handleClick = () => {
    if(name1 !== "" && name2 !== "" && sex1 !== "" && sex2 !== "" ){
      setCurrentIndex(1);
    }
  }
  const handleBack = () => {
    history.push(ROUTES.home);
  }

  return (
    <>
    <button onClick = {handleBack}>Terug</button>
    <h1>Om te beginnen, wat zijn jullie <span>voornamen?</span></h1>
    <h2>Deze data zal niet worden gepubliceerd.</h2>
    <label htmlFor="name1" >
    <span>Voornaam: </span>
      <input
        required
        id="name1"
        min="0"
        max="255"
        value={name1}
        type="text"
        placeholder="Alex"
        onChange={e => setName1(e.currentTarget.value)}
      />
    </label>
    <label htmlFor="name2" >
    <span>Voornaam: </span>
      <input
        required
        id="name2"
        min="0"
        max="255"
        value={name2}
        type="text"
        placeholder="Celine"
        onChange={e => setName2(e.currentTarget.value)}
      />
    </label>
    <label htmlFor = "male">
      <span>Male</span>
      <input
      id = "male"
      type = "radio"
      value = "male"
      name = "sex1"
      onClick={e => setSex1(e.currentTarget.value)}
      required
      />
    </label>
    <label htmlFor = "female">
      <span>Female</span>
      <input
      id = "female"
      type = "radio"
      value = "female"
      name = "sex1"
      onClick={e => setSex1(e.currentTarget.value)}
      required
      />
    </label>
    <label htmlFor = "male">
      <span>Male</span>
      <input
      id = "male"
      type = "radio"
      value = "male"
      name = "sex2"
      onClick={e => setSex2(e.currentTarget.value)}
      required
      />
    </label>
    <label htmlFor = "female">
      <span>Female</span>
      <input
      id = "female"
      type = "radio"
      value = "female"
      name = "sex2"
      onClick={e => setSex2(e.currentTarget.value)}
      required
      />
    </label>
    <div className = "geslacht1"></div>
    <div className = "geslacht2"></div>
    <button onClick = {handleClick}>Ja dit zijn wij!</button>
    </>
  );
}

export default Step1;
