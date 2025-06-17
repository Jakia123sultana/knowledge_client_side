import { useEffect, useState } from "react";

import { SwiperSlide } from "swiper/react";
import Swipp from "./Swipp";
import {Swiper} from 'swiper/react';
import{Navigation,Pagination,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TopContributors() {
    const [posts,setPosts] = useState([]);
    console.log(posts)
     useEffect(() => {
    fetch("https://knowledge-server-side-chi.vercel.app/knowledges")
      .then((res) => res.json())
      .then((data) => {
        const authorMap = {};
        data.forEach((post)=>{
            const email = post.author_email;
            if(!authorMap[email]){
                authorMap[email] = {
                    name:post.author_name,
                    email:post.author_email,
                    photo:post.author_photo,
                    count:1,
                };
            }else{
                authorMap[email].count += 1;
            }
        });
        const storedContributor = (Object.values(authorMap)
  .sort((a,b)=>b.count-a.count)
  .slice(0,2))
        setPosts(storedContributor);
     
      });
  }, []);


  return (
    <div >
   
       <div >
      <h1 className="font-semibold  mt-12 text-3xl text-blue-800 pt-8">
       Top Contribution
      </h1>
      <hr className="w-[200px] mb-4 mt-2"></hr>
      <div className="w-full max-w-4xl mx-auto mt-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{delay: 3000, disableOnInteraction: false}}
          pagination={{clickable: true}}
          navigation={true}
         
        >
          {posts.map((c,index)=>(
         <SwiperSlide key={index}>
            
                <div className=" bg-gray-100 p-10 rounded-xl shadow text-center">
                  <img src={c.photo} alt={c.name}  className="w-20 h-20 rounded-full mx-auto mb-3 border"/>
                <div>
                  <p>{c.name}</p>
                  <p>{c.email}</p>
                  <p className="text-blue-800 font-bold">Post :{c.count}</p>
                </div>
                </div>


           
          </SwiperSlide>
          ))}
       
  
        </Swiper>
      </div>
    </div>
      
    </div>
  );
}


