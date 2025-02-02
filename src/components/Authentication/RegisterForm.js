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
        <div className={style.header}>
          <div className={style.container_back}>
            <button className={style.back} onClick = {handleClick}>
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6L2.25 6" stroke="#D52F4F" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.25 11L0.999999 6L7.25 1" stroke="#D52F4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <svg className={style.nav_logo} width="64" height="45" viewBox="0 0 64 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.5 45L35.0714 33.7145L37.8571 30.9464L46.5 39.4637L58.4286 27.6104L46.5714 15.8991L17.3571 44.8581L0 27.6104L17 10.7177L28.3571 22.0741L25.5714 24.8423L17 16.254L5.57143 27.6104L17.3571 39.3218L46.5714 10.2918L64 27.6104L46.5 45Z" fill="#D53151"/>
            <path d="M13.3574 0L31.2146 19.235L50.5717 0H13.3574ZM33.0003 3.12303H42.9289L33.0003 12.989V3.12303ZM29.8574 3.12303V13.1309L20.5717 3.12303H29.8574Z" fill="#D53151"/>
          </svg>
        </div>
        <div className={style.content}>
          <div className={style.content_header}>
            <h1 className={style.title}><span className={style.title_span}>Registratie.</span></h1>
            <h2 className={style.subtitle}>Gelieve jullie gegevens in te vullen om te registreren.</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={style.input_container}>
              <p className={style.name_text}>Naam</p> <p className={style.form_error}>{nameError}</p>
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
              <p className={style.name_text}>E-mail</p><p className={style.form_error}>{emailError}</p>
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
              <p className={style.name_text}>Wachtwoord</p><p className={style.form_error}>{passwordError}</p>
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
              <p className={style.name_text}>Herhaal wachtwoord</p><p className={style.form_error}>{passwordAgainError}</p>
              <input className={style.form_input}
              label="Passwordagain"
              type="password"
              name="Passwordagain"
              placeholder="Vul je wachtwoord opnieuw in"
              value={passwordAgain}
              onChange={e => setPassWordAgain(e.currentTarget.value)}
            />
            </div>
            <div className={style.button_container}>
              <p className={style.form_error}>{formError}</p>
              <input className={style.form_button} type="submit" value="Register"/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
