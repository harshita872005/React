import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync krwandungi
  const [name,setName]=useState('');
  return (
    <>
    <Card  title="Card1" name={name} setName={setName}></Card>
     <Card  title="Card2" name={name} setName={setName}></Card>
    </>
  )
}

export default App
