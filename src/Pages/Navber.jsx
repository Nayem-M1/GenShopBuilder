import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { FaFlagCheckered } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaMessage  } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { ImMenu3 } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { GrCatalog } from "react-icons/gr";
import { MdOutlineDatasetLinked } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { LuWarehouse } from "react-icons/lu";    
import { NavLink, Outlet, useSearchParams } from 'react-router';
import { FaChevronDown } from "react-icons/fa6";
import { TbBrandBootstrap } from "react-icons/tb";
import { FaIdeal } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdForwardToInbox } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";


const Navber = () => {

     {/* Main SideMenu hook*/}
     const [menu,setMenu]=useState(true)
     const menuToggol=()=>{
        setMenu(!menu)
     }

    {/*orders hook*/}
    const [order,setOrder]=useState(false) 
    const togggol=()=>{
        setOrder(!order)
    }

    {/*Refund hook*/}
    const [refund,setRefund]=useState(false)
    const refundToggle=()=>{
        setRefund(!refund)
    }

      {/*Catagory hook*/}
       const[catagory,setCatagory]=useState(false)
       const catagoryToggole=()=>{
        setCatagory(!catagory)
       }

       {/*House Product*/}
       const[product,setProduct]=useState(false)
       const productToggole=()=>{
        setProduct(!product)
       }

       {/*Offers & Deals Hook*/}
       const[offer,setOffer]=useState(false)
       const offerToggole=()=>{
        setOffer(!offer)
       }

       {/*Notification Hook*/}
       const[notification,setNotification]=useState(false)
       const notificationToggole=()=>{
        setNotification(!notification)
       }


  return (
  <>
  {/*Top background Which Contain Demo*/}
  <div className='w-full mx-auto  bg-[#34495e] flex justify-center items-center cursor-pointer '>
    <h2 className='text-2xl font-semibold  p-3 text-white'>This is a demo website - Buy genuine GenShopBuilder using our official link ! Click Now</h2>
    <button className='bg-amber-600 text-white text-2xl font-semibold rounded-xl py-1.5 px-3 my-3 hover:bg-amber-700 cursor-pointer'>Buy Now</button>
  </div>
  {/*Navber*/}
  <nav className='sticky top-0 z-50'>
    <div className=''>
        <ul className='bg-white shadow-2xl py-3 flex justify-between items-center px-10  '> {/*Naveber....part_01*/}
            <li className='text-3xl text-blue-950 font-semibold flex items-center justify-center  '>
                <h2>
                    <span className='text-4xl text-red-950 font-bold '>G</span>enShopBuilder
                </h2>

                 <div className='pl-7'> {/*Menu Button*/}
                    
                      
                        <label>
                             <button onClick={menuToggol}   className="bg-gray-100 p-3 rounded-full inline-flex  hover:bg-gray-200 cursor-pointer
                             ">
                                <ImMenu3   className="w-6 h-6 text-blue-900" />
                            </button>
                        </label>

                </div>
 
            </li>

           

            <li className='flex gap-5'> {/*Naveber....part_02*/}
               <div className="flex items-center justify-between w-72 bg-gray-100 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200 hover:shadow-xl ">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <span>Search or</span>
                        <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md">
                        Ctrl+K
                        </span>
                    </div>
                    <CiSearch className="w-5 h-5 text-gray-600" />
                </div> 

                <div>
                    <div className="bg-gray-100 p-3 rounded-full inline-flex  hover:bg-gray-200 cursor-pointer">
                    <TfiWorld className="w-6 h-6 text-blue-800" />
                    </div>
               </div>

                <div>
                    <div className="bg-gray-100 p-3 rounded-full inline-flex hover:bg-gray-200 cursor-pointer">
                    <FaFlagCheckered className="w-6 h-6 text-red-800" />
                    </div>
                </div>

                <div>
                    <div className="bg-gray-100 p-3 rounded-full inline-flex  hover:bg-gray-200 cursor-pointer">
                    <FaCartArrowDown className="w-6 h-6 text-blue-800" />
                    </div>
                </div>

                <div>
                    <div className="bg-gray-100 p-3 rounded-full inline-flex  hover:bg-gray-200 cursor-pointer">
                    <FaMessage  className="w-6 h-6 text-blue-900" />
                    </div>
                </div>

                <div>
                    <div className="bg-gray-100 p-3 rounded-full inline-flex  hover:bg-gray-200 cursor-pointer">
                    <CgProfile   className="w-6 h-6 text-blue-900" />
                    </div>
                </div>  

                 
            </li>
           



        </ul>
    </div>
  </nav>         {/*End Navbar*/}

  {/*Sidebar*/}

  

 <div className='flex '> {/*Parent Div*/}
    
           {/*left Sidebar*/}

  {menu &&(
    <div className='bg-[#2c3e50] w-[340px]   max-h-screen text-white p-6 overflow-y-auto   '>    
       <div className=''>
        
         <input 
            
         
         className=' rounded bg-[#34495e] py-2 px-3  text-2xl hover:border-[#34495e]' type='text' placeholder='Search'></input>
       </div>

        <div className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>
             <FaHome className='w-10 h-6' />
             <h2 className='text-xl  '>Dashbord</h2>        
       </div>

        <div className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>
             <AiOutlineProduct className='w-10 h-6' />
             <h2 className='text-xl  '>POS</h2>        
       </div>

       <h2 className='text-xl mt-7 pl-3 text-gray-400 cursor-poineter'>Order Management</h2>

       <div>
            <div onClick={togggol} className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>       {/*orders*/}
             <FaCartArrowDown className='w-10 h-6' />
             <h2 className='text-xl  '>Orders</h2>
             <FaChevronDown className='w-10 h-5 pr-0' /> 
            
              </div>
              {/*orers Section*/}
               {order &&(
                <>
                <NavLink
                to='/all'
                className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                ${isActive ?"bg-[#34495e]":"bg-[#34495]"} `}> 
                    <h2 className='text-xl py-2 '>All</h2>
                    </NavLink>
                <NavLink
                to='/pending'
                className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                ${isActive ?"bg-[#34495e]":"bg-[#34495]"}`}>
                     <h2 className='text-xl py-2 '>Pending</h2>
                    </NavLink>

                <NavLink
                to="/confirmed"
                className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                    ${isActive ?"bg-[#34495e]":"bg-[#34495]"}`}>
                    <h2 className='text-xl py-2 '>Confirmed</h2>
                </NavLink>

                <NavLink
                   to="/packaging"
                   className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                    ${isActive ?"bg-[#34495e]":"bg-[#34495]"}`}>
                    <h2 className='text-xl py-2 '>Packaging</h2>
                </NavLink>

                  <NavLink
                to="/outofdelivery"
                className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                    ${isActive ?"bg-[#34495e]":"bg-[#34495]"}`}>
                    <h2 className='text-xl py-2 '>Out Of Delivery</h2>
                </NavLink>

                <NavLink
                    to="/deliver"
                    className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                    ${isActive ?"bg-[#34495e]":"bg-[#34495]"}`}>
                    <h2 className='text-xl py-2 '>Delivered</h2>
                </NavLink>

                 <NavLink
                     to="/return"
                     className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                     ${isActive ?"bg-[#34495e]":"bg-[#34495]"}`}>
                     <h2 className='text-xl py-2 '>Returned</h2>
                </NavLink>

                 <NavLink
                     to="/failedtodeliver"
                     className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                     ${isActive ?"bg-[#34495e]":"bg-[#34495]"}`}>
                     <h2 className='text-xl py-2 '>Failed To Deliver</h2>
                </NavLink>

                <NavLink
                     to="/cancle"
                     className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                     ${isActive ?"bg-[#34495e]":"bg-[#34495]"}`}>
                     <h2 className='text-xl py-2 '>Cancled</h2>
                </NavLink>

                </>
               )}
                     
       </div>



       <div>    {/*Refund*/}
          <div onClick={refundToggle} className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-poineter'>
             <RiRefund2Fill  className='w-10 h-6' />
             <h2 className='text-xl  '>Refund </h2> 
              <FaChevronDown className='w-10 h-5 pr-0' /> 
           </div>

            {refund &&(<>
            <NavLink
                     to="/pendingR"
                     className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                     ${isActive ?"bg-[#34495e]":"bg-[#34495]"}`}>
                     <h2 className='text-xl py-2 '>Pending</h2>
            </NavLink>
            <NavLink
                     to="/approvedR"
                     className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                     ${isActive ?"bg-[#34495e]":"bg-[#34495]"}`}>
                     <h2 className='text-xl py-2 '>Approved</h2>
            </NavLink>
            <NavLink
                     to="/refundedR"
                     className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                     ${isActive ?"bg-[#34495e]":"bg-[#34495]"}`}>
                     <h2 className='text-xl py-2 '>Refunded</h2>
            </NavLink>
            <NavLink
                     to="/rejectedR"
                     className={({isActive})=>`px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer
                     ${isActive ?"bg-[#34495e]":"bg-[#34495]"}`}>
                     <h2 className='text-xl py-2 '>Rejected</h2>
            </NavLink>
            
            
            
            </>)}
     
       </div>


        <h2 className='text-xl mt-7 pl-3 text-gray-400'>Order Management</h2>


      
        <div>  {/*catagory*/}

            <div onClick={catagoryToggole}  className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>      
             <GrCatalog  className='w-10 h-6' />
             <h2 className='text-xl cursor-poineter  '>Catagory Setup</h2>
             <FaChevronDown className='w-10 h-5 pr-0' /> 
            
            </div>
               {catagory &&(

                <>

                <NavLink
                     to="/catagory"
                     className={({ isActive }) =>
                    `px-7 mt-3 flex justify-between items-center rounded cursor-pointer pl-14
                     ${isActive ? "bg-[#34495e]" : "bg-[#34495]"}`
                    }> 
                    <h2 className="text-xl py-2">Catagories</h2>
                      
                </NavLink>

                <NavLink
                     to="/subcatagory"
                     className={({ isActive }) =>
                    `px-7 mt-3 flex justify-between items-center rounded cursor-pointer pl-14
                     ${isActive ? "bg-[#34495e]" : "bg-[#34495]"}`
                    }> 
                    <h2 className="text-xl py-2">Sub-Catagories</h2>
                      
                </NavLink>

                 <NavLink
                     to="/subsubcatagory"
                     className={({ isActive }) =>
                    `px-7 mt-3 flex justify-between items-center rounded cursor-pointer pl-14
                     ${isActive ? "bg-[#34495e]" : "bg-[#34495]"}`
                    }> 
                    <h2 className="text-xl py-2">Sub-Sub-Catagories</h2>
                      
                 </NavLink>
                  </>

               )}            
                
        </div>

        <div  className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>
             <MdOutlineDatasetLinked   className='w-10 h-6' />
             <h2 className='text-xl  '>Brand Setup </h2> 
              
        </div>

        <div  className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>
             <FaProductHunt    className='w-10 h-6' />
             <h2 className='text-xl  '>Product Attribute Setup </h2> 
              
        </div>



         {/*House Product*/}
        <div onClick={()=>productToggole()}  className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>      
             <GrCatalog  className='w-10 h-6' />
             <h2 className='text-xl cursor-poineter  '>House Product</h2>
             <FaChevronDown className='w-10 h-5 pr-0' /> 
            
            </div>
        {
            product &&(
                <>
                <div className='px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer'>
                    <h2 className='text-xl py-2 '>Product List</h2> 
                </div>

                <div className='px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer'>
                    <h2 className='text-xl py-2 '>Add New Product</h2> 
                </div>

                <div className='px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer'>
                    <h2 className='text-xl py-2 '>Limited Stock</h2> 
                </div>

                <div className='px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer'>
                    <h2 className='text-xl py-2 '>Bulk Import</h2> 
                </div>

                <div className='px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer'>
                    <h2 className='text-xl py-2 '>Request Restock List</h2> 
                </div>
                </>
            )
        }



         {/*Vendor Product*/}
        <div onClick={()=>productToggole()}  className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer transition-all duration-300'>      
             <GrCatalog  className='w-10 h-6' />
             <h2 className='text-xl cursor-poineter  '>Vendor Product</h2>
             <FaChevronDown className='w-10 h-5 pr-0' /> 
            
            </div>
        {
            product &&(
                <>
                <div className='px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer '>
                    <h2 className='text-xl py-2 '>New Product Request</h2> 
                </div>

                <div className='px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer'>
                    <h2 className='text-xl py-2 '>Product Update Request</h2> 
                </div>

                <div className='px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer'>
                    <h2 className='text-xl py-2 '>Approved Request</h2> 
                </div>

                <div className='px-7 pl-14 space-y-5 mt-3 flex justify-between items-center bg-[#34495] hover:bg-[#34495e] rounded cursor-pointer'>
                    <h2 className='text-xl py-2 '>Denied Request</h2> 
                </div>

               
                </>
            )
        }
         <div  className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>
             <FaProductHunt    className='w-10 h-6' />
             <h2 className='text-xl  '>Product Gallary </h2> 
              
        </div>

        <h2 className='text-xl mt-7 pl-3 text-gray-400'>Promotion management</h2>

         <div  className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>
             <TbBrandBootstrap    className='w-10 h-6' />
             <h2 className='text-xl  '>Banner SetUp </h2> 
              
        </div>



        {/*offers And Deals*/}

         <div onClick={offerToggole} className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>
             <FaIdeal    className='w-10 h-6' />
             <h2 className='text-xl  '>Offers & Deals </h2> 
             <FaChevronDown className='w-10 h-5 pr-0' /> 
              
        </div>

          {offer &&(
            <>
            
            <NavLink
                     to=""
                     className={({ isActive }) =>
                    `px-7 mt-3 flex justify-between items-center rounded cursor-pointer pl-14
                     ${isActive ? "bg-[#34495e]" : "bg-[#34495]"}`
                    }> 
                    <h2 className="text-xl py-2">Cupon</h2>
                      
                </NavLink>
                <NavLink
                     to=""
                     className={({ isActive }) =>
                    `px-7 mt-3 flex justify-between items-center rounded cursor-pointer pl-14
                     ${isActive ? "bg-[#34495e]" : "bg-[#34495]"}`
                    }> 
                    <h2 className="text-xl py-2">Flash Deals</h2>
                      
                </NavLink>
                <NavLink
                     to=""
                     className={({ isActive }) =>
                    `px-7 mt-3 flex justify-between items-center rounded cursor-pointer pl-14
                     ${isActive ? "bg-[#34495e]" : "bg-[#34495]"}`
                    }> 
                    <h2 className="text-xl py-2">Deal of the day</h2>
                      
                </NavLink>
                <NavLink
                     to=""
                     className={({ isActive }) =>
                    `px-7 mt-3 flex justify-between items-center rounded cursor-pointer pl-14
                     ${isActive ? "bg-[#34495e]" : "bg-[#34495]"}`
                    }> 
                    <h2 className="text-xl py-2">Featured Deal</h2>
                      
                </NavLink>
                <NavLink
                     to=""
                     className={({ isActive }) =>
                    `px-7 mt-3 flex justify-between items-center rounded cursor-pointer pl-14
                     ${isActive ? "bg-[#34495e]" : "bg-[#34495]"}`
                    }> 
                    <h2 className="text-xl py-2">Clearance Sale</h2>
                      
                </NavLink>
            </>
          )}



           {/*Notification*/}

         <div onClick={notificationToggole} className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>
             <IoIosNotifications    className='w-10 h-6' />
             <h2 className='text-xl  '>Notification </h2> 
             <FaChevronDown className='w-10 h-5 pr-0' /> 
              
        </div>

          {notification &&(
            <>
            
            <NavLink
                     to=""
                     className={({ isActive }) =>
                    `px-7 mt-3 flex justify-between items-center rounded cursor-pointer pl-14
                     ${isActive ? "bg-[#34495e]" : "bg-[#34495]"}`
                    }> 
                    <h2 className="text-xl py-2">Send Notification</h2>
                      
                </NavLink>
                <NavLink
                     to=""
                     className={({ isActive }) =>
                    `px-7 mt-3 flex justify-between items-center rounded cursor-pointer pl-14
                     ${isActive ? "bg-[#34495e]" : "bg-[#34495]"}`
                    }> 
                    <h2 className="text-xl py-2">Push Notification SetUp</h2>
                      
                </NavLink>
              
            </>
          )}
            


            {/*Announcement*/}
          <div  className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>
             <TfiAnnouncement    className='w-10 h-6' />
             <h2 className='text-xl  '>Announcement </h2>             
          </div>




          {/*Helps And Support*/}
          <h2 className='text-xl mt-7 pl-3 text-gray-400'>Helps & Support</h2>

          <div  className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>
             <MdForwardToInbox    className='w-10 h-6' />
             <h2 className='text-xl  '>Inbox </h2>             
          </div>

          <div  className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>
             <FaMessage    className='w-10 h-6' />
             <h2 className='text-xl  '>Messages </h2>             
          </div>

          <div  className='bg-[#34495] hover:bg-[#34495e] rounded mt-7 flex items-center py-2 pl-2 gap-3 cursor-pointer'>
             <FaHeadphones    className='w-10 h-6' />
             <h2 className='text-xl  '>Support Ticket </h2>             
          </div>


        


    </div> 
    
 )}
    





    <div className='bg-gray-100  flex-1 w-auto max-h-screen overflow-y-auto'> {/*right Sideber*/}
      <Outlet/>
    </div>


  </div>
   




  </>
)}
 
export default Navber