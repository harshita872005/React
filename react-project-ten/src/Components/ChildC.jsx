import React, { useContext } from 'react'
import { UserContext } from '../App'


const ChildC = () => {
    //fetch the context value from UserContext from App.jsx
    const user = useContext(UserContext);
  return (
    <div>
      <h1>Name of User is: {user.name}</h1>
    </div>
  )
}

export default ChildC
