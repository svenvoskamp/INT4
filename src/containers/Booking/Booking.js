import React from "react";
import { useStores } from "../../hooks/index";


const Booking = () => {
  const {uiStore, typeStore, countryStore}= useStores();
  const currentBooking = uiStore.currentBooking;
  const type = typeStore.getTypeById(currentBooking.typeId);
  const country = countryStore.getCountryById(currentBooking.countryId);
  console.log(currentBooking);



  const handleLogOut = async e => {
    e.preventDefault();
      await uiStore.logoutUser();
  };

  return (
    <>
    <form onSubmit={handleLogOut}>
        <input type="submit" value="Logout"/>
    </form>
    <h1>Jij hebt al een boeking gemaakt!</h1>
    <p>Persoon 1 : {currentBooking.name1}</p>
    <p>Persoon 2 : {currentBooking.name2}</p>
    <p>Aantal jaar getrouwd: {currentBooking.count}</p>
    <p>Jullie zijn deze type reizigers: {type.type}</p>
    <p>Jullie zullen dit land bezoeken: {country.country}</p>
    </>
  );
};

export default Booking;
