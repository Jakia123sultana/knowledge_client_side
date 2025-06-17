import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Swipp({posts}) {
  console.log(posts);
  return (
    <>
      <h1 className="font-semibold  mt-12 text-3xl text-gray-800">
        What People Says About the Events
      </h1>
      <hr className="w-[200px] mb-4 mt-2"></hr>
      <div className="w-full max-w-4xl mx-auto mt-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{delay: 3000, disableOnInteraction: false}}
          pagination={{clickable: true}}
          navigation={true}
          className="rounded-xl"
        >
          {posts.map((c, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-[#F4F7FF] p-6 rounded-xl shadow text-gray-700 h-64 flex flex-col justify-between">
                  <div className="relative">
                    <p className="italic text-base leading-relaxed"></p>
                    <span className="absolute top-0 right-0 text-yellow-400 text-2xl font-bold"></span>
                  </div>
                  <div className="flex items-center mt-6">
                    <img
                      src={c.photo}
                      alt={c.name}
                      className="w-14 h-14 rounded-full object-cover mr-4 border"
                    />
                    <div>
                      <p>{c.name}</p>
                      <p>Student</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
