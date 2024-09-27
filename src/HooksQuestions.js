import React, { useState } from 'react';
export function HooksQuestions() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  return (
    <div className="hooks">
      <span className='h3'>{count} </span><button onClick={handleClick}>Click </button>
      
    </div>
  );
}
