import React from "react";
import style from "./step7.module.css"

const Step7= ({firstName,
              setFirstName,
              lastName,
              setLastName,
              city,
              setCity,
              zip,
              setZip,
              adress,
              setAdress,
              houseNumber,
              setHouseNumber,
              busNumber,
              setBusNumber,
              email,
              setEmail,
              telephone,
              setTelephone,
              terms,
              setTerms,
              setCurrentIndex}) => {

  const handleClick = () => {
    if(firstName !== "" && lastName !== "" && city !== "" && zip !== "" && adress !== "" && houseNumber !== "" && email !== "" && telephone !== "" && terms !== ""){
      setCurrentIndex(7);
    }
  }

  return (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Nog even wat <span className={style.title_span}>administratie!</span></h1>
          <h2 className={style.subtitle}>Velden met * zijn verplicht.</h2>
        </div>

        <div className={style.form}>
            <label htmlFor="firstName" className={`${style.form_firstname} ${style.form_item}`}>
              <p className={style.item_title}>Voornaam:*</p>
              <input className={style.form_input} required id="firstName" min="0" max="255" value={firstName} type="text"  onChange={e => setFirstName(e.currentTarget.value)}/>
            </label>

            <label htmlFor="lastName" className={`${style.form_lastname} ${style.form_item}`}>
              <p className={style.item_title}>Achternaam:*</p>
              <input className={style.form_input} required id="lastName" min="0" max="255" value={lastName} type="text"  onChange={e => setLastName(e.currentTarget.value)}/>
            </label>

            <label htmlFor="email" className={`${style.form_email} ${style.form_item}`}>
              <p className={style.item_title}>E-mail:*</p>
              <input className={style.form_input} required id="email" value={email} type="email"  onChange={e => setEmail(e.currentTarget.value)}/>
            </label>

            <label htmlFor="telephone" className={`${style.form_email} ${style.form_item}`}>
              <p className={style.item_title}>Telefoon:*</p>
              <input className={style.form_input} required id="telephone" value={telephone} type="tel"  onChange={e => setTelephone(e.currentTarget.value)}/>
            </label>

            <label htmlFor="city" className={`${style.form_city} ${style.form_item}`} >
              <p className={style.item_title}>Woonplaats:*</p>
              <input className={style.form_input} required id="city" min="0" max="255" value={city} type="text"  onChange={e => setCity(e.currentTarget.value)}/>
            </label>

            <label htmlFor="zip" className={`${style.form_postcode} ${style.form_item}`}>
              <p className={style.item_title}>Postcode:*</p>
              <input className={style.form_input} required id="zip" value={zip} type="text"  onChange={e => setZip(e.currentTarget.value)}/>
            </label>

            <label htmlFor="adress" className={`${style.form_adres} ${style.form_item}`}>
              <p className={style.item_title}>Straat:*</p>
              <input className={style.form_input} required id="adress" min="0" max="255" value={adress} type="text"  onChange={e => setAdress(e.currentTarget.value)}/>
            </label>

            <label htmlFor="houseNumber" className={`${style.form_huisnummer} ${style.form_item}`}>
              <p className={style.item_title}>Nr:*</p>
              <input className={style.form_input} required id="houseNumber" value={houseNumber} type="number"  onChange={e => setHouseNumber(e.currentTarget.value)}/>
            </label>

            <label htmlFor="busNumber" className={`${style.form_busnummer} ${style.form_item}`}>
              <p className={style.item_title}>Bus nr:</p>
              <input className={style.form_input} id="busNumber" value={busNumber} type="text"  onChange={e => setBusNumber(e.currentTarget.value)}/>
            </label>

            <label htmlFor="terms" className={`${style.form_terms} ${style.form_item}`}>
            <input className={style.form_input} required id="terms" value="" type="checkbox" onChange={e => setTerms(1)}/>
              <p className={`${style.item_title} ${style.title_terms}`}>Ik ga akkoord met de algemene voorwaarde.*</p>
            </label>
        </div>

        <div className={style.button_container}>
          <button className={style.confirm} onClick = {handleClick}>Dit was 'm</button>
        </div>
      </div>

    </>
  );
}

export default Step7;
