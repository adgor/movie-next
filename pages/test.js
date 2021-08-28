import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
import "tailwindcss/tailwind.css";
import Blog from "../components/Blog";
import BlogArticle from "../components/BlogArticle";
import Kot from "../components/Kot";
import KotSlide from "../components/KotSlide";
import { SwiperSlide } from "swiper/react";

export default function MoviePage({ aksion, drama, komedi }) {
  // console.log(movies);
  return (
    <div className=" bg-darkGrey">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col px-6 py-10 mx-auto text-white ">
        {/* Category Slider - Aksion*/}
        <>
          <h1 className="pl-2 text-xl font-semibold tracking-wider mt-7">
            Aksion
          </h1>
          <Kot>
            {aksion.map((movie) => (
              <SwiperSlide>
                <KotSlide
                  key={movie}
                  href={movie.titURL}
                  img={movie.image}
                  quality={movie.quality}
                  title={movie.title}
                  year={movie.year}
                  len={movie.len}
                  genre={movie.genre.map((gen, i) => (
                    <li
                      className="text-xs font-normal leading-4 tracking-wide text-white opacity-50"
                      key={i}
                    >
                      {gen}
                    </li>
                  ))}
                />
              </SwiperSlide>
            ))}
          </Kot>
          <span className="w-full border-b border-gray-300 opacity-10"></span>
        </>

        {/* Category Slider - Drama*/}
        <>
          <h1 className="pl-2 text-xl font-semibold tracking-wider mt-7 ">
            Drama
          </h1>
          <Kot>
            {drama.map((movie) => (
              <SwiperSlide>
                <KotSlide
                  key={movie}
                  href={movie.titURL}
                  img={movie.image}
                  quality={movie.quality}
                  title={movie.title}
                  year={movie.year}
                  len={movie.len}
                  genre={movie.genre.map((gen, i) => (
                    <li
                      className="text-xs font-normal leading-4 tracking-wide text-white opacity-50"
                      key={i}
                    >
                      {gen}
                    </li>
                  ))}
                />
              </SwiperSlide>
            ))}
          </Kot>
          <span className="w-full border-b border-gray-300 opacity-10"></span>
        </>

        {/* Category Slider - Drama*/}
        <>
          <h1 className="pl-2 text-xl font-semibold tracking-wider mt-7 ">
            Komedi
          </h1>
          <Kot>
            {komedi.map((movie) => (
              <SwiperSlide>
                <KotSlide
                  key={movie}
                  href={movie.titURL}
                  img={movie.image}
                  quality={movie.quality}
                  title={movie.title}
                  year={movie.year}
                  len={movie.len}
                  genre={movie.genre.map((gen, i) => (
                    <li
                      className="text-xs font-normal leading-4 tracking-wide text-white opacity-50"
                      key={i}
                    >
                      {gen}
                    </li>
                  ))}
                />
              </SwiperSlide>
            ))}
          </Kot>
          <span className="w-full border-b border-gray-300 opacity-10"></span>
        </>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const data = await db.collection("movies");

  // working this method with below function
  // const drama = await data
  // .find({ genre: "Dramë" }, { projection: { _id: 0 } })
  // .toArray();

  // let makeGamePlayer = (title, image, quality, year) => {
  //   return title, image, quality, year;
  // };

  // aksion.map(makeGamePlayer);
  // drama.map(makeGamePlayer);

  const getAksion = await data.find({ genre: "Aksion" }).toArray();
  const getDrama = await data.find({ genre: "Dramë" }).toArray();
  const getKomedi = await data.find({ genre: "Komedi" }).toArray();

  const aksion = getAksion.map((movie) => {
    return {
      _id: movie._id.toString(),
      titURL: movie.title.toString().replace(/ /g, "-"),
      title: movie.title,
      image: movie.image,
      year: movie.year,
      len: movie.len,
      quality: movie.quality,
      genre: movie.genre,
    };
  });

  const drama = getDrama.map((movie) => {
    return {
      _id: movie._id.toString(),
      titURL: movie.title.toString().replace(/ /g, "-"),
      title: movie.title,
      image: movie.image,
      year: movie.year,
      len: movie.len,
      quality: movie.quality,
      genre: movie.genre,
    };
  });
  const komedi = getKomedi.map((movie) => {
    return {
      _id: movie._id.toString(),
      titURL: movie.title.toString().replace(/ /g, "-"),
      title: movie.title,
      image: movie.image,
      year: movie.year,
      len: movie.len,
      quality: movie.quality,
      genre: movie.genre,
    };
  });
  return {
    props: { drama, aksion, komedi },
  };
}
