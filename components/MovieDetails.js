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
        <div className=" aspect-w-16 aspect-h-9">
          <iframe
            // width="1236"
            // height="695"
            src={embedVid}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded Movie Video"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-4 lg:mt-14">
          <div className="px-8 py-12 mt-4 text-white lg:mt-0 lg:px-12 ">
            <div className="pb-6 text-6xl font-bold leading-tight border-b border-gray-300 border-opacity-10 ">
              {title}
            </div>
            <div className=" py-9">
              <div className="flex flex-row justify-between mb-1 text-xs font-normal leading-4 tracking-wider text-white opacity-50">
                <div className="flex">
                  <p>({year})</p>
                  <span className="px-1 ">•</span>
                  <p>{len}</p>
                </div>
                <p>{quality}</p>
              </div>
              <ul className="flex flex-row pt-3 space-x-1">{genre}</ul>
            </div>
            <div className="pb-8 text-sm font-normal leading-6 tracking-wide border-b border-gray-300 border-opacity-10 ">
              {synopsis}
            </div>
            <ul className="flex flex-row py-5 space-x-2 border-b border-gray-300 border-opacity-10">
              {actors}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
