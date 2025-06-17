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

export default function Home() {
  const items = useLoaderData();
  const [categoriesdata, setCategoriesdata] = useState(items);

  return (
    <>
      <div className="mx-auto max-w-5xl">
        <Banner />
      </div>
      <div>
        <Posts />
      </div>

      <div className="mt-22 mb-22">
        <Category categoriesdata={categoriesdata} />
      </div>
      <div className="lg:flex justify-between gap-4 pb-20">
        <div className="w-2/5 mb-20">
          <TopContributors />
        </div>
        <div className="w-1/2 ">
          <Collaps />
        </div>
      </div>
    </>
  );
}
