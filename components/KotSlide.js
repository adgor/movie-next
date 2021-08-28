import React from "react";
import Image from "next/image";
import Link from "next/link";

function KotSlide({ href, title, img, quality, year, len, genre }) {
  return (
    <div className="w-56 overflow-hidden transition-shadow duration-300 rounded">
      <Link href={href} as={`/${href}`}>
        <a>
          <Image
            src={img}
            width="228"
            height="330"
            className="w-full rounded"
          />
        </a>
      </Link>
      <div className="pt-3.5  pb-7 ">
        <div className="flex flex-col ">
          <Link href={href} as={`/${href}`}>
            <a>
              <p className="pb-4 text-sm font-bold leading-6 tracking-wider truncate whitespace-nowrap ">
                {title}
              </p>
            </a>
          </Link>
          <div className="flex mb-0.5 flex-row justify-between text-xs font-normal leading-4 tracking-wider text-white opacity-50">
            <div className="flex">
              <p>({year})</p>
              <span className="px-1 ">•</span>
              <p>{len}</p>
            </div>
            <p>{quality}</p>
          </div>

          <ul className="flex flex-row space-x-1">{genre}</ul>
        </div>
      </div>
    </div>
  );
}

export default KotSlide;
