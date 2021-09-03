import React from "react";
import MovieCategoryPage from "../pages/category/[categoryId]";
import Link from "next/link";
import Image from "next/image";

const CategoryList = ({ data }) => {
  // console.log(data);
  return (
    <div className="px-4 pt-10 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      {data.length === 0 ? (
        <div className="relative text-white opacity-75 h-80">
          <h2 className="mx-auto my-10 text-5xl text-center">
            Kategoria e kërkuar po përpunohet!
          </h2>
          <p className="mx-auto text-xl text-center">
            Rikthehuni pas disa oresh!!!! <br />{" "}
          </p>
          <p className="mx-auto mt-4 font-semibold text-center">
            Ju faleminderit për mirekuptimin!{" "}
          </p>
        </div>
      ) : (
        <>
          <div className="relative pb-10 text-center sm:text-left ">
            <h2 className="text-3xl font-bold tracking-wider text-white sm:text-6xl">
              {!data[0].category
                ? "Kategori"
                : data[0].category.replace(/-/g, " ")}
            </h2>
          </div>
          <div className="grid gap-5 mx-auto border-b border-gray-300 border-opacity-10 sm:grid-cols-2 lg:grid-cols-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xlg:max-w-full">
            {data.map((movie) => (
              <div
                key={movie._id}
                className="w-56 mx-auto overflow-hidden transition-shadow duration-300 rounded sm:mx-0 "
              >
                <div className="hover:opacity-75">
                  <Link href={"/" + movie.tit}>
                    <a>
                      <Image
                        src={movie.image}
                        alt={movie.title}
                        width="228"
                        height="330"
                        className="w-full rounded"
                      />
                    </a>
                  </Link>
                </div>
                <div className="pt-3.5  pb-7 ">
                  <div className="flex flex-col ">
                    <Link href={"/" + movie.tit}>
                      <a>
                        <p className="pb-4 text-sm font-bold leading-6 tracking-wider text-white truncate transition duration-700 hover:text-transparent bg-clip-text bg-gradient-to-tl hover:from-blue-700 hover:via-red-700 hover:to-yellow-500 whitespace-nowrap ">
                          {movie.title}
                        </p>
                      </a>
                    </Link>
                    <div className="flex flex-row justify-between mb-1 text-xs font-normal leading-4 tracking-wider text-white opacity-50">
                      <div className="flex">
                        <p>({movie.year})</p>
                        <span className="px-1 ">•</span>
                        <p>{movie.len}</p>
                      </div>
                      <p>{movie.quality}</p>
                    </div>

                    <ul className="flex flex-row space-x-1">
                      {movie.genre.map((gen, i) => (
                        <li
                          className="text-xs font-normal leading-4 tracking-wide text-white opacity-50 hover:opacity-100"
                          key={i}
                        >
                          <Link href={"/category/" + gen.replace(/ /g, "-")}>
                            <a>{gen}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryList;
