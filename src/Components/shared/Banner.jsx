import { Link } from "react-router";

export default function Banner() {
  return (
    <>
     <div className="carousel   h-[480px] mt-12 ">
  <div id="slide1" className="carousel-item relative w-full">
    
    <img
      src="https://i.ibb.co/d4nwqZYf/knowledge-Sharing.jpg"
      className="w-full " />
      <div className="absolute left-24 right-14 top-1/3 ">
      <h1 className="text-xl lg:text-4xl font-semibold mb-4 text-white">Share Your Knowledge</h1>
        <h1 className="text-xl lg:text-2xl font-semibold mb-4 text-white"> Discover insightful articles-<br></br> from creators,studentsand professionals <br>
        </br> Professional and the globe.</h1>
        <Link to="/knowledges"><button className="btn rounded-2xl px-8 ">Explore Articles</button></Link>
        </div> 
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/GQ4PHLd8/reactjs.jpg"
      className="w-full" />
       <div className="absolute left-24 right-14 top-1/3 ">
      <h1 className="text-xl lg:text-4xl font-semibold mb-4 text-white">Share Your Knowledge</h1>
        <h1 className="text-xl lg:text-2xl font-semibold mb-4 text-white"> Discover insightful articles-<br></br> from creators,studentsand professionals <br>
        </br> Professional and the globe.</h1>
        <Link to="/knowledges"><button className="btn rounded-2xl px-8 ">Explore Articles</button></Link>
        </div> 
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/QjX9JCZr/knowledgeshare.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
 
</div> 
    </>
  );
}