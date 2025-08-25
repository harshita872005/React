import React from 'react'
import '../App.jsx'
import { ThemeContext } from '../App.jsx'   
import { useContext } from 'react'

const ChildC = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    function handleClick(){
      if(theme === 'light'){
        setTheme('dark')
      }else{
        setTheme('light')
      }
    }
  return (
    <div>
      <button onClick={handleClick}>Change Theme</button>
    </div>
  )
}

export default ChildC
