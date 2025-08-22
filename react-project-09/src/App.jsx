import { useState } from 'react'
import LoggerComponent from './components/LoggerComponent'
import './App.css'
import Bulb from './components/Bulb'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LoggerComponent/> */}
    {/* <Bulb/> */}
    {/* <TimerComponent/> */}
    {/* <DataFetcher/> */}
    <MultiEffectComponent/>
    {/* <ResizeComponent /> */}
    </>

  )
}

export default App
