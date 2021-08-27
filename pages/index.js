import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
import "tailwindcss/tailwind.css";
import Blog from "../components/Blog";
import BlogArticle from "../components/BlogArticle";

export default function Home({ movies }) {
  // console.log(movies);

  return (
    <div className="bg-gray-400 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center px-6 py-10 mx-auto dark:text-white lg:flex-row">
        <Blog>
          {movies.map((movie) => (
            <BlogArticle
              key={movie._id}
              href={movie.tit}
              quality={movie.quality}
              title={movie.title}
              year={movie.year}
              img={movie.image}
            />
          ))}
        </Blog>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { db } = await connectToDatabase();

  // const collection = db.collection("movies");
  // const movies = await collection.find({}).toArray();

  const data = await db.collection("movies").find().sort({ _id: 1 }).toArray();

  const movies = data.map((movie) => {
    return {
      _id: movie._id.toString(),
      tit: movie.title.toString().replace(/ /g, "-"),
      title: movie.title,
      image: movie.image,
      quality: movie.quality,
      year: movie.year,
    };
  });

  return {
    props: { movies },
    revalidate: 1800,
  };
}
