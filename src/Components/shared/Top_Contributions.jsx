import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

export default function TopContributors() {
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

  const [posts, setPosts] = useState([]);
  const scrollerRef = useRef(null);

  useEffect(() => {
    fetch("https://knowledge-server-side-chi.vercel.app/knowledges")
      .then((res) => res.json())
      .then((data) => {
        const authorMap = {};
        data.forEach((post) => {
          const email = post.author_email;
          if (!authorMap[email]) {
            authorMap[email] = {
              name: post.author_name,
              email: post.author_email,
              photo: post.author_photo,
              count: 1,
            };
          } else {
            authorMap[email].count += 1;
          }
        });
        const topContributors = Object.values(authorMap)
          .sort((a, b) => b.count - a.count)
          .slice(0, 12); // Get more items to scroll through
        setPosts(topContributors);
      });
  }, []);

  // Scroll by one column (one column = 2 stacked cards)
  function scroll(dir = "right") {
    const el = scrollerRef.current;
    if (!el) return;

    const cardWidth = 320;
    const gap = 20;
    const scrollAmount = cardWidth + gap; // one column width

    el.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
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
        stiffness: 120,
        damping: 12,
        mass: 0.8,
        duration: 1,
      },
    },
  };

  return (
    <section className="w-full bg-black rounded-2xl">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold" style={{ color: C.TITLE }}>
              Top <span style={{ color: C.ACCENT_LIGHT }}>Contributors</span>
            </h3>
            <p className="text-sm mt-1" style={{ color: C.MUTED }}>
              Recognizing the most active authors in our community.
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <motion.button
              aria-label="scroll-left"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
              className="flex items-center justify-center rounded-full p-2 border border-cyan-400"
            >
              <FaArrowLeftLong size={20} className="text-cyan-400" />
            </motion.button>

            <motion.button
              aria-label="scroll-right"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
              className="flex items-center justify-center rounded-full p-2 border border-cyan-400"
            >
              <FaArrowRightLong size={20} className="text-cyan-400" />
            </motion.button>
          </div>
        </div>

        {/* Cards container */}
        <motion.div
          ref={scrollerRef}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-flow-col grid-rows-2 gap-10 overflow-x-auto no-scrollbar px-2 pb-2 md:px-6 md:pb-4 ml-4"
          style={{
            maxHeight: 700,
           // Show exactly 2 columns (320*2 + 20 gap)
          }}
        >
          {posts.map((c) => (
            <motion.article
              key={c.email}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border-2 p-6 text-center"
              style={{
                background: C.CARD_BG,
                border: `1px solid ${C.CARD_BORDER}`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                width: 460, // Fixed card width
              }}
            >
              <div className="flex gap-5 justify-start items-center">
                <img
                  src={c.photo}
                  alt={c.name}
                  className="w-16 h-16 rounded-full border"
                />
                <div>
                  <h4 className="text-lg font-semibold" style={{ color: C.TITLE }}>
                    {c.name}
                  </h4>
                  <p className="text-sm" style={{ color: C.MUTED }}>
                    {c.email}
                  </p>
                </div>
              </div>
<div className="flex justify-between">
              <p className="mt-4 text-white font-semibold">Total Posts: {c.count}</p>
                <div className="flex gap-4 mt-2"> 
                 <motion.button
    aria-label="scroll-right"
    whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    onClick={() => scroll("right")}
    className="flex items-center justify-center rounded-full p-2 "
  >
    <span className="relative flex items-center">
      {/* Arrow */}
      <FaArrowRightLong size={18} className="text-cyan-400 relative z-10" />
      {/* Outer Circle - shifted left so half covers arrow */}
      <span className="absolute left-2 rounded-full border border-cyan-400 w-5 h-5"></span>
    </span>
  </motion.button>
   <div className="text-[#00CED1] text-base mt-1 ">  View Details</div></div>
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
