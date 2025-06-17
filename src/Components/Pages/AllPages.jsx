
import { useLoaderData, useParams } from "react-router";
// import Card from "./CategoriesData/Card";
import Page from "./CategoriesData/Page";
import { useEffect, useState } from "react";
import LeftAside from "../shared/LeftAside";
import RightAside from "../shared/RightAside";
import JobCard from "./CategoriesData/JobCard";


export default function AllPages() {
 const allArticles = useLoaderData();
 const [articles,setArticles] = useState(allArticles);

const filterArticles = async (category)=>{

         
       
  const url = category? `https://knowledge-server-side-chi.vercel.app/knowledges?category=${category}`
  :`https://knowledge-server-side-chi.vercel.app/knowledges`;
   const res = await fetch(url);
   const data = await res.json();
   setArticles(data)
}
  return (
    <>
   
   <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5 mt-12">
        <aside className="col-span-3 sticky top-0 h-fit">
         <LeftAside categoriesdata={allArticles} onFilter={filterArticles}/>
        </aside>
        <section className="main col-span-6">
         
           <div className="flex flex-col gap-8">
            {
              articles.map(item=>(
                <JobCard item={item}/>
              ))
            }
           </div>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
        <RightAside/>
        </aside>
      </main> 
    </>
  );
}

AllPages.jsx

