import React from "react";
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)


  return (  
    <>
    <span>Current Count: {count} </span>
    <section>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </section>
    </>
  );
}
 
export default Counter;