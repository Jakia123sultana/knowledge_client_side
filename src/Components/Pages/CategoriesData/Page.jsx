import { FaArrowRight } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router";


export default function Page({item}) {
console.log(item);
  return (
    <>
     <div className="card bg-base-100 w-100 shadow-sm">
  <figure>
    <img
      src={item.author_photo}
      className="w-86 h-4/5"
       />
  </figure>
  <div className="card-body">
   <div className="flex justify-between ">
    <div className="w-3/5">
         <p className="text-lg font-semibold mb-4 opacity-90">{item.title}</p>
   
      <p className="text-xl font-semibold opacity-80">{item.category}</p>
   
    </div>
      <div className="card-actions justify-end">
 
        <div>
              <div className="flex">
             
          <div>
                <p className="mb-8">Buy Now</p> 
               
                 <div className="flex mt-14"> 
                    <FaArrowRight size={16} className="mt-1 mr-4 text-gray-500"/>
            
                <p className="text-base font-semibold text-gray-500">Read More</p></div>

              </div>
          </div>
        </div>
     </div>
    </div>
   </div>
    
 <div className="flex justify-between">
      <AiOutlineLike size={28} className=" ml-8 mb-8"/>
       <p className="mr-8 text-xl">Comments</p>
    </div>
  </div>
 
    </>
  );
}