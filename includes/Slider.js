"use client";
import Image from "next/image";
import { React, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Slider({imgData}) {

 



  return (
    <div>
  
      <Swiper 
      spaceBetween={50}
        autoplay={true}
        slidesPerView={1}
   
        modules={[Autoplay]}
      >
        {imgData.map((image,index) => {
          const img_path = process.env.NEXT_PUBLIC_IMAGE_PATH;
          const img = `${img_path}${image.image}`;
          return (
            <SwiperSlide key={index}>
              <Image
                width={1000}
                height={100}
                src={img}
                alt="hero"
                className="scale-x-[-1]"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

  </div>
);
}
