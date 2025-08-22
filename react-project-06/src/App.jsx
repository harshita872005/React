import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    alert("I am clicked");
  }
  function handleMouseOver(){
    alert("Para ke uper mouse lekr aai hoo")
  }
  function handleInputChange(e){
    console.log("Input me value change hui hai");
    console.log("value till now: ",e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    //i am writing my custom behaviour 
    alert("Form submit krdu kiya?");
  }

  return (
    <>
      <div>
        <p onMouseOver={handleMouseOver}>I am Para</p>
        <button onClick={handleClick}>
          Click ME
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} placeholder='Enter anything' required/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
