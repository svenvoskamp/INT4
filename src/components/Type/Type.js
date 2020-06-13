import React from "react";
import PropTypes from "prop-types";
import style from "./type.module.css";

const Type = ({type, setType}) => {

  return (
    <div className={style.option}>
      <img src={type.img} width="400" height="400" alt = {type.type}/>
      <label htmlFor = {type.type}>
        <p className={style.option_text}>{type.type}</p>
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
