import React from "react";

import { useStores } from "../../hooks/index";


const RegisterForm = () => {
  const { uiStore } = useStores();

  const handleLogin = async e => {
    e.preventDefault();
      const result = await uiStore.signInWithPopUp();
      console.log(result);
    };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="submit" value="Login with Google"/>
      </form>
    </div>
  );
};

export default RegisterForm;
