import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts/index";
import { useObserver } from "mobx-react-lite";

const Step1 = ({name1, name2, sex1, sex2, setName1, setName2, setSex1, setSex2, video1, video2, setVideo1, setVideo2, video1_mp4, video2_mp4, setVideo1MP4, setVideo2MP4, setCurrentIndex}) => {



  const history = useHistory();
  console.log(sex1);
  console.log(sex2);
  useEffect (() => {
  const geslacht1 = document.querySelector(".video1");
  if(sex1 == "male"){
    if(geslacht1.currentSrc.includes("woman")){
    geslacht1.src ="../../assets/video/male.webm";
    geslacht1.play();
    }
  }
  if(sex1 == "female"){
    if(geslacht1.currentSrc.includes("male")){
    geslacht1.src ="../../assets/video/woman.webm";
    geslacht1.play();
    }
  }

  const geslacht2 = document.querySelector(".video2");
  if(sex2 == "female"){
    if(geslacht2.currentSrc.includes("male")){
    geslacht2.src ="../../assets/video/woman.webm";
    geslacht2.play();
    }
  }
  if(sex2 == "male"){
    if(geslacht2.currentSrc.includes("woman")){
    geslacht2.src ="../../assets/video/male.webm";
    geslacht2.play();
    }
  }
});


  const handleClick = () => {
    if(name1 !== "" && name2 !== "" && sex1 !== "" && sex2 !== "" ){
      setCurrentIndex(1);
    }
  }
  const handleBack = () => {
    history.push(ROUTES.home);
  }

  return useObserver (() => (
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

    <video className = "video1" width="400" height = "400"  loop autoPlay muted>
    <source src="../../assets/video/male.webm" type="video/webm"/>
    <source src="../../assets/video/male.mp4" type="video/mp4"/>
    </video>
    <video className = "video2" width="400" height = "400" loop autoPlay muted>
    <source src="../../assets/video/woman.webm" type="video/webm"/>
    <source src="../../assets/video/woman.mp4" type="video/mp4"/>
    </video>

    <button onClick = {handleClick}>Ja dit zijn wij!</button>
    </>
  )
  );
}

export default Step1;
