import { animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Card({card}) {
 

  const [value,setValue] =useState(0)
  useEffect(()=>{
    const controls = animate(0,card.end,{
      duration:8,
      onUpdate:(v)=>setValue(Math.floor(v)),
    })
    return ()=>controls.stop();
  },[card.end])
    return (
    <>
    <div className="  w-full shadow-sm flex gap-0 text-white">
 <div>
    <div className="mt-6">{card.icon}</div></div>
 
    <div className="card-body items-center text-center mr-16">
    <h2 className="font-bold text-xl">{value.toLocaleString()}K+</h2>
    <p className="text-lg">{card.title}</p>

  </div>
  
</div>
    </>
  );
}