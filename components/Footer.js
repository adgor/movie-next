import Link from "next/link";
import { FaRegPlayCircle } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex flex-col items-center py-5 bo sm:flex-row">
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
              className="w-12 h-12 transform -rotate-90"
              style={{ fill: "url(#blue-gradient)" }}
            />

            <span className="ml-2 text-xl font-bold tracking-wide text-gray-300 uppercase hover:text-white ">
              MOVIE-APP
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};
