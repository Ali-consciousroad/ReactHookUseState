// Use destructuring to import a single hook
import React, { useState } from 'react';

function App() {
  /* 
  - useState is an array with 2 values 
  - Most of the time we'll see the useState array using destructuring 
  - The first value is the default value, the second one is the function used
  to modify the default value, update our current state
  - The value inside useState() give the default valueto 
   */
  const [count, setCount] = useState(21)

  // Every time we call our setState() function, the component will rerender like setState() used with class-based components
  function decrementCount(){
    // This will cause issue if we call setCount() 2 time in a row, the function will override each other and decrement our default value only once! 
    // setCount(count - 1)
    
    // Everytime we use the previous value of our state to update it we need to use a function inside setCount() fct. 
    // Same principles apply with setState() in class component.
    setCount(prevCount => prevCount - 1)
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount(){
    // setCount(count +1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
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
