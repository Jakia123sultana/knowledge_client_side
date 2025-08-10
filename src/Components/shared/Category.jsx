// import React, { Suspense } from "react";

// import { NavLink } from "react-router";

// const Category = ({categoriesdata}) => {
//     const uniqueCategories = [
//     ...new Set(categoriesdata.map((category) => category.category)),
//   ];

//   return (
//     <div>
//   <div>
//       <h2 className="font-semibold  mt-12 text-3xl text-blue-800 text-center mb-12">All Category </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
//         {uniqueCategories.map((category,idx) => (
//           <NavLink
//             key={idx}
//             className={
//               "btn border-0 hover:bg-blue-100 font-bold text-blue-900 text-xs sm:text-sm md:text-base"
//             }
//             to={`/knowledges/${category}`}
//           >
//             {category}
//           </NavLink>
//         ))}
//       </div>
//     </div>

    
//     </div>
//   );
// };

// export default Category;
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router';
import { 
  FiActivity, FiServer, FiBriefcase, FiHome, FiHeart, FiPenTool 
} from 'react-icons/fi';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';

// Map category names to icons
const categoryIcons = {
  'All News': <FiActivity size={18} color="#00CED1" />,
  'Health': <FiActivity size={18} color="#00CED1" />,
  'Travel': <FiActivity size={18} color="#00CED1" />,
  'Technology': <FiServer size={18} color="#00CED1" />,
  'Finance': <FiBriefcase size={18} color="#00CED1" />,
  'Career': <FiBriefcase size={18} color="#00CED1" />,
  'Programming': <FiServer size={18} color="#00CED1" />,
  'Mental Health': <FiHeart size={18} color="#00CED1" />,
  'Environment': <FiHome size={18} color="#00CED1" />,
  'Design': <FiPenTool size={18} color="#00CED1" />,
  'Education': <FiActivity size={18} color="#00CED1" />,
};

const Category = ({ categoriesdata }) => {
  // Extract unique categories (objects) by category name
  const uniqueCategoriesMap = new Map();
  categoriesdata.forEach(cat => {
    if (!uniqueCategoriesMap.has(cat.category)) {
      uniqueCategoriesMap.set(cat.category, cat);
    }
  });
  const uniqueCategories = Array.from(uniqueCategoriesMap.values());

  const scrollerRef = useRef(null);

  const scroll = (dir = 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 320;
    const gap = 20;
    const scrollAmount = (cardWidth + gap) * 2;
    el.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.style.scrollBehavior = 'smooth';
    el.style.msOverflowStyle = 'none';
    el.style.scrollbarWidth = 'none';
    el.style.overflowY = 'hidden';
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18, scale: 0.985 },
    show: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 12, mass: 0.8, duration: 1 },
    },
  };

  return (
    <section className="w-full bg-black rounded-2xl">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header with scroll arrows */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
             All <span className="text-cyan-400">Category</span> List
            </h3>
            <p className="text-sm mt-1 text-gray-400">
              Choose your trending job dream &amp; make your future bright.
            </p>
          </div>
          <div className="hidden md:flex gap-0.5">
             <motion.button
               aria-label="scroll-left"
               whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               onClick={() => scroll("left")}
               className="flex items-center justify-center rounded-full p-2"
             >
               <span className="relative flex items-center">
                 {/* Arrow */}
                 <FaArrowLeftLong size={18} className="text-cyan-400 relative z-10" />
                 {/* Outer Circle - shifted right so half covers arrow */}
                 <span className="absolute right-2 rounded-full border border-cyan-400 w-6 h-6"></span>
               </span>
             </motion.button>
            <motion.button
               aria-label="scroll-right"
               whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               onClick={() => scroll("right")}
               className="flex items-center justify-center rounded-full p-2"
             >
               <span className="relative flex items-center">
                 {/* Arrow */}
                 <FaArrowRightLong size={18} className="text-cyan-400 relative z-10" />
                 {/* Outer Circle - shifted left so half covers arrow */}
                 <span className="absolute left-2 rounded-full border border-cyan-400 w-6 h-6"></span>
               </span>
             </motion.button>
          </div>
        </div>

        {/* Scrollable category cards */}
        <motion.div
          ref={scrollerRef}
          variants={container}
          initial="hidden"
          animate="show"
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-2 pb-2 md:px-6 md:pb-4"
        >
          {uniqueCategories.map((category, idx) => (
            <motion.article
              key={idx}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="snap-start flex-shrink-0 rounded-2xl border-2 p-2"
              style={{
                width: 320,
                background: '#061F21',
                border: '1px solid rgba(255,255,255,0.03)',
                padding: 22,
                boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      'radial-gradient(circle at 35% 30%, rgba(2,171,178,0.08), transparent 40%), #002B2C',
                    border: '1px solid rgba(255,255,255,0.02)',
                    boxShadow: 'inset 0 -6px 18px rgba(0,0,0,0.5)',
                  }}
                >
                  {categoryIcons[category.category] || <FiActivity size={18} color="#00CED1" />}
                </div>

                <div style={{ flex: 1 }}>
                  <h4 className="font-semibold text-lg text-white">{category.category}</h4>
                  <p className="text-sm mt-1 text-gray-400">Jobs Available</p>
                </div>

                <div className="flex items-center">
                  <NavLink
                    to={`/knowledges/${category.category}`}
                    className="rounded-full p-2"
                    style={{
                      border: '1px solid rgba(255,255,255,0.03)',
                      background: 'transparent',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#8FB8B8"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Category;
