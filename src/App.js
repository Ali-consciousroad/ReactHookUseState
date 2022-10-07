// Use destructuring to import a single hook
import React, { useState } from 'react';

function App() {
    /* 
  - useState is an array with 2 values 
  - Most of the time we'll see the useState array using destructuring 
  - The first value is the default value, the second one is the function used
  to modify the default value, update our current state'
  - The merge of old values doesn't not autmatically happen because in general with useState() hook,
  we'll prefere to use seperate hook for each value! 
   */
  
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState("red")

  function decrementCount(){
      setCount(prevCount => prevCount - 1)
      setTheme("yellow")
  }

  function incrementCount(){
      setCount(prevCount => prevCount + 1)
      setTheme("green")
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
