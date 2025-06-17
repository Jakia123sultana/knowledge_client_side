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
      <div className="grid lg:grid-cols-6 grid-cols-3 mt-5 gap-3">
        {uniqueCategories.map((category,idx) => (
          <NavLink
            key={idx}
            className={
              "btn  border-0 hover:bg-blue-100 font-bold text-blue-900"
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