import React from "react";
import PropTypes from "prop-types";
import style from "./country.module.css";

const Country = ({country, setCountry}) => {

  return (
    <div className={style.option}>
      <label htmlFor = {country.id}>
        <img src={country.img} width="400" height="400" alt={country.id} />
        <input className={style.checkbox_country} id = {country.id} type = "radio" value = {country.id} name = "country" onClick={e => setCountry(e.currentTarget.value)} required />
        <p className={style.option_text}>{country.country}</p>
      </label>
    </div>
  );
}

Country.propTypes = {
  country: PropTypes.object.isRequired,
}

export default Country;
