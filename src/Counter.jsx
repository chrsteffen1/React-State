import React from "react";
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (  
    <>
    <span>Current Count: {count} </span>
    <section>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </section>
    </>
  );
}
 
export default Counter;