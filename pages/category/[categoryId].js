import Head from "next/head";
import { connectToDatabase } from "../../lib/mongodb";
import Categories from "../../components/Links";

import CategoryList from "../../components/CategoryList";

export default function MovieCategoryPage({ movies }) {
  // console.log(movies);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CategoryList data={movies} />
    </div>
  );
}
export async function getStaticPaths() {
  // console.log(paths);

  return {
    paths: Categories.map((category) => ({
      params: { categoryId: category.category.toString().replace(/ /g, "_") },
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
    .find({ genre: categoryId.toString().replace(/_/g, " ") })
    // .sort({ _id: 1 })
    .sort({ _id: -1 })
    .toArray();

  const movies = data.map((movie) => {
    return {
      _id: movie._id.toString(),
      tit: movie.title.toString().replace(/ /g, "_"),
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
    revalidate: 32400,
  };
}
