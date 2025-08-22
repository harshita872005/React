import React from 'react'
import {useState, useEffect} from 'react'

const Bulb = () => {
    const[isOn, setIsOn]=useState(false);//bulb off

    //useEffectwill run every time "isOn" changes
    useEffect(()=>{
        if(isOn){
            document.body.style.backgroundColor="Yellow";
        }else{
            document.body.style.backgroundColor="gray";
        }
    },[isOn]);//dependency -> run when "ison" changes
    function handleClick(){
        setIsOn(!isOn);
    }
  return (
    <div style={{minHeight:"100vh"}}>
        <h1>Light Bulb Example</h1>
        <p>The bulb is: {isOn ? "ON" : "OFF"}</p>
        <button onClick={(handleClick)}>
            {isOn ?"Turn OFF ": "Turn ON"}
        </button>
      
    </div>
  )
}

export default Bulb
