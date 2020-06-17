import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import User from "../../models/User";
import { useHistory } from "react-router-dom";
import {ROUTES} from "../../consts/index";
import style from "./registerform.module.css"


const RegisterForm = () => {
  const {uiStore, userStore} = useStores();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassWord] = useState("");
  const [passwordAgain, setPassWordAgain] = useState("");
  const history = useHistory();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordAgainError, setPasswordAgainError] = useState("");
  const [formError, setFormError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setPasswordError("");
    setFormError("");
    setEmailError("");
    setPasswordAgainError("");
    setNameError("");
    if(name === ""){
      setNameError("Gelieve een naam in te vullen");
    }
    if(email === ""){
      setEmailError("Gelieve een email in te vullen");
    }
    if(password === ""){
      setPasswordError("Gelieve een wachtwoord in te vullen");
    }
    if(passwordAgain === ""){
      setPasswordAgainError("Gelieve een wachtwoord in te vullen");
    }
    if(password !== passwordAgain){
      setFormError("De ingegeven wachtwoorden komen niet overeen")
    }
    if(password === passwordAgain){
      const user = new User({
        name: name,
        store: userStore,
        email: email,
        password: password
      });
      const result = await uiStore.registerUser(user)
      if(result.uid){
        history.push(ROUTES.form);
      }else {
        setFormError("Er is iets misgegaan, probeer een sterker wachtwoord");
      }
    }
  };

  const handleClick = () => {
    history.push(ROUTES.login)
  }

  return (
    <>
      <div className="registratie">
        <div className={style.registratie_header}>
          <div className={style.container_back}>
            <button className={style.back} onClick = {handleClick}>
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6L2.25 6" stroke="#D52F4F" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.25 11L0.999999 6L7.25 1" stroke="#D52F4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.content_header}>
            <h1 className={style.title}><span className={style.title_span}>Registratie.</span></h1>
            <h2 className={style.subtitle}>Gelieve jullie gegevens in tevullen om te registreren.</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={style.input_container}>
              <p className={style.name_text}>Naam</p> <p>{nameError}</p>
              <input className={style.form_input}
                label="Name"
                name="name"
                type="name"
                placeholder="Vul je naam in"
                value={name}
                onChange={e => setName(e.currentTarget.value)}
                />
            </div>
            <div className={style.input_container}>
              <p className={style.name_text}>E-mail</p><p>{emailError}</p>
              <input className={style.form_input}
              label="Email"
              name="email"
              type="email"
              placeholder="Vul je email in"
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
            />
            </div>
            <div className={style.input_container}>
              <p className={style.name_text}>Wachtwoord</p><p>{passwordError}</p>
              <input className={style.form_input}
              label="Password"
              type="password"
              name="Password"
              placeholder="Vul je wachtwoord"
              value={password}
              onChange={e => setPassWord(e.currentTarget.value)}
            />
            </div>
            <div className={style.input_container}>
              <p className={style.name_text}>Herhaal wachtwoord</p><p>{passwordAgainError}</p>
              <input className={style.form_input}
              label="Passwordagain"
              type="password"
              name="Passwordagain"
              placeholder="Vul je wachtwoord opnieuw in"
              value={passwordAgain}
              onChange={e => setPassWordAgain(e.currentTarget.value)}
            />
            </div>
            <p>{formError}</p>
            <div className={style.button_container}>
              <input className={style.form_button} type="submit" value="Register"/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
