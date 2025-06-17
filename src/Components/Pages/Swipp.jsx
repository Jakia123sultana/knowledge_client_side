import {Swiper,SwiperSlide} from 'swiper/react';
import{Navigation,Pagination,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import user from '../../assets/khowledge1.jpeg'
export default function Swipp({posts}) {
    console.log(posts)
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
          {posts.map((c,index)=>{
         return( <SwiperSlide key={index}>
            <div className="bg-[#F4F7FF] p-6 rounded-xl shadow text-gray-700 h-64 flex flex-col justify-between">
              <div className="relative">
                <p className="italic text-base leading-relaxed">
       
                </p>
                <span className="absolute top-0 right-0 text-yellow-400 text-2xl font-bold"></span>
                </div>
                <div className="flex items-center mt-6">
                  <img src={c.photo} alt={c.name}  className="w-14 h-14 rounded-full object-cover mr-4 border"/>
                <div>
                  <p>{c.name}</p>
                  <p>Student</p>
                </div>
                </div>

              </div>
           
          </SwiperSlide>)
 } )}
          {/* <SwiperSlide>
            <div className="bg-[#F4F7FF] p-6 rounded-xl shadow text-gray-700 h-64 flex flex-col justify-between">
              <div className="relative">
                <p className="italic text-base leading-relaxed">
                 As a newcomer in the city ,I was nervous . 
                  <br /> But this site helped me find a safe,cozy place with great roommates.
                  <br /> Thank you!
                </p>
                <span className="absolute top-0 right-0 text-yellow-400 text-2xl font-bold"></span>
                </div>
                <div className="flex items-center mt-6">
                  <img src={user} alt=""  className="w-14 h-14 rounded-full object-cover mr-4 border"/>
                <div>
                  <p>Israt Sultana</p>
                  <p>Web Developer</p>
                </div>
                </div>

              </div>
           
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F4F7FF] p-6 rounded-xl shadow text-gray-700 h-64 flex flex-col justify-between">
              <div className="relative">
                <p className="italic text-base leading-relaxed">
                 I love how smooth the process was- from browsing listings to contactowners
                  <br /> Highly recommended this roommate finder to students and professionals!
                  <br /> Thank you!
                </p>
                <span className="absolute top-0 right-0 text-yellow-400 text-2xl font-bold"></span>
                </div>
                <div className="flex items-center mt-6">
                  <img src={user} alt=""  className="w-14 h-14 rounded-full object-cover mr-4 border"/>
                <div>
                  <p>Nur Muhammad Imon</p>
                  <p>Sports Manager</p>
                </div>
                </div>

              </div>
           
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}