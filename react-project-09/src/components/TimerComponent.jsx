import React,{useState,useEffect} from 'react'

const TimerComponent = () => {

    const[seconds,setSeconds] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log("setInterval executed");
            setSeconds(prevSeconds=>prevSeconds + 1);
        },1000);
        return ()=>{
            console.log("Time to stop");
            clearInterval(intervalId);
            //wheni will remove the timeerComponent from the app.jsx
        }
    },[]);
    //it will run only on the first render
  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent
