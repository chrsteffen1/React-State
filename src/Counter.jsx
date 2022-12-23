import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  const [resetCount, setResetCount] = useState(0);
  const [color, setColor] = useState('white')

  const handleIncrement = () => {
    setCount(count + 1);
    setColor('lightgreen')
  };
  
  const handleDecrement = () => {
    setCount(count - 1);
    setColor('pink')
  };

  const handleMultiply = () =>{
    setCount(count * count)
    setColor('lightblue')
  }

  const handleReset = () => {
    setCount(0);
    setResetCount(resetCount + 1);
    setColor('white')
  };

  const handleNumber = (e) => {
    setCount(e.target.innerHTML)
  }

  return (  
    <>
    <span style={{background: color}}>Current Count: {count}</span> 
    <span>Reset Count: {resetCount}</span>
    <section>
      <button onClick={handleNumber} >1</button>
      <button onClick={handleNumber}>2</button>
      <button onClick={handleNumber}>3</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleNumber}>4</button>
      <button onClick={handleNumber}>5</button>
      <button onClick={handleNumber}>6</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleNumber}>7</button>
      <button onClick={handleNumber}>8</button>
      <button onClick={handleNumber}>9</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleNumber}>0</button>
      <button >Enter</button>
      <button >/</button>
    </section>
    </>
  );
}
 
export default Counter;