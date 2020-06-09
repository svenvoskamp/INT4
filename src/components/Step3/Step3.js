import React from "react";
import Type from "../../components/Type/Type";
import { useStores } from "../../hooks/index";

const Step3 = ({type, setType, setCurrentIndex}) => {
  const { uiStore, typeStore, countryStore, bookingStore} = useStores();
  const handleClick = () => {
    if(type !== "" ){
      setCurrentIndex(3)
    }
  }
  const handleBack = () => {
    setCurrentIndex(1);

    
  }

  return (
    <>
    <button onClick = {handleBack}>Terug</button>
    {typeStore.types.map(type => (
        <Type type = {type} key = {type.id} setType = {setType}/>
      ))}
    <button onClick = {handleClick}>En we leefden nog lang en gelukkig</button>
    </>
  );
}

export default Step3;
