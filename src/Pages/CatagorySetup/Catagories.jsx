import React, { useEffect, useState } from 'react'
import { GrCatalog } from "react-icons/gr";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
//import Catagory from  "../../Json/CatagoryJson/Catagory.json"  
import {  useNavigate, useSearchParams, } from 'react-router';
import AddCatagory from "../../Components/AddCatagory";
import Export from '../../Components/Export';


const Catagories = () => {

  //Delete Array
   const[data,setData]=useState([ ])

    const deleteTask = (id) => {
       
        //  const filteredData = data.filter((item) => item._id !== i)
        //  setData(filteredData)
        setData((prevData) => prevData.filter((item) => item._id !== id));
   }


   //Data import fron api
   useEffect(()=>{
    (async()=>{
      let response=await fetch("http://192.168.0.113:8080/api/v1/category")
      let result=await response.json();
      setData(result.data)
     })()
   },[])
    //Search Catagory
    const[searchParams,setSearchParams]=useSearchParams();
    const searchQuery=searchParams.get("q") || "";
    const [searchTerms,setSearchTerms]=useState(searchQuery)
    const filterData= data.filter(item=>item.categoryName?.toLowerCase().includes(searchTerms.toLowerCase()))

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

      <div className='flex items-center gap-5  rounded p-7'> {/*First Div*/}
        <GrCatalog className='h-10 w-10 text-red-950  '/>
        <h1 className='text-4xl font-semibold  '>Catagory Setup</h1>
      </div>


      {/*Main white Parent Div*/}
      <div className="min-h-screen overflow-y-auto w-auto bg-white rounded-2xl pr-7 ml-5 mr-5 relative" >
      
        <div className='flex justify-between items-center '> {/*Second Div*/}
            <div>
             <h1 className='text-3xl font-semibold p-7'>Catagory List <span className='text-xl bg-red-900 rounded-full px-2 text-white'>{data.length}</span> </h1>
            </div>

            <div className='flex gap-3'>

               <div>   {/*catagory Search*/}
                  <input
                  value={searchTerms}
                  onChange={(e)=>setSearchTerms(e.target.value)}
                  
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


          <ul className='flex  gap-16 items-center justify-center bg-gray-100 py-3 pl-7 pr-12 mr-10 ml-7 rounded font-semibold'>
            <li>SL</li>
            <li className='pl-34'>Catagory</li>
            <li className='pl-30'>Priority</li>
            <li className='pl-30'>Home Catagory Status</li>
            <li className='pl-28'>action</li>
          </ul>

        </div>

        {/*import data from json*/}

        <div className=' max-h-[650px] overflow-y-scroll'>

            {
            filterData.map((item,index)=>

         <div key={item._id}>
          <ul className='flex text-xl gap-16 items-center justify-center bg-white hover:gray-100 py-3 px-7 mr-5 ml-7 rounded    '>

            <div className=' p-3 w-10 overflow-hidden'>
              <li>{index + 1 }</li> {/*Index Number*/}
            </div>

              <div className='  flex items-center w-96 pl-18 overflow-hidden  '>
                 <li className=''> {/*title and id*/}
                  <div className='flex items-center gap-2'>
                     <img src = {item.categoryLogo} className='w-10 h-10 rounded-full'/>
                     <div>
                       <h3>{item.categoryName}</h3>
                       <p>{item._id}</p>
                     </div>
                  </div>
                </li>
            </div>

            <li className=''>{item.priority}</li>
            <div className='w-30 ml-42 '><li className=' '>{item.status}</li></div>

            <li className='flex items-center gap-5 pl-48 '>
              <div className='border border-blue-700 p-1 rounded hover:shadow-xl'>
                 <MdOutlineEdit className=' w-8 h-10 text-blue-700'/>
              </div>
              <div onClick={() => deleteTask(item._id  )} className='border border-red-700 p-1 rounded hover:shadow-xl'> {/*delete option*/}
                <AiOutlineDelete className=' w-8 h-10 text-red-700' />
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

export default Catagories