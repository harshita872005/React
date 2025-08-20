import React from 'react'

const ColorSwitch = ({onChangeColor}) => {
  return (
    <div>
      <button onClick={e => {
        e.stopPropagation();
        onChangeColor();
      }}>Change Color</button>
    </div>
  )
}

export default ColorSwitch

