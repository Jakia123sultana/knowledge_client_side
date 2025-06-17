
 import { FaArrowRight } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router";


export default function PostCard({item}) {
console.log(item);
  return (
    <>
     <div className="card bg-base-100 w-90 h-90 shadow-sm">
  <figure>
    <img
      src={item.author_photo}
      className="w-86 "
       />
  </figure>
  <div className="card-body">
   <div className=" ">
    <div >
         <p className="text-xl font-bold mb-4 ">{item.title}</p>
   
      <p className="text-lg font-semibold opacity-80">{item.category}</p>
   
    </div>
      <div className="card-actions ">
 
        <div>
            
             
          <div>
                <p className=" font-bold opacity-55 text-lg">{item.date}</p> 
               
             

              
          </div>
        </div>
     </div>
    </div>
   </div>
    
 {/* <div className="flex justify-between">
      <AiOutlineLike size={28} className=" ml-8 mb-8"/>
       <p className="mr-8 text-xl">Comments</p>
    </div> */}
  </div>
 
    </>
  );
}
