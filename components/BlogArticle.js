import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogArticle({ href, title, img, quality, year, genre }) {
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

          <div className="pt-3.5 pb-4 ">
            <div className="flex flex-col ">
              <p className="pb-4 text-sm font-bold leading-6 tracking-wider truncate whitespace-nowrap ">
                {title}
              </p>
              <div className="flex mb-0.5 flex-row justify-between text-xs font-normal leading-4 tracking-wider text-white opacity-50">
                <p>{year}</p>
                <p>{quality}</p>
              </div>

              <ul className="flex flex-row space-x-1">{genre}</ul>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default BlogArticle;
