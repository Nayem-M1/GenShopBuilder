import React, { useState } from 'react'

// import axios from 'axios';
// const response = await axios.post("http://192.168.0.113:8080/api/v1/category", {
//   categoryName,
 
// });
// console.log(response);

const AddCatagory = ({ addCategory, cancel }) => {
  
  const [formData, setFormData] = useState({
    title: "",
    id: "",
    priority: 0
  })

 const handleSubmit = (e) => {
  e.preventDefault();
  addCategory(formData); // Parent কে পাঠাচ্ছি
  setFormData({ title: "", id: "", priority: 0 }); // form reset
  cancel(); // modal close
 
}

  return (

     <div className="p-10 bg-white rounded-2xl m-5">
      <h2 className="text-3xl font-semibold mb-5">Add New Category</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
            <input
            type="text"
            placeholder="Title"
            className="border p-2 rounded"
            onChange={(e)=>setFormData({...formData,title:e.target.value})}
            />

            <input
            type="text"
            placeholder="ID"
            className="border p-2 rounded"
            onChange={(e)=>setFormData({...formData,id:e.target.value})}
            />

            <input
            type="number"
            placeholder="Priority"
            className="border p-2 rounded"
            onChange={(e)=>setFormData({...formData,priority:e.target.value})}
            />

            <button className="bg-[#344953] text-white py-2 rounded cursor-pointer">
            Save Category
            </button>
        </form>
    </div>
  )
}

export default AddCatagory