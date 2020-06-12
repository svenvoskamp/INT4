import React from "react";
import PropTypes from "prop-types";


const Type = ({type, setType}) => {


  return (
    <div>
      <img src={type.img} width="400" height="400"/>
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
    </div>
  );
}

Type.propTypes = {
  type: PropTypes.object.isRequired,
}

export default Type;
