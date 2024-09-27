import React, { useState } from 'react';
let renderCount = 0
export function HooksQuestions() {
  renderCount++
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [profile, setProfile] = useState({
    name: "Michal",
    address: "UK"
  });
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  const handlePrice = ()=> {
    setPrice(0)
  }
  const handleProfle = () => {
    setProfile({
      name: "Michal",
      address: "UK"
    })
  }
  return (
    <>
      <div>{renderCount} : RenderCounter</div>
      <div className="hooks">
        <span className='h3'>{count} </span><button onClick={handleClick}>Click Me for set 4 times count in one click</button>
      </div>
      <div className="hooks">
        <span className='h3'>{price} </span><button onClick={handlePrice}>Click Me to change the same price</button>
      </div>
      <div className="hooks">
        <span className='h3'>{profile.name} </span><button onClick={handleProfle}>Click Me to change the same profile</button>
      </div>
    </>
  );
}
