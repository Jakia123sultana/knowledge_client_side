import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";


export default function Banner() {
  // Example scroll function (replace with your actual logic)
  function scroll(direction) {
    console.log("Scroll clicked:", direction);
    // You can add scroll logic here, e.g. scroll carousel or page
  }

  return (
    <>
      <div className="carousel h-[480px]  rounded-2xl overflow-hidden relative mt-6">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/d4nwqZYf/knowledge-Sharing.jpg"
            className="w-full rounded-2xl"
          />
          <div className="absolute left-24 right-14 top-1/3">
            <h1 className="text-xl lg:text-4xl font-semibold mb-4 text-white">
              Share Your Knowledge
            </h1>
            <h1 className="text-xl lg:text-2xl font-semibold mb-4 text-white">
              Discover insightful articles-<br />
              from creators, students and professionals <br />
              Professional and the globe.
            </h1>
            <Link to="/knowledges">
              <button className="btn rounded-2xl px-8">Explore Articles</button>
            </Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/GQ4PHLd8/reactjs.jpg"
            className="w-full rounded-2xl"
          />
          <div className="absolute left-24 right-14 top-1/3">
            <h1 className="text-xl lg:text-4xl font-semibold mb-4 text-white">
              Share Your Knowledge
            </h1>
            <h1 className="text-xl lg:text-2xl font-semibold mb-4 text-white">
              Discover insightful articles-<br />
              from creators, students and professionals <br />
              Professional and the globe.
            </h1>
            <Link to="/knowledges">
              <button className="btn rounded-2xl px-8">Explore Articles</button>
            </Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/QjX9JCZr/knowledgeshare.jpg"
            className="w-full rounded-2xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Right Button below the banner */}
     <div className="flex justify-center relative bottom-8">
  <motion.button
    aria-label="scroll-right"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => scroll("right")}
    className="flex items-center justify-center rounded-full p-2 relative"
  >
    <span className="relative flex items-center">
      {/* Animated Arrow */}
      <motion.span
        animate={{ y: [0, 10, 0] }}  // move arrow down 10px then back up
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaArrowDownLong
          size={18}
          className="text-cyan-400 relative z-10 ml-3 items-center"
        />
      </motion.span>
      {/* Outer Circle - shifted left so half covers arrow */}
      <span className="absolute left-2 rounded-full border border-cyan-400 w-6 h-16"></span>
    </span>
  </motion.button>
</div>

    </>
  );
}
