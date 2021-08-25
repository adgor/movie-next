import React from "react";

const Blog = ({ children }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="relative pb-10 text-center text-biscay-500 lg:text-center">
        <p className="text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
          Movies
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {children}
      </div>
    </div>
  );
};

export default Blog;
