import { useLoaderData } from "react-router";
import Card from "./Card";

export default function CategoriesNews() {
    const data = useLoaderData();
    
  return (
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 max-w-6xl mx-auto">
     {
        data.map(cat=>{
            
             return <Card  cat={cat}/>
        })
     }
    </div>
  );
}