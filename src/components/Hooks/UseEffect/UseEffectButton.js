import React, { useState } from 'react'

import UseeffectComponentWillUnmount from './UseeffectComponentWillUnmount';

export default function UseEffectButton(props) {
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    console.log('hey my name is ')
    setDisplay(!display);
  }

  return (
    <div>
      <h1>UseEffectButton Example </h1>
      <button onClick={handleClick}>Toggle</button>
      {
        display ? <UseeffectComponentWillUnmount /> : null
      }
      
    </div>
  )
}
