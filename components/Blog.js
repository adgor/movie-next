import React from "react";

const Blog = ({ children, movieCategory }) => {
  return (
    <div className="px-4 py-10 mx-auto border-b border-gray-300 border-opacity-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="relative pb-10 ">
        <h2 className="font-bold tracking-wider text-white text-7xl mt-7">
          {movieCategory}
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-5 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {children}
      </div>
    </div>
  );
};

export default Blog;
