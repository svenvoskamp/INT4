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
    if(firstName !== "" && lastName !== "" && city !== "" && zip !== "" && adress !== "" && houseNumber !== "" && email !== "" && telephone !== "" && terms === 1){
      setCurrentIndex(7);
    }
  }

  return (
    <>
      <div className={style.content}>
        <div className={style.content_header}>
          <h1 className={style.title}>Nog even wat <span>administratie!</span></h1>
          <h2 className={style.subtitle}>Velden met * zijn verplicht.</h2>
        </div>

        <label htmlFor="firstName" >
        <span>Voornaam:</span>
          <input
            required
            id="firstName"
            min="0"
            max="255"
            value={firstName}
            type="text"
            placeholder="Alex"
            onChange={e => setFirstName(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="lastName" >
        <span>Achternaam:</span>
          <input
            required
            id="lastName"
            min="0"
            max="255"
            value={lastName}
            type="text"
            placeholder="Verbeeck"
            onChange={e => setLastName(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="city" >
        <span>Woonplaats:</span>
          <input
            required
            id="city"
            min="0"
            max="255"
            value={city}
            type="text"
            placeholder="Antwerpen"
            onChange={e => setCity(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="zip" >
        <span>Postcode:</span>
          <input
            required
            id="zip"
            value={zip}
            type="text"
            placeholder="8500"
            onChange={e => setZip(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="adress" >
        <span>Adress:</span>
          <input
            required
            id="adress"
            min="0"
            max="255"
            value={adress}
            type="text"
            placeholder="Jan Klausplein"
            onChange={e => setAdress(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="houseNumber" >
        <span>Nr:</span>
          <input
            required
            id="houseNumber"
            value={houseNumber}
            type="number"
            placeholder="12"
            onChange={e => setHouseNumber(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="busNumber" >
        <span>Bus nr:</span>
          <input
            id="busNumber"
            value={busNumber}
            type="text"
            placeholder="3A"
            onChange={e => setBusNumber(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="email" >
        <span>E-mail:</span>
          <input
            required
            id="email"
            value={email}
            type="email"
            placeholder="alexanderverbeeck@gmail.com"
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="telephone" >
        <span>Telefoon:</span>
          <input
            required
            id="telephone"
            value={telephone}
            type="tel"
            placeholder="0482455642"
            onChange={e => setTelephone(e.currentTarget.value)}
          />
        </label>

        <label htmlFor="terms" >
        <span>Ik ga akkoord met de algemene voorwaarde:</span>
          <input
            required
            id="terms"
            value="1"
            type="checkbox"
            onChange={e => setTerms(e.currentTarget.value)}
          />
        </label>

        <div className={style.button_container}>
          <button className={style.confirm} onClick = {handleClick}>Dit was 'm</button>
        </div>
      </div>

    </>
  );
}

export default Step7;
