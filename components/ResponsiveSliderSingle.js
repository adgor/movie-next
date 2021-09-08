import React from "react";
import Image from "next/image";
import Link from "next/link";

function ResponsiveSliderSingle({
  href,
  title,
  img,
  quality,
  year,
  len,
  genre,
}) {
  return (
    <div className="w-56 overflow-hidden transition-shadow duration-300 rounded">
      <div className="relative transition duration-500 ease-in-out transform rounded hover:-translate-y-1 hover:scale-110 ">
        <Link href={href}>
          <a>
            <Image
              src={img}
              width="228"
              height="330"
              className="w-full rounded "
            />
          </a>
        </Link>
      </div>
      <div className="pt-3.5  pb-7 ">
        <div className="flex flex-col ">
          <Link href={href}>
            <a>
              <p className="pb-4 text-sm font-bold leading-6 tracking-wider text-white truncate transition duration-700 whitespace-nowrap hover:text-transparent bg-clip-text bg-gradient-to-tl hover:from-blue-700 hover:via-red-700 hover:to-yellow-500">
                {title}
              </p>
            </a>
          </Link>
          <div className="flex flex-row justify-between mb-1 text-xs font-normal leading-4 tracking-wider text-white opacity-50">
            <div className="flex">
              <p>{year}</p>

              <p className=" pl-0.5">{len}</p>
            </div>
            <p>{quality}</p>
          </div>

          <ul className="flex flex-row space-x-1">{genre}</ul>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveSliderSingle;
