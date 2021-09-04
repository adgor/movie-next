import React, { useRef, useState } from "react";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HomePage from "../pages";
// import MoviePage from "../pages/[movieId]";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";
// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
import KotSlide from "./KotSlide";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function ResponsiveSlider({ data, categoryTitle, href }) {
  return (
    <>
      <div className="relative mx-auto">
        <div className="text-center sm:text-left">
          {!href === 0 || "undefined" ? (
            <p className="inline-block  mb-3.5 mt-8 pl-1 text-2xl sm:text-xl font-semibold tracking-wider text-white transition duration-700 hover:text-transparent bg-clip-text bg-gradient-to-tl hover:from-blue-700 hover:via-red-700 hover:to-yellow-500 ">
              {categoryTitle}
            </p>
          ) : (
            <Link href={href}>
              <a className="inline-block  mb-3.5 mt-8 pl-1 text-4xl sm:text-xl font-semibold tracking-wider text-white transition duration-700 hover:text-transparent bg-clip-text bg-gradient-to-tl hover:from-blue-700 hover:via-red-700 hover:to-yellow-500 ">
                {categoryTitle}
              </a>
            </Link>
          )}
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {data.map((movie, i) => (
            <SwiperSlide key={i}>
              <KotSlide
                href={"/" + movie.title.replace(/ /g, "_")}
                img={movie.image}
                quality={movie.quality}
                title={movie.title}
                year={!movie.year ? "" : `(${movie.year}) •`}
                len={movie.len}
                genre={
                  !movie.genre
                    ? ""
                    : movie.genre.map((gen, i) => (
                        <li
                          className="text-xs font-normal leading-4 tracking-wide text-white opacity-50 hover:opacity-100"
                          key={i}
                        >
                          <Link href={"/category/" + gen.replace(/ /g, "_")}>
                            <a>{gen}</a>
                          </Link>
                        </li>
                      ))
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="absolute w-full border-b border-gray-300 border-opacity-10"></span>
      </div>
    </>
  );
}
