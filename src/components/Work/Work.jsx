import { Swiper, SwiperSlide } from "swiper/react";
import {
  work_one,
  work_two,
  work_three,
  work_four,
  work_five,
} from "../../assets";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Work() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={work_one} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={work_two} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={work_three} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={work_four} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={work_five} alt="" />
        </SwiperSlide>
      </Swiper>
      <center>
        <button className=" px-7 mt-8 py-3 border border-3 text-[#4B5563] border-[#4B5563] rounded-md">
          View recent work
        </button>
      </center>
    </>
  );
}
