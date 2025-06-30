"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

const testimonials = [
  {
    message: "Navigating the site feels so smooth. You really brought my ideas to life!",
    name: "Miss Oladejo Aima",
  },
  {
    message: "“I absolutely love the website — it's clean, fast, and exactly what I envisioned. You nailed it!",
    name: "Mr Segun Adeoye",
  },
  {
    message: "The attention to detail is top-notch. I've gotten so many compliments already!",
    name: "Mr Ade",
  },
];

const Testimonials = () => {
  return (
    <Swiper
      //   modules={{ Autoplay }}
      loop={false}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-[#140e25] rounded-lg"
    >
      {testimonials.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
              <ImQuotesLeft className="hidden xl:flex text-8xl text-[#5810ff]" />
              <div className="flex flex-col gap-2 ">
                <p>{person.message}</p>
                <p className="self-end text-[#5810ff] font-semibold">
                  {person.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonials;
