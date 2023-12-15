import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import the images
import slider1 from "../Images/Slider1.png";
import slider2 from "../Images/Slider2.png";
import slider3 from "../Images/Slider3.png";

const homeData = [
  {
    id: 1,
    image: slider1,
  },

  {
    id: 2,
    image: slider2,
  },
  {
    id: 3,
    image: slider3,
  },
];

const Hero = () => {
  return (
    <>
      <div className="mt-20 h-90 w-full">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {homeData.map((data) => (
            <SwiperSlide key={data.id}>
              <div>
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-80vh object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
