import React, { useState } from "react";
import Link from "next/link";
import { FaRegPlayCircle } from "react-icons/fa";
import Links from "../components/Links";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto bg-transparent sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8 text-5xl font-extrabold "
            >
              <svg width="0" height="0">
                <linearGradient
                  id="blue-gradient"
                  x1="100%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                >
                  <stop stopColor="#ffa700" offset="0%" />
                  <stop stopColor="#d62d20" offset="45%" />
                  <stop stopColor="#0057e7" offset="85%" />
                </linearGradient>
              </svg>

              <FaRegPlayCircle
                className="w-12 h-12 "
                style={{ fill: "url(#blue-gradient)" }}
              />

              <span className="ml-2 text-xl font-bold tracking-wide text-gray-300 uppercase hover:text-white ">
                MOVIE-APP
              </span>
            </a>
          </Link>

          <ul className="flex items-center hidden space-x-2 lg:flex">
            <li>
              <a
                href="#objectives"
                aria-label="Project objectives"
                title="Project objectives"
                className="px-3 py-2 text-sm font-medium tracking-wide text-gray-300 transition-colors duration-200 rounded-md hover:bg-gray-700 hover:text-white "
              >
                Objectives
              </a>
            </li>
            <li className="relative px-3 py-2 text-sm font-medium tracking-wide text-gray-300 transition-colors duration-200 rounded-md cursor-pointer group dropdown hover:bg-gray-700 hover:text-white">
              <a>Kategoritë</a>
              <div className="absolute z-50 hidden h-auto py-3 -ml-3 group-hover:block dropdown-menu">
                <div className="inline-block w-16 ml-6 -mb-2 overflow-hidden">
                  <div className="w-3 h-3 origin-bottom-left transform rotate-45 bg-gray-700 "></div>
                </div>
                <ul className="top-0 grid w-auto grid-flow-col grid-rows-6 gap-6 px-6 py-8 bg-gray-700 rounded shadow">
                  {Links.map((link, i) => (
                    <li key={i} className="py-1">
                      <Link href={link.url}>
                        <a className="block text-sm leading-6 tracking-wide text-gray-300 cursor-pointer hover:text-white">
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#institutions"
                aria-label="Institutions involved"
                title="Institutions involved"
                className="px-3 py-2 text-sm font-medium tracking-wide text-gray-300 transition-colors duration-200 rounded-md hover:bg-gray-700 hover:text-white "
              >
                Institutions
              </a>
            </li>
            <li>
              <a
                href="#team"
                aria-label="Our team"
                title="Our team"
                className="px-3 py-2 text-sm font-medium tracking-wide text-gray-300 transition-colors duration-200 rounded-md hover:bg-gray-700 hover:text-white "
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                className="px-3 py-2 text-sm font-medium tracking-wide text-gray-300 transition-colors duration-200 rounded-md hover:bg-gray-700 hover:text-white "
              >
                About us
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg width="0" height="0">
                        <linearGradient
                          id="blue-gradient"
                          x1="100%"
                          y1="100%"
                          x2="0%"
                          y2="0%"
                        >
                          <stop stopColor="#ffa700" offset="0%" />
                          <stop stopColor="#d62d20" offset="45%" />
                          <stop stopColor="#0057e7" offset="85%" />
                        </linearGradient>
                      </svg>

                      <FaRegPlayCircle
                        className="transform -rotate-90 w-11 h-11"
                        style={{ fill: "url(#blue-gradient)" }}
                      />
                      <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800 uppercase">
                        IPA-FF NMK
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="#objectives"
                        aria-label="Project objectives"
                        title="Project objectives"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Objectives
                      </a>
                    </li>
                    <li>
                      <a
                        href="#institutions"
                        aria-label="Institutions involved"
                        title="Institutions involved"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Institutions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#team"
                        aria-label="Our team"
                        title="Our team"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
