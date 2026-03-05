import React, { useState } from 'react'

const Export = ({cancel}) => {
    const [exportt,setExportt]=useState(false)

    const handleExport=(e)=>{
        e.preventDefault()
        cancel();
    }


  return (

    <div className="p-10 bg-white rounded-2xl m-5">
        <h2 className='text-3xl semibold mb-5'>Export</h2>
        <form onSubmit={handleExport} className='flex flex-col gap-7'>
            <input className='p-4 text-xl border rounded'type='text' placeholder='product_01'/>
            <input className='p-4 text-xl border rounded 'type='text ' placeholder='product_02'/>
            <input className='p-4 text-xl border rounded 'type='text' placeholder='product_03'/>

            <button className='bg-[#344953] text-white py-2 rounded cursor-pointer'>Submit</button>

        </form>
    </div>

   


  )
}

export default Export