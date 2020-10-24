import React from 'react'

import { UserContext } from '../../App';

export default function ComponentA() {
  return (
    <div>
      <UserContext.Consumer>
        {
          (userName) => {
            return <h1>ComponentA: Username is {userName}</h1>
          }
        }        
      </UserContext.Consumer>
    </div>
  )
}
