import React from 'react'

const Card = (props) => {
  return (
    <div>
    <input type="text" onChange={(e)=> props.setName(e.target.value)} />
    <p>Name state variable ke value inside {props.title}: {props.name}</p>
    </div>
  )
}

export default Card
