import React, { useEffect } from 'react'

export default function UseeffectComponentWillUnmount() {
  useEffect(() => {
    console.log('Component is mounted ');

    return () => console.log('Component will be destroyed! ');
  });


  return (
    <div>
      <h1>UseeffectComponentWillUnmount</h1>
    </div>
  )
}
