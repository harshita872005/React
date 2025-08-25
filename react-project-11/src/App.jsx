import { useState } from 'react'
import ChildA from './components/ChildA.jsx'
import './App.css'
import { createContext } from 'react'
//step1: create context
const ThemeContext = createContext()
//step2: wrap all the child inside a provider
//step3:pass the value to provider
function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{backgroundColor : theme === 'light'? 'beige': 'black'}}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
export { ThemeContext }