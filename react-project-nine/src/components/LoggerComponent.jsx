import React from 'react'
import { useEffect } from 'react';
import {useState} from 'react';

const LoggerComponent = () => {
    const[count, setCount]=useState(0);
    useEffect(()=>{
        console.log("Component render or count changes: ",count);
        alert("Component render or count changes: "+count);
    })
    //runs on every render
  return (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default LoggerComponent
