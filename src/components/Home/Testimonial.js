/* eslint-disable react/no-unescaped-entities */

import girlImg from "../../images/girl.png";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import test from "../../images/slider/1.png";
import test2 from "../../images/slider/7.png";
import test3 from "../../images/slider/6.png";

const Testimonial = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto lg:p-32 p-12 ">
        <div className="lg:grid grid-cols-2 justify-center items-center">
          <div>
            <img className="rounded-b-full" src={girlImg} alt="" />
          </div>
          <div>
            <h2 className="leading-[70px]">What our clients say about us</h2>
            <div className="my-5">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="shadow-lg bg-white p-7 rounded-lg">
                    <span className="leading-8">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum
                      is that it has a more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here', making it look like readable English.
                    </span>
                    <div className="mt-10 flex items-center gap-4">
                      <img className="w-20" src={test} alt="" />
                      <div>
                        <h5>Robin Hood</h5>
                        <p>Programmer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="shadow-lg bg-white p-7 rounded-lg">
                    <span className="leading-8">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum
                      is that it has a more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here', making it look like readable English.
                    </span>
                    <div className="mt-10 flex items-center gap-4">
                      <img className="w-20" src={test2} alt="" />
                      <div>
                        <h5>Leady Gaga</h5>
                        <p>SEO Specialist</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="shadow-lg bg-white p-7 rounded-lg">
                    <span className="leading-8">
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum
                      is that it has a more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here', making it look like readable English.
                    </span>
                    <div className="mt-10 flex items-center gap-4">
                      <img className="w-20" src={test3} alt="" />
                      <div>
                        <h5>Sekh Hasina</h5>
                        <p>UI/UX Designer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
