import Head from "next/head";
import { connectToDatabase } from "../../lib/mongodb";
import Categories from "../../components/Links";

import Blog from "../../components/Blog";
import BlogArticle from "../../components/BlogArticle";
import Link from "next/link";

export default function MovieCategoryPage({ movies }) {
  // console.log(movies);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center px-6 py-10 mx-auto dark:text-white lg:flex-row">
        {movies.length === 0 ? (
          <div className="w-screen h-screen text-white opacity-75">
            <h2 className="mx-auto my-16 text-5xl text-center">
              Kategoria po perpunohet!
            </h2>
            <p className="mx-auto my-4 text-xl text-center">
              Rikthehuni pas disa oresh!!!! <br />{" "}
            </p>
            <p className="mx-auto mt-20 font-semibold text-center">
              Ju faleminderit për mirekuptimin!{" "}
            </p>
          </div>
        ) : (
          <Blog
          // movieCategory={!!movies[0].category ? movies[0].category : "Kategori"}
          >
            {movies.map((movie) => (
              <BlogArticle
                key={movie._id}
                img={movie.image}
                href={movie.tit}
                quality={movie.quality}
                title={movie.title}
                year={movie.year}
                len={movie.len}
                genre={movie.genre.map((gen, i) => (
                  <li
                    className="text-xs font-normal leading-4 tracking-wide text-white opacity-50 hover:opacity-100"
                    key={i}
                  >
                    <Link href={"/category/" + gen}>
                      <a>{gen}</a>
                    </Link>
                  </li>
                ))}
              />
            ))}
          </Blog>
        )}
      </main>
    </div>
  );
}
export async function getStaticPaths() {
  // console.log(paths);

  return {
    paths: Categories.map((category) => ({
      params: { categoryId: category.category.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const categoryId = context.params.categoryId;
  // console.log(categoryId);
  const { db } = await connectToDatabase();

  // const collection = db.collection("movies");
  // const movies = await collection.find({}).toArray();

  const data = await db
    .collection("movies")
    .find({ genre: categoryId })
    // .sort({ _id: 1 })
    .toArray();

  const movies = data.map((movie) => {
    return {
      _id: movie._id.toString(),
      tit: movie.title.toString().replace(/ /g, "-"),
      title: movie.title,
      image: movie.image,
      category: categoryId,
      len: movie.len,
      quality: movie.quality,
      genre: movie.genre,
      year: movie.year,
    };
  });

  //   console.log(movies);

  return {
    props: { movies },
    revalidate: 1,
  };
}
