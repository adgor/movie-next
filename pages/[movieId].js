import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
import MovieDetails from "../components/MovieDetails";
import Link from "next/link";
import Kot from "../components/Kot";
import KotSlide from "../components/KotSlide";
import { SwiperSlide } from "swiper/react";

export default function MoviePage({ movie, getLast }) {
  // console.log(movie);
  return (
    <div>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />

        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="z-50 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {movie.video.length === 0 ? (
          <div className="relative w-full h-full text-white opacity-75">
            <h2 className="mx-auto my-10 text-5xl text-center">
              Filmi i kërkuar po përpunohet!
            </h2>
            <p className="mx-auto text-xl text-center">
              Rikthehuni pas disa oresh!!!! <br />{" "}
            </p>
            <p className="mx-auto mt-4 mb-10 font-semibold text-center">
              Ju faleminderit për mirekuptimin!{" "}
            </p>
          </div>
        ) : (
          <MovieDetails
            img={!movie.bgimage ? "/movie-1.jpg" : movie.bgimage}
            embedVid={movie.video}
            title={movie.title}
            quality={movie.quality}
            len={movie.len}
            year={movie.year}
            synopsis={movie.synopsis}
            genre={
              !movie.genre
                ? ""
                : movie.genre.map((gen, i) => (
                    <li
                      className="px-4 py-1 text-xs font-normal leading-4 tracking-wider text-white bg-gray-700 rounded-md "
                      key={i}
                    >
                      <Link href={"/category/" + gen}>
                        <a>{gen}</a>
                      </Link>
                    </li>
                  ))
            }
            actors={
              !movie.actors
                ? ""
                : movie.actors.map((actor, i, arr) => (
                    <li
                      key={i}
                      className="flex mb-0.5  flex-row justify-between text-xs font-normal leading-4   tracking-tight  text-white"
                    >
                      {actor} {i != arr.length - 1 ? "," : ""}
                    </li>
                  ))
            }
          />
        )}
        <>
          <h2 className="pl-2 text-lg font-bold tracking-wider text-white mt-7 hover: ">
            Filma të postuar së fundmi
          </h2>
          <Kot>
            {getLast.map((movie, i) => (
              <SwiperSlide key={i}>
                <KotSlide
                  href={movie.titURL}
                  img={movie.image}
                  quality={movie.quality}
                  title={movie.title}
                  year={!movie.year ? "" : `(${movie.year}) •`}
                  len={movie.len}
                  genre={
                    !movie.genre
                      ? ""
                      : movie.genre.map((gen, i) => (
                          <li
                            className="text-xs font-normal leading-4 tracking-wide text-white opacity-50 hover:opacity-100"
                            key={i}
                          >
                            <Link href={"/category/" + gen}>
                              <a>{gen}</a>
                            </Link>
                          </li>
                        ))
                  }
                />
              </SwiperSlide>
            ))}
          </Kot>
          <span className="w-full border-b border-gray-300 border-opacity-10"></span>
        </>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const { db } = await connectToDatabase();

  const data = await db.collection("movies");

  const movies = await data.find({}, { title: 1 }).toArray();

  return {
    fallback: false,
    paths: movies.map((movie) => ({
      params: { movieId: movie.title.toString().replace(/ /g, "-") },
    })),
  };
}

export async function getStaticProps(context) {
  const movieId = context.params.movieId;
  // console.log(movieId);

  const { db } = await connectToDatabase();

  const movieCollection = await db.collection("movies");

  // get Single Movie
  const selectedMovie = await movieCollection.findOne({
    title: movieId.toString().replace(/-/g, " "),
  });
  // console.log("^^^");
  // console.log(selectedMovie);
  // console.log("^^^");

  // get Last 16 movies
  const getLastMovies = await movieCollection
    .find()
    .sort({ _id: -1 })
    .limit(16)
    .toArray();

  //
  const getLast = getLastMovies.map((movie) => {
    return {
      _id: movie._id.toString(),
      titURL: movie.title.toString().replace(/ /g, "-"),
      title: movie.title,
      image: movie.image,
      year: !movie.year ? "" : movie.year,
      len: !movie.len ? "" : movie.len,
      // len: movie.len,
      genre: !movie.genre ? "" : movie.genre,
      quality: movie.quality,
      genre: !movie.genre ? "" : movie.genre,
      // genre: movie.genre,
    };
  });

  return {
    props: {
      movie: {
        // _id: selectedMovie._id.toString(),
        title: selectedMovie.title,
        quality: selectedMovie.quality,
        year: !selectedMovie.year ? "" : selectedMovie.year,
        genre: !selectedMovie.genre ? "" : selectedMovie.genre,
        // genre: selectedMovie.genre,
        actors: !selectedMovie.actors ? "" : selectedMovie.actors,
        // actors: selectedMovie.actors,
        video: !selectedMovie.video ? "" : selectedMovie.video,
        // video: selectedMovie.video,
        bgimage: !selectedMovie.bgimage ? "" : selectedMovie.bgimage,
        synopsis: !selectedMovie.synopsis ? "" : selectedMovie.synopsis,
        // synopsis: selectedMovie.synopsis,
        len: !selectedMovie.len ? "" : selectedMovie.len,
        // len: selectedMovie.len,
      },
      getLast,
    },
    revalidate: 32400,
  };
}
