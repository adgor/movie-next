import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
import "tailwindcss/tailwind.css";
import Blog from "../components/Blog";
import BlogArticle from "../components/BlogArticle";

export default function MoviePage({ drama, aksion }) {
  // console.log(movies);
  return (
    <div className="bg-gray-400 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center px-6 py-10 mx-auto dark:text-white lg:flex-row">
        <Blog>
          {aksion.map((movie) => (
            <BlogArticle
              key={movie}
              href={movie.titURL}
              quality={movie.quality}
              title={movie.title}
              year={movie.year}
              img={movie.image}
            />
          ))}
        </Blog>
        <Blog>
          {drama.map((movie) => (
            <BlogArticle
              key={movie}
              href={movie.titURL}
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

  const aksion = getAksion.map((movie) => {
    return {
      _id: movie._id.toString(),
      titURL: movie.title.toString().replace(/ /g, "-"),
      title: movie.title,
      image: movie.image,
      quality: movie.quality,
      year: movie.year,
    };
  });

  const drama = getDrama.map((movie) => {
    return {
      _id: movie._id.toString(),
      titURL: movie.title.toString().replace(/ /g, "-"),
      title: movie.title,
      image: movie.image,
      quality: movie.quality,
      year: movie.year,
    };
  });
  return {
    props: { drama, aksion },
  };
}
