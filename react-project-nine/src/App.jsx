import { useState } from 'react'
import LoggerComponent from './components/LoggerComponent'
import './App.css'
import Bulb from './components/Bulb'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LoggerComponent/> */}
    {/* <Bulb/> */}
    {/* <TimerComponent/> */}
    <DataFetcher/>
    </>

  )
}

export default App
