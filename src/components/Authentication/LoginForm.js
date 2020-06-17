import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import User from "../../models/User";
import { NavLink } from "react-router-dom";
import style from "./loginform.module.css";
import {ROUTES} from "../../consts/index";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const { uiStore, userStore } = useStores();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const history = useHistory();

  const handleGoogleLogin = async e => {
    e.preventDefault();
      await uiStore.signInWithPopUp();
    };

    const handleSubmit = async e => {
      setPasswordError("");
      setFormError("");
      setEmailError("");
      if(password === ""){
        setPasswordError("Gelieve een wachtwoord in te vullen");
      }
      if(email === ""){
        setEmailError("Gelieve een wachtwoord in te vullen");
      }
      e.preventDefault();
      const user = new User({
        name:"",
        store: userStore,
        email: email,
        password: password
      });
     const result = await uiStore.signInWithEmailAndPassword(user);
     if(result === "auth/user-not-found" || "auth/invalid"){
       setFormError("De inloggegevens zijn onjuist");
     }
  };

  const handleClick = () => {
    history.push(ROUTES.home)
  }

  return (
    <>
      <div className="login">
        <div className={style.login_header}>
          <div className={style.container_back}>
            <button className={style.back} onClick = {handleClick} >
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6L2.25 6" stroke="#D52F4F" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.25 11L0.999999 6L7.25 1" stroke="#D52F4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.content_header}>
            <h1 className={style.title}>Jullie <span className={style.title_span}>account.</span></h1>
            <h2 className={style.subtitle}>Zouden jullie even kunnen inloggen om de ervaring te personaliseren.</h2>
          </div>
          <div className={style.login_methods}>
            <div>
              <form className={style.container_google} onSubmit={handleGoogleLogin}>
                <input className={style.button_google} type="submit" value="Login met Google"/>
              </form>
            </div>
            <p className={style.form_option}>OF</p>
            <div>
              <form onSubmit={handleSubmit}>
                <div className={style.input_container}>
                  <p className={style.name_text}>E-mail</p> <p className={style.form_error}>{emailError}</p>
                  <input  className={style.form_input}
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Vul hier je email in"
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                  />
                </div>
                <div className={style.input_container}>
                  <p className={style.name_text}>Wachtwoord</p> <p className={style.form_error}>{passwordError}</p>
                  <input className={style.form_input}
                    label="Password"
                    type="password"
                    name="Password"
                    placeholder="Vul hier je wachtwoord in"
                    value={password}
                    onChange={e => setPassword(e.currentTarget.value)}
                  />
                </div>
                <div className={style.button_container}>
                  <p className={style.form_error}>{formError}</p>
                  <input className={style.form_button} type="submit" value="Login"/>
                </div>
                <NavLink className={style.form_register} exact strict to= "/register">
                  <p className={style.register_text}>Nog geen account? <span className={style.register_bold}>Registreren</span> </p>
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
