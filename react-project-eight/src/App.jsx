import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [Count, setCount]=useState(0);
  const[total, setTotal]=useState(0);
  //first -> side-effect function
  //second ->clean-up function
  //third -> coma seperated dependency list
  
  function handleClick(){
    setCount(Count +1);
  }
  function handleClickTotal(){
    setTotal(total +1);
  }
  //variation:1
  //runs on every render
  // useEffect(()=>{
  //  alert("I will run on each render");
  // })

  //variation 2
  //runs only on first render
  // useEffect(()=>{
  //   alert("I will run only 1st render");
  // },[])

  //variation 3
  // useEffect(()=>{
  //   alert("i will render when count updated");
  // },[Count]);
  
  //variation 4: multiple dependencies
    useEffect(()=>{
    alert("i will render when count/total updated");
  },[Count,total]);

  //variation 5:
  //iss baar lets add a cleanup function

  useEffect(()=>{
    alert("Count is updated")

    return() => {
      alert("Count is unmounted from ui");
    }
  })
  return (
    <div>
    <h1>Runs on click increment</h1>
    <br />
    <button onClick={handleClick}>Update count</button>
    <br /><br />
    <h6>Count is : {Count}</h6>


    <br />
    <h1>Runs on total increment</h1>
    <button onClick={handleClickTotal}>Update total</button>
    <br /><br />
    <h6>Total is : {total}</h6>
    </div>
  )
}

export default App
