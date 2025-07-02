import React, { Suspense } from "react";

import { NavLink } from "react-router";

const Category = ({categoriesdata}) => {
    const uniqueCategories = [
    ...new Set(categoriesdata.map((category) => category.category)),
  ];

  return (
    <div>
  <div>
      <h2 className="font-semibold  mt-12 text-3xl text-blue-800 text-center mb-12">All Category </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {uniqueCategories.map((category,idx) => (
          <NavLink
            key={idx}
            className={
              "btn border-0 hover:bg-blue-100 font-bold text-blue-900 text-xs sm:text-sm md:text-base"
            }
            to={`/knowledges/${category}`}
          >
            {category}
          </NavLink>
        ))}
      </div>
    </div>

    
    </div>
  );
};

export default Category;