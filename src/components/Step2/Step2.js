import React from "react";

const Step2 = ({name1, name2, count, setCount, setCurrentIndex}) => {

  const handleClick = () => {
    if(count !== "" ){
      setCurrentIndex(2);
    }
  }
  const handleBack = () => {
    setCurrentIndex(0);
  }

  return (
    <>
    <button onClick = {handleBack}>Terug</button>
    <h1>Let's go <span>{name1} & {name2}!</span></h1>
    <h2>Wanneer zijn jullie in het huwelijksbootje gestapt?</h2>
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
    <button onClick = {handleClick}>En we leefden nog lang en gelukkig</button>
    </>
  );
}

export default Step2;
