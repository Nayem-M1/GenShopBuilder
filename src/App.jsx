import { useState } from 'react'

import './App.css'
import Navber from './Components/Navber'



function App() {
  const [count, setCount] = useState(0)



  return (
    <div>
        <Navber />
        
    </div>
   
    
  )
}

export default App
