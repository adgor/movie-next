import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogArticle({ href, title, img, quality, year, genre, len }) {
  return (
    <div className="w-56 overflow-hidden transition-shadow duration-300 rounded">
      <Link href={"/" + href}>
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
          <Link href={"/" + href}>
            <a>
              <p className="pb-4 text-sm font-bold leading-6 tracking-wider text-white truncate whitespace-nowrap ">
                {title}
              </p>
            </a>
          </Link>
          <div className="flex flex-row justify-between mb-1 text-xs font-normal leading-4 tracking-wider text-white opacity-50">
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

export default BlogArticle;
