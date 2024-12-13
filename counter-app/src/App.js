import React, { useEffect, useState } from 'react';
import './App.css';
const App = () => {


  // Initialize the counter state
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? Number(savedCount) : 0;
  });

  // Create a function to handle increment value
  const Increment = () => {
    setCount(count + 1);
  };
  // Create a function to handle decrement value
  const Decrement = () => {
    setCount(count - 1);
  };

  // Create a function to handle reset
  const Reset = () => {
    setCount(0);
  };

  // Save the value to localStorage
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <>
      <div className='counter-box'>
        <h1>Counter App Using React</h1>
        <p>Counter Value : {count}</p>

        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </>
  );
};

export default App;
