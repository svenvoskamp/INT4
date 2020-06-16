import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import User from "../../models/User";
import { NavLink } from "react-router-dom";


const LoginForm = () => {
  const { uiStore, userStore } = useStores();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async e => {
    e.preventDefault();
      const result = await uiStore.signInWithPopUp();
      console.log(result);
    };

    const handleSubmit = async e => {
      e.preventDefault();
      const user = new User({
        name:"",
        store: userStore,
        email: email,
        password: password
      });
     const result = await uiStore.signInWithEmailAndPassword(user);
     console.log(result);
  };


  return (
    <>
    <div>
      <form onSubmit={handleGoogleLogin}>
        <input type="submit" value="Login with Google"/>
      </form>
    </div>
    <div>
    <form onSubmit={handleSubmit}>
      <input
        label="Email"
        name="email"
        type="email"
        placeholder="Vul hier je email in"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
      <input
        label="Password"
        type="password"
        name="Password"
        placeholder="Vul hier je wachtwoord in"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
      />
      <input type="submit" value="Login"/>
    </form>
  </div>

  <NavLink exact strict to= "/register">
    <p>Nog geen account? Registreren</p>
  </NavLink>
  </>
  );
};

export default LoginForm;
