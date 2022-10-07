// Use destructuring to import a single hook
import React, { useState } from 'react';

function countInitial() {
  console.log('run function');
  return 4;
}

function App() {
    /* 
  - useState is an array with 2 values 
  - Most of the time we'll see the useState array using destructuring 
  - The first value is the default value, the second one is the function used
  to modify the default value, update our current state'
  - The merge of old values doesn't not autmatically happen because in general with useState() hook,
  we'll prefere to use seperate hook for each value! 
   */
  
  const [state, setState] = useState({ count: 4, theme: "red" })
  const count = state.count
  const theme = state.theme

  function decrementCount(){
    setState(prevState => {
      /* 
      How this work in class-based component but this won't work properly 
      because instead of merging the old state with the new one, with function-based component, 
      the old state is totally overwritten! To avoid this when working with objects,
      we need to use to spread out the old state and keep all the old values. 
      */

      //return { count: prevState.count - 1 } // Overwrite the old values!
      return { ...prevState, count: prevState.count - 1 }
    })
  }

  function incrementCount(){
    // setCount(prevCount => prevCount + 1)
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
