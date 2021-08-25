import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogArticle({ href, title, img, quality, year }) {
  return (
    <div className="w-56 overflow-hidden transition-shadow duration-300 rounded">
      <Link href={href}>
        <a>
          <Image
            src={img}
            width="228"
            height="330"
            className="w-full rounded"
          />

          <div className="pt-3 pb-4 bg-gray-400">
            <div className="flex flex-col ">
              <div className="flex flex-row justify-between text-gray-600">
                <p className="font-medium uppercase text-paleSky-600">{year}</p>
                <p className="font-medium uppercase text-paleSky-600">
                  {quality}
                </p>
              </div>
              <p className="text-2xl font-bold leading-7 truncate whitespace-nowrap ">
                {title}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default BlogArticle;
