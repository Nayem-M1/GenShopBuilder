import React, { useState } from 'react'
import { GrCatalog } from "react-icons/gr";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
//import Catagory from  "../../Json/Catagory.json"  
import {  useNavigate, useSearchParams, } from 'react-router';
import AddCatagory from "../../Components/AddCatagory";
import Export from '../../Components/Export';
import { MdOutlineDownload } from "react-icons/md";
import all from "../../Json/OrdersJson/All.json"


const All = () => {
  
  //Data State
  const [data, setData] = useState(all);

  
    //Search Catagory
    const[searchParams,setSearchParams]=useSearchParams();
    const searchQuery=searchParams.get("q") || "";
    const [searchTerms,setSearchTerms]=useState(searchQuery)

    const filterdata= data.filter(item=>item.customerInfo.toLowerCase().includes(searchTerms.toLowerCase()))

    const handleSearch=(event)=>{
      event.preventDefault();
      setSearchParams({q:searchTerms})
    }
   
    //Add Catagory
     const navigate = useNavigate();
     const [showForm, setShowForm] = useState(false)

     const handleAddCategory = (newCategory) => {
      setData([...data, { ...newCategory, sl: data.length + 1 }]); // new category add
      };

      //Export
     const[exporttt,setExporttt]=useState(false)
      const handleExport=()=>{
        setExporttt(true)
      }
    


  return (
    <div className='text-2xl max-h-screen  bg-gray-100   '>

        {/*First Div*/}
      <div className='flex items-center gap-5  rounded p-7'> 
        <GrCatalog className='h-10 w-10 text-red-950  '/>
        <h1 className='text-4xl font-semibold  '>All Orders</h1>
      </div>

      {/*second Div*/}
      <div className=' bg-white rounded-2xl pr-7 pt-10 ml-5 mr-5 pl-7 mb-10'>
        <h3 className='font-semibold'>Current Order summary</h3>

        <di className="grid grid-cols-4 gap-4 py-5">
            <div className='bg-gray-100 rounded-xl p-5 font-semibold'>Pending</div>
            <div className='bg-gray-100 rounded-xl p-5 font-semibold'>Confirmed</div>
            <div className='bg-gray-100 rounded-xl p-5 font-semibold'>Packing</div>
            <div className='bg-gray-100 rounded-xl p-5 font-semibold'>Out of Delivery</div>
            <div className='bg-gray-100 rounded-xl p-5 font-semibold'>Deliverd</div>
            <div className='bg-gray-100 rounded-xl p-5 font-semibold'>Cancle</div>
            <div className='bg-gray-100 rounded-xl p-5 font-semibold'>Returned</div>
            <div className='bg-gray-100 rounded-xl p-5 font-semibold'>Failed to Delivered</div>
            
        </di>
      </div>


      {/*Main white Parent Div*/}
    <div className="min-h-screen overflow-y-auto w-auto bg-white rounded-2xl pr-7 ml-5 mr-5 " >
        
      
        <div className='flex justify-between items-center '> {/*Third Div*/}
            <div>
             <h1 className='text-3xl font-semibold p-7'>Order List <span className='text-xl bg-red-900 rounded-full px-2 text-white'>{data.length}</span> </h1>
            </div>

            <div className='flex gap-3'>

               <div>   {/*catagory Search*/}  

                  <input
                  value={searchTerms}
                  onChange={(e)=>{setSearchTerms(e.target.value);  setSearchParams({q:e.target.value})} }
                  
                  className='bg-gray-100 p-2 rounded-xl shadow-xl' type='text' placeholder='Search product...'/>
               </div>


                 {/*Export*/}
                <button 
                 onClick={handleExport}
                className='bg-gray-100 border-2 border-[#344953] px-5 py-2 shadow-xl rounded-xl hover:bg-[#344953] text-red-900 
                font-semibold cursor-pointer'>Export</button>
                {exporttt &&(
                  <div className=' fixed inset-0 bg-black/40 flex justify-center items-center z-50'>
                    <Export cancel={() => setExporttt(false)} />
                  </div>
                )}




              <div> {/*Add Catagory*/}               
                <button
                onClick={() => setShowForm(true)} 
                className='bg-[#344953] border border-[#344953] px-5 py-2  hover:shadow-xl rounded-xl text-white cursor-pointer'> +Add Catagory
                </button>  
              </div>
              {showForm && (

              <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                <AddCatagory  addCategory={handleAddCategory}   cancel={() => setShowForm(false)}   />
              </div>
             )}
                        



            </div>
        </div>

        <div> {/*Main Menu Section*/}


          <ul className='flex   items-center justify-center bg-gray-100 py-3 pl-7 pr-12 mr-10 ml-7 rounded font-semibold'>
            <li>SL</li>
            <li className='pl-18'>OrderID</li>
            <li className='pl-20'>OrderDate</li>
            <li className='pl-30'>CustomerInfo</li>
            <li className='pl-32'>Store</li>
            <li className='pl-26'>Total Amount</li>
            <li className='pl-10'>OrderStatus</li>
            <li className='pl-10'>Action</li>
          </ul>

        </div>

        {/*import data from json*/}

        <div className=' max-h-[650px] overflow-y-scroll mb-20'>
            {
            filterdata.map((index)=>

         <div key={index.sl}>
          <ul className='flex text-xl  items-center  bg-white hover:gray-100 py-3 px-7 mr-5 ml-7 rounded    '>

             {/*SL Number*/}
            <div className=' p-3 w-10'>
              <li>{index.sl}</li> 
            </div>
             {/*Order ID*/}
            <div className='p-1 w-24  ml-14'>
              <li>{index.orderId}</li>
            </div>
              {/*Order Date */}
              <div className='ml-14'>
                <p className='p-1 w-48'>{index.orderDate} {index.orderTime}</p>
               
              </div>
              {/*Customer Info*/}
              <div className='ml-12'>
               
   
                <p className=' w-56'>{index.customerInfo}  {index.phone}</p>
              </div>
               {/*store*/}
              <div className=' w-40  ml-10'>
               <li>{index.store}</li>
              </div>
              

          

            <div className='w-28  ml-5  '><li className='ml-'>{index.totalAmount}</li></div>
           <div > <p className='ml-11 mr-9 w-30 text-green-900 bg-green-400 flex justify-center items-center rounded p-1'>{index.orderStatus}</p></div>

            <li className='flex items-center gap-5 ml- '>
              <div className='border border-green-700 p-1 rounded hover:shadow-xl cursor-pointer'> {/*View icon*/}
                 <MdOutlineRemoveRedEye className=' w-8 h-8 text-green-700'/>
              </div>
              <div className='border border-green-700 p-1 rounded hover:shadow-xl cursor-pointer'> {/*Download icon*/}
                <MdOutlineDownload  className=' w-8 h-8 text-green-700' />
              </div>

            </li>

          </ul>
        </div>


        )}

        </div>
        
         

        
      </div> {/*End Main White Div*/}


    </div>
  )
}

export default All