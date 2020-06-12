import React from "react";
import PropTypes from "prop-types";

const Country = ({country, setCountry}) => {

  return (
    <div>
    <img src={country.img} width="400" height="400" />
      <label htmlFor = {country.country}>
        <span>{country.country}</span>
        <input
        id = {country.id}
        type = "radio"
        value = {country.id}
        name = "country"
        onClick={e => setCountry(e.currentTarget.value)}
        required
        />
      </label>
    </div>
  );
}

Country.propTypes = {
  country: PropTypes.object.isRequired,
}

export default Country;
