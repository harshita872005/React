import UserCard from "./components/UserCard"
import './App.css'
import lovepic from './assets/lovepic.jpeg'
import maharanapratap from './assets/maharana.webp'
import prithviraj from './assets/prithviraj.jpg'

function App() {

  return (
    <div className = "container" >
    <UserCard name="Love rana" desc = "desc1" image={lovepic} style={{"border-radius":"10px"}}/>
    <UserCard name="PrithviRaj Chauhan" desc="desc2" image={prithviraj} style={{"border-radius":"10px"}}/>
    <UserCard name = "Maharana Pratap" desc="desc3" image={maharanapratap} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
