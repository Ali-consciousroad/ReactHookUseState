// Use destructuring to import a single hook
import React, { useState } from 'react';

function App() {
  /* 
  - useState is an array with 2 values 
  - Most of the time we'll see the useState array using destructuring 
  - The first value is the default value, the second one is the function used
  to modify the default value, update our current state
  - The value inside useState() give the default value
   */
  const [count, setCount] = useState(21)

  function decrementCount(){
    setCount(count - 1)
  }

  function incrementCount(){
    setCount(count +1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
