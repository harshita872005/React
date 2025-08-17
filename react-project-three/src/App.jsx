import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1);
  }
  return (
    <>
    <Button handleClick= {handleClick} text="Click me">
      <h1>{count}</h1>
    </Button>
    {/* <Card name="Harshita">
      <h1>Best WEB DEV Course</h1>
      <p>Trying to be Consistent in thhis</p>
      <p>Will complete this course soon</p>
    </Card>
    <Card children="Meh Ek Expicitly wala children hu"></Card> */}
    </>
  )
}

export default App
