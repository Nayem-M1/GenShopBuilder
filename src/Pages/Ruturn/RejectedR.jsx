import React, { useState } from 'react'
import { GrCatalog } from "react-icons/gr";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import {  useNavigate, useSearchParams, } from 'react-router';
import AddCatagory from "../../Components/AddCatagory";
import Export from '../../Components/Export';
import { MdOutlineDownload } from "react-icons/md";
import all from "../../Json/RefundJson/RejectedR.json"
import { MdOutlineDoneOutline } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";


const RejectedR = () => {
  
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
        <h1 className='text-4xl font-semibold  '>Rejected orders</h1>
      </div>

    


      {/*Main white Parent Div*/}
    <div className="min-h-screen overflow-y-auto w-auto bg-white rounded-2xl pr-7 ml-5 mr-5 " >
        
      
        <div className='flex justify-between items-center '> {/*Third Div*/}
            <div>
             <h1 className='text-3xl font-semibold p-7'>Rejected List <span className='text-xl bg-red-900 rounded-full px-2 text-white'>{data.length}</span> </h1>
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
                className='bg-gray-100 border-2 border-[#344953] px-10 py-2 shadow-xl rounded-xl hover:bg-[#344953] text-red-900 
                font-semibold cursor-pointer'>Export</button>
                {exporttt &&(
                  <div className=' fixed inset-0 bg-black/40 flex justify-center items-center z-50'>
                    <Export cancel={() => setExporttt(false)} />
                  </div>
                )}

                {/*Filter*/}
                <button 
                 
                className='bg-gray-100 border-2 border-[#344953] px-10 py-2 shadow-xl rounded-xl hover:bg-[#344953] text-red-900 
                font-semibold cursor-pointer'>Filter</button>




      
                        



            </div>
        </div>

        <div> {/*Main Menu Section*/}


          <ul className='flex   items-center justify-between   bg-gray-100 py-3 pl-7 pr-12 mr-10 ml-7 rounded font-semibold'>
            <li>SL</li>
            <li className='pl-12'>RefundID</li>
            <li className='pl-10'>OrderID</li>
            <li className='pl-20'>ProductInfo</li>
            <li className='pl-50'>CustomerInfo</li>
            <li className='pl-26'>Total Amount</li>
            <li className='pl-20'>Action</li>
          </ul>

        </div>

        {/*import data from json*/}

        <div className=' max-h-[650px] overflow-y-scroll mb-20'>
            {
            filterdata.map((index)=>

         <div key={index.sl}>
          <ul className='flex text-xl  items-center justify-between   bg-white hover:gray-100 py-3 px-7 mr-5 ml-7 rounded    '>

             {/*SL Number*/}
            <div className=' p-3 w-10 '>
              <li>{index.sl}</li> 
            </div>

             {/*Refund ID*/}
            <div className='p-1 w-24  ml-7 '>
              <li>{index.refundId}</li>
            </div>
             {/*Order ID*/}
            <div className='p-1 w-24  ml-12'>
              <li>{index.orderId}</li>
            </div>
              {/*ProductInfo */}
              <div className='ml-12 flex gap-2 items-center w-80 overflow-hidden'>
                <div><img src={index.image}  className='w-10 h-12 object-cover' /></div>
                <div>
                  <p>{index.productInfo}</p>
                  <p>Quantity: {index.quentity}</p>
                </div>
               
              </div>

              {/*Customer Info*/}
              <div className='ml-10  overflow-hidden'>
               
              <p className=' w-58'>{index.customerInfo}  {index.phone}</p>
              </div>
               
              

          

            <div className='w-28  ml-12  '><li className='ml-'>{index.totalAmount}</li></div>
           
               {/*icons*/   }
            <li className='flex items-center gap-5 ml-10'>
              <div className='border border-green-700 p-1 rounded hover:shadow-xl cursor-pointer'> {/*View icon*/}
                 <MdOutlineRemoveRedEye className=' w-8 h-8 text-green-700'/>
              </div>
              
              <div className='border border-red-700 p-1 rounded hover:shadow-xl cursor-pointer'> {/*Refresh icon*/}
                <FiRefreshCcw  className=' w-8 h-8 text-red-700' />
              </div>
               <div  className='border border-green-700 p-1 rounded hover:shadow-xl cursor-pointer'> {/*Download icon*/}
                <MdOutlineDoneOutline  className=' w-8 h-8 text-green-700' />
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

export default RejectedR