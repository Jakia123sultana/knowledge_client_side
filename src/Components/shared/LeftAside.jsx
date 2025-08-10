// import React, { Suspense } from "react";

// import { NavLink } from "react-router";

// const LeftAside = ({categoriesdata,onFilter}) => {
//     const uniqueCategories = [
//     ...new Set(categoriesdata.map((category) => category.category)),
//   ];

//   return (
//     <div>

//       <h2 className="font-bold text-center text-xl text-white mb-8"><span className="text-[#00CED1] ">Filtered</span> by Category </h2>

//       <div className="grid gap-3 lg:grid-cols-1 grid-cols-4 ">
//           <button 
//             className={
//               "font-bold text-[#00CED1] border border-[#00CED1] rounded-2xl px-8 py-2"
//             } onClick={()=> onFilter(null)}>Show All</button>
//         {uniqueCategories.map((category,idx) => (
        
           
//            <button  key={idx}
//             className={
//               "font-bold text-[#00CED1] border border-[#00CED1] rounded-2xl px-8 py-2"
//             } onClick={()=> onFilter(category)}>{category}</button>

          
            
       
//         ))}
      

//       </div>
      
    
//     </div>
 

    
    
  

//   );
// };

// export default LeftAside;

// // import React from "react";
// // import { NavLink } from "react-router"; // ✅ Correct package

// // const LeftAside = ({ categoriesdata }) => {
// //   // Get unique categories using Set
// //   const uniqueCategories = [
// //     ...new Set(categoriesdata.map((category) => category.category)),
// //   ];

// //   return (
// //     <div>
// //       <h2 className="font-bold text-center">
// //         All Categories ({uniqueCategories.length})
// //       </h2>
// //       <div className="grid grid-cols-1 mt-5 gap-3">
// //         {uniqueCategories.map((category, index) => (
// //           <NavLink
// //             key={index}
// //             className="btn bg-base-100 border-0 hover:bg-base-200 font-bold text-blue-800"
// //             to={`/knowledges/${category}`}
// //           >
// //             {category}
// //           </NavLink>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default LeftAside;
// LeftAside.jsx
import React from "react";
import PropTypes from "prop-types";

const LeftAside = ({ categoriesdata, onFilter }) => {
  // Extract unique categories from articles array
  const uniqueCategories = [
    ...new Set(categoriesdata.map((c) => c.category).filter(Boolean)),
  ];

  return (
    <aside className="sticky top-0 self-start bg-black  rounded-md shadow-md">
      <h2 className="font-bold text-center text-xl text-white mb-8">
        <span className="text-[#00CED1]">Filtered</span> by Category
      </h2>
      <div className="grid gap-3 lg:grid-cols-1 grid-cols-4">
        <button
          className="font-bold text-[#00CED1] border border-[#00CED1] rounded-2xl px-8 py-2 hover:bg-[#00CED1] hover:text-black transition-colors"
          onClick={() => onFilter(null)}
          type="button"
        >
          Show All
        </button>
        {uniqueCategories.map((category, idx) => (
          <button
            key={category + idx}
            className="font-bold text-[#00CED1] border border-[#00CED1] rounded-2xl px-8 py-2 hover:bg-[#00CED1] hover:text-black transition-colors"
            onClick={() => onFilter(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
};

LeftAside.propTypes = {
  categoriesdata: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default LeftAside;
