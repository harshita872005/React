import React ,{useState, useEffect} from 'react'

const ResizeComponent = () => {
    const [windowWidth, setWindowWidth]= useState(window.innerWidth);

    useEffect(()=>{
      const handleResize = ()=>setWindowWidth(window.innerWidth);
      console.log("Event Listener Added");
      window.addEventListener('resize', handleResize);
      //cleanup function
      return ()=>{
      console.log("Event Listener Removed");
      window.removeEventListener('resize', handleResize);
      }
    },[]);

//it will run only on first render


  return (
    <div>
      <h1>Eindow width: {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent
