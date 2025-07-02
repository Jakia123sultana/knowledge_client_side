import React, { Suspense } from "react";

import { NavLink } from "react-router";

const LeftAside = ({categoriesdata,onFilter}) => {
    const uniqueCategories = [
    ...new Set(categoriesdata.map((category) => category.category)),
  ];

  return (
    <div>
  <div>
      <h2 className="font-bold text-center text-xl text-blue-900">Filtered by Category </h2>

      <div className="grid gap-3 lg:grid-cols-1 grid-cols-4 ">
          <button 
            className={
              "btn  border-0 hover:bg-blue-100 font-bold text-blue-900"
            } onClick={()=> onFilter(null)}>Show All</button>
        {uniqueCategories.map((category,idx) => (
        
           
           <button  key={idx}
            className={
              "btn   border-0 hover:bg-blue-100 font-bold text-blue-900"
            } onClick={()=> onFilter(category)}>{category}</button>

          
            
       
        ))}
      

      </div>
    </div>

    
    </div>
  );
};

export default LeftAside;

// import React from "react";
// import { NavLink } from "react-router"; // ✅ Correct package

// const LeftAside = ({ categoriesdata }) => {
//   // Get unique categories using Set
//   const uniqueCategories = [
//     ...new Set(categoriesdata.map((category) => category.category)),
//   ];

//   return (
//     <div>
//       <h2 className="font-bold text-center">
//         All Categories ({uniqueCategories.length})
//       </h2>
//       <div className="grid grid-cols-1 mt-5 gap-3">
//         {uniqueCategories.map((category, index) => (
//           <NavLink
//             key={index}
//             className="btn bg-base-100 border-0 hover:bg-base-200 font-bold text-blue-800"
//             to={`/knowledges/${category}`}
//           >
//             {category}
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LeftAside;
LeftAside.jsx

