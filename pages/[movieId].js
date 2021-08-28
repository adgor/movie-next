import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
import "tailwindcss/tailwind.css";
import MovieDetails from "../components/MovieDetails";

export default function MoviePage({ movie }) {
  // console.log(movie);
  return (
    <div className="bg-gray-400 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center px-6 py-10 mx-auto dark:text-white ">
        <MovieDetails
          embedVid={movie.video}
          title={movie.title}
          quality={movie.quality}
          len={movie.len}
          year={movie.year}
          synopsis={movie.synopsis}
          genre={movie.genre.map((gen, i) => (
            <li key={i}>{gen}</li>
          ))}
          actors={movie.actors.map((actor, i) => (
            <li
              key={i}
              className="inline-block px-3 py-px text-xs font-semibold tracking-wider text-teal-900 bg-indigo-700 rounded"
            >
              {actor}
            </li>
          ))}
        ></MovieDetails>
      </main>
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

  const selectedMovie = await movieCollection.findOne({
    title: movieId.toString().replace(/-/g, " "),
  });
  // console.log("^^^");
  // console.log(selectedMovie);
  // console.log("^^^");

  return {
    props: {
      movie: {
        // _id: selectedMovie._id.toString(),
        title: selectedMovie.title,
        quality: selectedMovie.quality,
        year: selectedMovie.year,
        genre: selectedMovie.genre,
        actors: selectedMovie.actors,
        video: selectedMovie.video,
        synopsis: selectedMovie.synopsis,
        len: selectedMovie.len,
      },
    },
    revalidate: 1,
  };
}
