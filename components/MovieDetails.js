import React from "react";
export default function MovieDetails({
  embedVid,
  title,
  genre,
  actors,
  quality,
  len,
  year,
  synopsis,
}) {
  return (
    <>
      <div className="container px-4 mx-auto my-10 mt-0 lg:px-0">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-2xl leading-normal tracking-wide text-center text-gray-800 f-f-d-s lg:text-6xl">
            Movie Detail
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-4 lg:mt-14">
          <div className="">
            <iframe
              width="853"
              height="480"
              src={embedVid}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded Movie Video"
            />
          </div>
          <div className="px-8 py-12 mt-4 text-white bg-gray-700 lg:mt-0 lg:px-12 ">
            <div className="pb-6 text-2xl font-normal leading-9 lg:text-4xl f-f-d-s">
              {title}
            </div>
            <div className="flex items-center justify-between mb-3">
              <ul className="flex flex-row space-x-2">{genre}</ul>
              <div className="flex items-center font-lato">
                <div className="text-sm font-normal lg:text-lg color-white">
                  {quality}
                </div>
                <span className="px-2 text-2xl dot-color">•</span>
                <div className="text-sm font-normal lg:text-lg color-white">
                  {len}
                </div>
                <span className="px-2 text-2xl dot-color">•</span>
                <div className="text-sm font-normal lg:text-lg color-white">
                  {year}
                </div>
              </div>
            </div>
            <ul className="flex flex-row mb-5 space-x-2">{actors}</ul>
            <div className="pb-6 text-base leading-6 lg:text-2xl">
              {synopsis}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
