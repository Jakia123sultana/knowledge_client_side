import React from 'react';
import { Link } from 'react-router';
import { FiTag } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
const JobCard = ({item}) => {
    console.log(item)
    const {tags} = item;
  return (
   <div className='w-140 mx-auto p-4 rounded-lg shadow font-sans bg-white py-14 px-10'>
 <div className='flex items-center space-x-3'>
  <img src={item.author_photo} className='w-10 h-10 rounded-full'/>
  <div>
    <p className='font-medium text-sm'>{item.author_name}</p>
       <p className='font-medium text-sm '>{item.date}</p>
  </div>
 </div>
 <h1 className='mt-4 text-xl font-bold'>
 {item.title}
 </h1>
 <div className='mt-4 flex flex-wrap gap-2 text-sm'>
  {
    tags?.map(tag=>{
      return (
        <span className='text-gray-500 flex items-center gap-1 bg-gray-100 px-4 py-1 rounded-full'>
        <FiTag className="text-gray-400"/>{tag}</span>
      )
    })
  }

 </div>
     <div className="flex mt-6"> 
                     <FaArrowRight size={16} className="mt-1 mr-4 text-gray-500"/>
             
                 <Link to={`/card-details/${item._id}`} className="text-base font-semibold text-gray-500">Read More</Link></div>
 
              
   </div>
  );
};


export default JobCard;