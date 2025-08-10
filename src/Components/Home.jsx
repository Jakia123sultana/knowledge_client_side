import {useLoaderData} from "react-router";
// import Categories from "./Categories";
import Banner from "./shared/Banner";
import LeftAside from "./shared/LeftAside";
import RightAside from "./shared/RightAside";
import PostCard from "./PostCard";
import Posts from "./shared/Posts";
import {useState} from "react";
import Category from "./shared/Category";
import TopContributors from "./Pages/TopContributors";
import Collaps from "./Pages/collaps";
import CategoryGrid from "./shared/CategoryGrid";
import AnimateCart from "./shared/AnimateCard";
import Top_Contributions from "./shared/Top_Contributions";
import MarqueeWithIcons from "./shared/MarqueeWithIcons";

export default function Home() {
  const items = useLoaderData();
  const [categoriesdata, setCategoriesdata] = useState(items);

  return (
    <>
      <div className="mx-auto ">
       <div className="mx-auto max-w-[97%]">
        <Banner />
        </div>
        {/* <div className="mx-auto max-w-[97%]">
          <CategoryGrid/>
        </div> */}
      </div>
      <div>
        <Posts />
      </div>

      <div className="mt-22 mb-22">
        <Category categoriesdata={categoriesdata} />
      </div>
      <div>
        <AnimateCart/>
      </div>
      <div className="mx-auto max-w-[80%]">
        <Top_Contributions/>
      </div>
      <div className="mx-auto max-w-[80%] mt-10 mb-10">
         <h1 className="text-xl md:text-2xl font-bold text-white mb-6">Our <span className="text-[#00CED1]">Features</span></h1>
        <MarqueeWithIcons/>
      </div>
      <div className="lg:flex justify-center gap-8 pb-12 mx-auto w-[90%] ">
        <div className="w-full lg:w-2/5 mb-10 lg:mb-20"> 
          <TopContributors />
        </div>
        <div className="w-full lg:w-1/2">
          <Collaps />
        </div>
      </div>
    </>
  );
}
