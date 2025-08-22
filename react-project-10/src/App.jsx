import { useState ,createContext} from 'react'
import './App.css'
import ChildA from './Components/ChildA'

//step1: context created
const UserContext = createContext();
//step2 : wrap all the child inside a provider{har child ko support/access dena hai to become a consumer toh sabhi ko provider ke andar wrap krna padega}
//step3: value pass to the provider
//step4: consumer k andar jarakr consume krlo value ko

function App() {

  const [user, setUser] = useState({name:"Harshita"});

  return (
    <>
    {/* //step2: value pass to the provider */}
    <UserContext.Provider value={user}>
      <ChildA />
    </UserContext.Provider>
    </>
  )
}

export default App
//export { UserContext } //step5: export the context to use in other components
export { UserContext } 
