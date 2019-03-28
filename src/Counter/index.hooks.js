import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const addCount = () => setCount(count + 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addCount}>+1</button>
    </div>
  );
};

export default Counter;
