import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import Type from "../../components/Type/Type";
import Country from "../../components/Country/Country";
import Booking from "../../models/Booking";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts/index";

const Form = () => {
  const { uiStore, typeStore, countryStore, bookingStore} = useStores();
  const [ name1, setName1] = useState("");
  const [ name2, setName2] = useState("");
  const [ sex1, setSex1] = useState("");
  const [ sex2, setSex2] = useState("");
  const [ count, setCount] = useState("");
  const [ year, setYear] = useState("");
  const [ pants, setPants] = useState("");
  const [ type, setType] = useState("");
  const [ country, setCountry] = useState("");
  const history = useHistory();

  const handleLogOut = async e => {
    e.preventDefault();
      await uiStore.logoutUser();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if(name1 !== "" && name2 !== "" && sex1 !== "" && sex2 !== "" && count !== "" && year !== "" && pants !== "") {
      const booking = new Booking({user: uiStore.currentUser, sex1, sex2, name1, name2, year, count, pants, userId: uiStore.currentUser.id, typeId: type, countryId: country});
    try {
      const newBooking = await bookingStore.createBooking(booking);
      console.log(newBooking);
      history.pushState(ROUTES.home);
    } catch(error) {
      console.log(error);
    }
  }
}






  return (
    <>
    <h1>Dit is het formulier </h1>
    <form onSubmit={handleLogOut}>
        <input type="submit" value="Logout"/>
    </form>
    <form onSubmit = {handleSubmit}>
      <label htmlFor="name1" >
      <span>Name 1</span>
        <input
          required
          id="name1"
          min="0"
          max="255"
          value={name1}
          type="text"
          placeholder="Alex"
          onChange={e => setName1(e.currentTarget.value)}
        />
      </label>
      <label htmlFor="name2" >
        <input
          required
          id="name2"
          min="0"
          max="255"
          value={name2}
          type="text"
          placeholder="Celine"
          onChange={e => setName2(e.currentTarget.value)}
        />
      </label>
      <label htmlFor = "male">
        <span>Male</span>
        <input
        id = "male"
        type = "radio"
        value = "male"
        name = "sex1"
        onClick={e => setSex1(e.currentTarget.value)}
        required
        />
      </label>
      <label htmlFor = "female">
        <span>Female</span>
        <input
        id = "female"
        type = "radio"
        value = "female"
        name = "sex1"
        onClick={e => setSex1(e.currentTarget.value)}
        required
        />
      </label>
      <label htmlFor = "male">
        <span>Male</span>
        <input
        id = "male"
        type = "radio"
        value = "male"
        name = "sex2"
        onClick={e => setSex2(e.currentTarget.value)}
        required
        />
      </label>
      <label htmlFor = "female">
        <span>Female</span>
        <input
        id = "female"
        type = "radio"
        value = "female"
        name = "sex2"
        onClick={e => setSex2(e.currentTarget.value)}
        required
        />
      </label>
      <label htmlFor = "count">
        <span>Marriage count: {count}</span>
        <input
        id = "count"
        type = "range"
        min = "1"
        max = "100"
        value = {count}
        name = "count"
        onChange={e => setCount(e.currentTarget.value)}
        required
        />
      </label>
      <label htmlFor="year" >
        <input
          required
          id="year"
          min="0"
          maxLength="4"
          value={year}
          type="text"
          placeholder="2000"
          onChange={e => setYear(e.currentTarget.value)}
        />
      </label>
      <label htmlFor = "count">
        <span>Wie heeft de broek aan? {name1} of {name2} </span>
        <input
        id = "pants"
        type = "range"
        min = "0"
        max = "2"
        value = {pants}
        name = "pants"
        onChange={e => setPants(e.currentTarget.value)}
        required
        />
      </label>
      {typeStore.types.map(type => (
        <Type type = {type} key = {type.id} setType = {setType}/>
      ))}
      {countryStore.countries.map(country => (
        <Country country = {country} key = {country.id} setCountry = {setCountry}/>
      ))}
      {/* <label htmlFor = "img">
       <span>Stuur de leukste foto van jullie samen van jullie huwelijksreis!</span>
        <input type="file" id="img" name="filename"/>
      </label>
      */}
      <input type="submit" value="Verzend"/>
    </form>


    </>
  );
};

export default Form;
