import React from "react";
import { useStores } from "../../hooks/index";
import * as firebase from "firebase/app";
import 'firebase/storage';



const Booking = () => {
  const {uiStore, typeStore, countryStore}= useStores();
  const currentBooking = uiStore.currentBooking;
  const type = typeStore.getTypeById(currentBooking.typeId);
  const country = countryStore.getCountryById(currentBooking.countryId);
  console.log(currentBooking);
  const storageRef = firebase.storage().ref();
  //RESIZE IMG CODE:


  /* let n = 4;
  const extension = currentBooking.img.substring(currentBooking.img.length - n);
  const newImage = currentBooking.img.slice(0, -4);
  console.log(newImage);
  console.log(extension);


    storageRef.child('images/' + newImage + '_400x300' + extension).getDownloadURL().then(function(url){
    console.log(url);
    var img = document.getElementById('img');
    img.src = url;
  });
*/

storageRef.child('images/' + currentBooking.img).getDownloadURL().then(function(url){
  console.log(url);
  var img = document.getElementById('img');
  img.src = url;
});
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
    <img id = "img" alt= {currentBooking.name1}/>
    </>
  );
};

export default Booking;
