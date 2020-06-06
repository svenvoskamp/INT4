import React from "react";
import PropTypes from "prop-types";

const Country = ({country, setCountry}) => {

  return (
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
  );
}

Country.propTypes = {
  country: PropTypes.object.isRequired,
}

export default Country;
