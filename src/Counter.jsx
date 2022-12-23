import React from "react";
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  const [resetCount, setResetCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleMultiply = () =>{
    setCount(count * count)
  }

  const handleReset = () => {
    setCount(0);
    setResetCount(resetCount + 1);
  };

  return (  
    <>
    <span>Current Count: {count}</span> 
    <span>Reset Count: {resetCount}</span>
    <section>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleReset}>Reset</button>
    </section>
    </>
  );
}
 
export default Counter;