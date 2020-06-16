import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import User from "../../models/User";
import { useHistory } from "react-router-dom";
import {ROUTES} from "../../consts/index";

const RegisterForm = () => {
  const {uiStore, userStore} = useStores();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassWord] = useState("");
  const [passwordAgain, setPassWordAgain] = useState("");
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    if(password === passwordAgain){
      const user = new User({
        name: name,
        store: userStore,
        email: email,
        password: password
      });
      console.log(user);
      const result = await uiStore.registerUser(user)
      if(result.uid){
        //gebruiker is correct geregestreerd
        console.log(result);
        history.push(ROUTES.form);
      }else {
        //registratie mislukt
        console.log(result);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          label="Name"
          name="name"
          type="name"
          placeholder="Vul je naam in"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
        <input
          label="Email"
          name="email"
          type="email"
          placeholder="Vul je email in"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        />
        <input
          label="Password"
          type="password"
          name="Password"
          placeholder="Vul je wachtwoord"
          value={password}
          onChange={e => setPassWord(e.currentTarget.value)}
        />
        <input
          label="Passwordagain"
          type="password"
          name="Passwordagain"
          placeholder="Vul je wachtwoord opnieuw in"
          value={passwordAgain}
          onChange={e => setPassWordAgain(e.currentTarget.value)}
        />
        <input type="submit" value="Register"/>
      </form>
    </div>
  );
};

export default RegisterForm;
