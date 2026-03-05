import { useState } from 'react'

import './App.css'
import Navber from  "../src/Pages/Navber"  
import Catagories from '../src/Pages/CatagorySetup/Catagories'



function App() {
  const [count, setCount] = useState(0)



  return (
    <div>
        <Navber />
       
        
    </div>
   
    
  )
}

export default App
