import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Navber from './Components/Navber.jsx';
import Catagories from './Components/Catagories.jsx';
import SubCatagories from './Components/SubCatagories.jsx';
import SubSubCatagory from './Components/SubSubCatagory.jsx';
import AddCatagory from './Components/AddCatagory.jsx';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
<Routes>
  <Route path="/" element={<App />}>
     <Route path='catagory' element={<Catagories />} />
    <Route path='subcatagory' element={<SubCatagories />} />
    <Route path='subsubcatagory' element={<SubSubCatagory />} />

   <Route path='addcatagory' element={<AddCatagory />} />
   
  
   </Route>
   

   </Routes>
  </BrowserRouter>,

  
  
)
