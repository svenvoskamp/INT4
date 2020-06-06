import React from "react";
import PropTypes from "prop-types";


const Type = ({type, setType}) => {


  return (
      <label htmlFor = {type.type}>
        <span>{type.type}</span>
        <input
        id = {type.id}
        type = "radio"
        value = {type.id}
        name = "type"
        onClick={e=> setType(e.currentTarget.value)}
        required
        />
    </label>
  );
}

Type.propTypes = {
  type: PropTypes.object.isRequired,
}

export default Type;
