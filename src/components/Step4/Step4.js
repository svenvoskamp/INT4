import React from "react";
import Country from "../../components/Country/Country";
import { useStores } from "../../hooks/index";

const Step4 = ({country, setCountry, setCurrentIndex}) => {
  const { uiStore, typeStore, countryStore, bookingStore} = useStores();
  const handleClick = () => {
    if(country !== "" ){
      setCurrentIndex(4);
    }
  }
  const handleBack = () => {
    setCurrentIndex(2);
  }

  return (
    <>
    <button onClick = {handleBack}>Terug</button>
    {countryStore.countries.map(country => (
        <Country country = {country} key = {country.id} setCountry = {setCountry}/>
      ))}
    <button onClick = {handleClick}>En we leefden nog lang en gelukkig</button>
    </>
  );
}

export default Step4;
