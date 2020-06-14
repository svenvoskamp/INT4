import React from "react";
import PropTypes from "prop-types";
import style from "./type.module.css";

const Type = ({type, setType}) => {

  return (
    <div className={style.option}>
      <label className={style.option_label} htmlFor = {type.id}>
      <video className={style.option_video} width="400" height = "400"  loop autoPlay muted>
          <source src={type.img} type="video/mp4"/>
          <source src={type.img} type="video/mp4"/>
        </video>
        <input className={style.checkbox_type} id = {type.id} type = "radio" value = {type.id} name = "type" onClick={e=> setType(e.currentTarget.value)} required />
        <p className={style.option_text}>{type.type}</p>
      </label>
    </div>
  );
}

Type.propTypes = {
  type: PropTypes.object.isRequired,
}

export default Type;
