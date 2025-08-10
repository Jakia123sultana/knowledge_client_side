import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";
import {
  FiActivity,
  FiServer,
  FiBriefcase,
  FiHome,
  FiHeart,
  FiPenTool,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight
} from "react-icons/fi";

export default function CategoryGrid() {
  const C = {
    BG: "#04181A",
    CARD_BG: "#061F21",
    CARD_BORDER: "rgba(255,255,255,0.03)",
    ICON_BG: "#002B2C",
    ICON_RING: "rgba(2,171,178,0.08)",
    ACCENT: "#00D1C9",
    ACCENT_LIGHT: "#00CED1",
    TITLE: "#E9FEFE",
    MUTED: "#8FB8B8",
    BTN: "#00C6BF",
  };

const categories = [
  { 
    id: 1, 
    title: "Medical & Nurse", 
    jobs: 14, 
    icon: <FiActivity style={{ color: "#00CED1", fontSize: "20px" }} /> 
  },
  { 
    id: 2, 
    title: "Development", 
    jobs: 15,  // Corrected from 55 to match your image
    icon: <FiServer color="#00CED1" size={20} /> 
  },
  { 
    id: 3, 
    title: "Marketing & Sales", 
    jobs: 25,  // Corrected from 20 to match your image
    icon: <FiBriefcase color="#00CED1" size={20} /> 
  },
  { 
    id: 4, 
    title: "Architecture", 
    jobs: 10, 
    icon: <FiHome color="#00CED1" size={20} /> 
  },
  { 
    id: 5, 
    title: "Non-Profit", 
    jobs: 14, 
    icon: <FiHeart color="#00CED1" size={20} /> 
  },
  { 
    id: 6, 
    title: "Creative Design", 
    jobs: 44, 
    icon: <FiPenTool color="#00CED1" size={20} /> 
  },
];

  const scrollerRef = useRef(null);
function scroll(dir = "right") {
  const el = scrollerRef.current;
  if (!el) return;
  
  // Calculate scroll amount for exactly 2 cards (card width + gap)
  const cardWidth = 320; // Your card width
  const gap = 20; // Estimated gap between cards (adjust if different)
  const scrollAmount = (cardWidth + gap) * 2;
  
  el.scrollBy({ 
    left: dir === "left" ? -scrollAmount : scrollAmount, 
    behavior: "smooth" 
  });
}
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.style.scrollBehavior = "smooth";
    el.style.msOverflowStyle = "none";
    el.style.scrollbarWidth = "none";
    el.style.overflowY = "hidden";
  }, []);

  // Replace your existing container and item variants with these:
const container = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.15, // Increased from original 0.06
      delayChildren: 0.3    // Added delay
    } 
  },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 120,    // Reduced from 220
      damping: 12,       // Reduced from 22
      mass: 0.8,         // Added mass
      duration: 1        // Added duration (seconds)
    },
  },
};

  return (
    <section  className="w-full bg-black rounded-2xl">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header with arrows */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: C.TITLE }}
            >
              Popular <span style={{ color: C.ACCENT_LIGHT }}>Category</span> List
            </h3>
            <p className="text-sm mt-1" style={{ color: C.MUTED }}>
              To choose your trending job dream &amp; to make future bright.
            </p>
          </div>
         <div className="hidden md:flex gap-0.5"> {/* Reduced from gap-0 to gap-0.5 for minimal spacing */}
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

        {/* Horizontal scroller */}
        <motion.div
          ref={scrollerRef}
          variants={container}
          initial="hidden"
          animate="show"
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-2 pb-2 md:px-6 md:pb-4"
        >
          {categories.map((c) => (
            <motion.article
              key={c.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="snap-start flex-shrink-0 rounded-2xl border-2 p-2"
              style={{
                width: 320,
                background: C.CARD_BG,
                border: `1px solid ${C.CARD_BORDER} `,
                padding: 22,
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle at 35% 30%, ${C.ICON_RING}, transparent 40%), ${C.ICON_BG}`,
                    border: `1px solid rgba(255,255,255,0.02)`,
                    boxShadow: "inset 0 -6px 18px rgba(0,0,0,0.5)",
                  }}
                >
                  {React.cloneElement(c.icon, { size: 18, color: C.ACCENT })}
                </div>

                <div style={{ flex: 1 }}>
                  <h4
                    className="font-semibold text-lg"
                    style={{ color: C.TITLE }}
                  >
                    {c.title}
                  </h4>
                  <p className="text-sm mt-1" style={{ color: C.MUTED }}>
                    {c.jobs} Jobs Available
                  </p>
                </div>

                <div className="flex items-center">
                  <button
                    aria-label={`view-${c.id}`}
                    className="rounded-full p-2"
                    style={{
                      border: `1px solid ${C.CARD_BORDER}`,
                      background: "transparent",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke={C.MUTED}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    
    </section>
  );
}
