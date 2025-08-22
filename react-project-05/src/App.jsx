import { useState } from 'react'
import './App.css'
import Logout from './components/Logout';
import Login from './components/Login';

function App() {
  const[isLoggedIn, setLoggedIn]=useState(true);
  // 1.if-else
  if(isLoggedIn){
    return(
      <Logout/>
    )
  }else{
    return(
      <Login/>
    )
  }

  // 2.ternary operator
  // return(
  //   <div>
  //     {isLoggedIn ? <Logout/> : <Login/>}
  //   </div>
  // )

  //3.logical operators
  // return(
  //   <div>
  //     <h1>Welcome Everyone to Codehelp web course</h1>
  //     <div>
  //       {isLoggedIn && <Logout/>}
  //     </div>
  //   </div>
  // )

  //4.Variable Rendering

}

export default App
