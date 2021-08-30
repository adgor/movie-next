import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
import MovieDetails from "../components/MovieDetails";
import Link from "next/link";

export default function MoviePage({ movie }) {
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

      <main className="px-6 py-10 mx-auto ">
        <MovieDetails
          img={movie.bgimage}
          embedVid={movie.video}
          title={movie.title}
          quality={movie.quality}
          len={movie.len}
          year={movie.year}
          synopsis={movie.synopsis}
          genre={movie.genre.map((gen, i) => (
            <li
              className="px-4 py-1 text-xs font-normal leading-4 tracking-wider text-white bg-gray-700 rounded-md "
              key={i}
            >
              <Link href={"/category/" + gen}>
                <a>{gen}</a>
              </Link>
            </li>
          ))}
          actors={movie.actors.map((actor, i, arr) => (
            <li
              key={i}
              className="flex mb-0.5  flex-row justify-between text-xs font-normal leading-4   tracking-tight  text-white     
              "
            >
              {actor} {i != arr.length - 1 ? "," : ""}
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
        bgimage: selectedMovie.bgimage,
        synopsis: selectedMovie.synopsis,
        len: selectedMovie.len,
      },
    },
    revalidate: 1,
  };
}
