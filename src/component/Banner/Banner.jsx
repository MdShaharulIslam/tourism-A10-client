import slide1 from '/sund.jpg';
import slide2 from '/s2.jpg';
import slide3 from '/s3.jpg';
import slide4 from '/s4.jpg';
import slide5 from '/s5.jpg';

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={slide1} className="w-full h-screen rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            <div className="max-w-md justify-start absolute">
              <h1 className="-mt-20 ml-20 text-2xl md:text-4xl lg:text-5xl font-bold text-[#00ffa6] animate__animated animate__fadeInLeft">Hello.. <br /><span>We are Providing best Services</span> </h1>
              <button className="btn btn-outline bg-[#00ffa6] mt-28 ml-20">Explore</button>
            </div>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2}className="w-full h-screen rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            <div className="max-w-md justify-start absolute">
              <h1 className="-mt-20 ml-20 text-2xl md:text-4xl lg:text-5xl font-bold text-[#00ffa6]">Hello.. <br /><span>We are Providing best Services</span> </h1>
              <button className="btn btn-outline bg-[#00ffa6] mt-28 ml-20">Explore</button>
            </div>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide3} className="w-full h-screen rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            <div className="max-w-md justify-start absolute">
              <h1 className="-mt-20 ml-20 text-2xl md:text-4xl lg:text-5xl font-bold text-[#00ffa6]">Hello.. <br /><span>We are Providing best Services</span> </h1>
              <button className="btn btn-outline bg-[#00ffa6] mt-28 ml-20">Explore</button>
            </div>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide4} className="w-full h-screen rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
            <div className="max-w-md justify-start absolute">
              <h1 className="-mt-20 ml-20 text-2xl md:text-4xl lg:text-5xl font-bold text-[#00ffa6]">Hello.. <br /><span>We are Providing best Services</span> </h1>
              <button className="btn btn-outline bg-[#00ffa6] mt-28 ml-20">Explore</button>
            </div>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={slide5} className="w-full h-screen rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            <div className="max-w-md justify-start absolute">
              <h1 className="-mt-20 ml-20 text-2xl md:text-4xl lg:text-5xl font-bold text-[#00ffa6]">Hello.. <br /><span>We are Providing best Services</span> </h1>
              <button className="btn btn-outline bg-[#00ffa6] mt-28 ml-20">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
