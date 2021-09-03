import React from "react";
import Image from "next/image";
import MoviePage from "../pages/[movieId]";

import Link from "next/link";
import ResponsiveSlider from "./ResponsiveSlider";

export default function SingleMovie({ data, getLast }) {
  // console.log(data);
  return (
    <div className="z-50 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      {data.video === "" ? (
        <div className="relative w-full h-full text-white opacity-75">
          <h2 className="mx-auto my-10 text-5xl text-center">
            Filmi i kërkuar po përpunohet!
          </h2>
          <p className="mx-auto text-xl text-center">
            Rikthehuni pas disa oresh!!!! <br />{" "}
          </p>
          <p className="mx-auto mt-4 mb-10 font-semibold text-center">
            Ju faleminderit për mirekuptimin!{" "}
          </p>
        </div>
      ) : (
        <>
          <div>
            <Image
              src={!data.bgimage ? "/movie-1.jpg" : data.bgimage}
              alt={data.title}
              layout="fill"
              objectFit="cover"
            />
            <span className="absolute inset-0 w-full h-full bg-gradient-to-t from-darkGrey to-darkGrey-darkest04 "></span>
          </div>
          <div className=" aspect-w-16 aspect-h-9">
            <iframe
              // width="1236"
              // height="695"
              src={data.video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded Movie Video"
            />
          </div>
          <div className="relative flex flex-col sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
            <div className="py-12 mt-4 text-white lg:mt-0 ">
              <div className="pb-6 text-6xl font-bold leading-tight border-b border-gray-300 border-opacity-10 ">
                {data.title}
              </div>
              <div className=" py-9">
                <div className="flex flex-row justify-between mb-1 text-xs font-normal leading-4 tracking-wider text-white opacity-50">
                  <div className="flex">
                    <p>({data.year})</p>
                    <span className="px-1 ">•</span>
                    <p>{data.len}</p>
                  </div>
                  <p>{data.quality}</p>
                </div>
                <ul className="flex flex-row pt-3 space-x-1">
                  {!data.genre
                    ? ""
                    : data.genre.map((gen, i) => (
                        <li key={i}>
                          <Link href={"/category/" + gen}>
                            <a className="px-4 py-1 text-xs font-normal leading-4 tracking-wider text-gray-300 bg-gray-700 rounded-md hover:text-white ">
                              {gen}
                            </a>
                          </Link>
                        </li>
                      ))}
                </ul>
              </div>
              <div className="pb-8 text-sm font-normal leading-6 tracking-wide border-b border-gray-300 border-opacity-10 ">
                {data.synopsis}
              </div>
              <ul className="flex flex-row py-5 space-x-2 border-b border-gray-300 border-opacity-10">
                {!data.actors
                  ? ""
                  : data.actors.map((actor, i, arr) => (
                      <li
                        key={i}
                        className="flex mb-0.5 flex-row justify-between text-xs font-normal leading-4 tracking-tight text-white"
                      >
                        {actor} {i != arr.length - 1 ? "," : ""}
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </>
      )}
      <ResponsiveSlider
        data={getLast}
        // href={"/category/Aksion"}
        categoryTitle={"Filma të postuar së fundmi"}
      />
    </div>
  );
}
