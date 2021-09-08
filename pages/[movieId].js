import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
import { useRouter } from "next/router";
import SingleMovie from "../components/SingleMovie";

export default function MoviePage({ movie, getLast }) {
  // console.log(movie);

  // When fallback true if no url
  // if (!movie && !getLast) return "The URL does not Exists ...";
  const { isFallback } = useRouter();
  if (isFallback) {
    return (
      <>
        <div className="relative text-white opacity-75 h-80">
          <h2 className="mx-auto my-10 text-5xl text-center">
            Faqja që Ju kërkuat nuk egziston!
          </h2>
          <p className="mx-auto text-xl text-center">
            Ju lutemi kontrolloni e nji herë ose kthehuni te Ballina!!!! <br />{" "}
          </p>
          <p className="mx-auto mt-4 font-semibold text-center">
            Ju faleminderit për mirekuptimin!{" "}
          </p>
        </div>
      </>
    );
  }
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
      <SingleMovie data={movie} getLast={getLast} />
    </div>
  );
}

export async function getStaticProps(context) {
  const movieId = context.params.movieId;
  // console.log(movieId);

  const { db } = await connectToDatabase();

  const movieCollection = await db.collection("movies");

  // get Single Movie
  const selectedMovie = await movieCollection.findOne({
    title: movieId.toString().replace(/_/g, " "),
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
      // titURL: movie.title.toString().replace(/ /g, "-"),
      title: movie.title === null ? "" : movie.title,
      // title: movie.title,
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
        // title: !selectedMovie.title ? "" : selectedMovie.title,
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
    revalidate: 82800,
  };
}

export async function getStaticPaths() {
  const { db } = await connectToDatabase();

  const data = await db.collection("movies");

  const movies = await data.find({}, { title: 1 }).toArray();

  return {
    paths: movies.map((movie) => ({
      params: {
        movieId: movie.title.toString().replace(/ /g, "_"),
      },
    })),
    fallback: true,
  };
}
