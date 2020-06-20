import React from "react";
import PropTypes from "prop-types";
import style from "./country.module.css";

const Country = ({country, setCountry}) => {

  return (
    <div className={style.option}>
      <label className={style.option_label} htmlFor = {country.id}>
        <video className={style.option_video} width="400" height = "400"  loop autoPlay playsInline muted>
          <source src={country.webm} type="video/webm"/>
          <source src={country.mp4} type="video/mp4"/>
        </video>
        {country.country === "Italië" &&
        <input className={style.checkbox_country} disabled id = {country.id} type = "radio" value = {country.id} name = "country" onClick={e => setCountry(e.currentTarget.value)} required />
        }
          {country.country === "Mexico" &&
         <input className={style.checkbox_country} disabled id = {country.id} type = "radio" value = {country.id} name = "country" onClick={e => setCountry(e.currentTarget.value)} required />
      }
          {country.country === "Indonesië" &&
         <input className={style.checkbox_country}  id = {country.id} type = "radio" value = {country.id} name = "country" onClick={e => setCountry(e.currentTarget.value)} required />
        }
        <p className={style.option_text}>{country.country}{country.country !== "Indonesië" && <span className={style.text_italic}>(niet beschikbaar)</span> }</p>
      </label>
    </div>
  );
}

Country.propTypes = {
  country: PropTypes.object.isRequired,
}

export default Country;
