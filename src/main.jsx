import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Navber from  "../src/Pages/Navber.jsx" 
import Catagories from '../src/Pages/CatagorySetup/Catagories.jsx'
import SubCatagories from '../src/Pages/CatagorySetup/SubCatagories.jsx';
import SubSubCatagory from '../src/Pages/CatagorySetup/SubSubCatagory.jsx'
import AddCatagory from './Components/AddCatagory.jsx';
import All from './Pages/Orders/All.jsx';
import Pending from './Pages/Orders/Pending.jsx';
import Confirmed from './Pages/Orders/Confirmed.jsx';
import Packaging from './Pages/Orders/Packaging.jsx';
import OutOfDelivery from './Pages/Orders/OutOfDelivery.jsx';
import Delivered from './Pages/Orders/Delivered.jsx';
import Returned from './Pages/Orders/Returned.jsx';
import FailedToDeliver from './Pages/Orders/FailedToDeliver.jsx';
import Cancled from './Pages/Orders/Cancled.jsx';
import PendingR from './Pages/Ruturn/PendingR.jsx';
import ApprovedR from './Pages/Ruturn/ApprovedR.jsx';
import RefundedR from './Pages/Ruturn/RefundedR.jsx';
import RejectedR from './Pages/Ruturn/RejectedR.jsx';



createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
      {/*catagories Path*/}
    <Route path="/" element={<App />}>
    <Route path='catagory' element={<Catagories />} />
    <Route path='subcatagory' element={<SubCatagories />} />
    <Route path='subsubcatagory' element={<SubSubCatagory />} />
    <Route path='addcatagory' element={<AddCatagory />} />

      {/*orders path*/}
     <Route path="all" element={<All/>}/>
     <Route path="pending" element={<Pending/>}/>
     <Route path="confirmed" element={<Confirmed/>}/>
     <Route path="packaging" element={<Packaging/>}/>
     <Route path="outofdelivery" element={<OutOfDelivery/>}/>
     <Route path="deliver" element={<Delivered/>}/>
     <Route path="return" element={<Returned/>}/>
     <Route path="failedtodeliver" element={<FailedToDeliver/>}/>
     <Route path="cancle" element={<Cancled/>}/>

     {/*return path*/}
     <Route path='pendingR' element={<PendingR />} />
     <Route path='approvedR' element={<ApprovedR />} />
     <Route path='refundedR' element={<RefundedR />} />
     <Route path='rejectedR' element={<RejectedR />} />
   
  
    </Route>
   

  </Routes>
</BrowserRouter>,

  
  
)
