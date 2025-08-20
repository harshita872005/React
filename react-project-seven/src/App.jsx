import { useState } from 'react'
import ColorSwitch from'./ColorSwitch.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  function handleClickOutSide(){
    setCount(count + 1);
  }
  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }
  function handleChangeColor(){
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor= getRandomLightColor();
  }
  return (
    <>
      <div style={{width:'100%',height:'100%'}} onClick={handleClickOutSide}>
      <ColorSwitch onChangeColor={handleChangeColor}></ColorSwitch>
      <br />
      <br />
      <h2>Clicks on thr page: {count}</h2>
      </div>
      
    </>
  )
}

export default App
