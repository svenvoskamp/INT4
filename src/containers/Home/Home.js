import React from "react";
import {NavLink, useHistory} from "react-router-dom";
import {ROUTES} from "../../consts";


const Landing = () => {

  return (
    <>
    <h1>Dit is de landingspagina </h1>
    <NavLink exact strict to="/form">
      <button>Ga naar het formulier</button>
    </NavLink>
    </>
  );
};

export default Landing;
