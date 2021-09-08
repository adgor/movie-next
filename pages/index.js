import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
import ResponsiveSlider from "../components/ResponsiveSlider";
import ResponsiveSliderList from "../components/ResponsiveSliderList";

export default function HomePage({
  aksion,
  drama,
  horror,
  komedi,
  thriller,
  aventurë,
}) {
  // console.log(aksion.length);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ResponsiveSliderList>
        <ResponsiveSlider
          data={aksion}
          href={"/category/Aksion"}
          categoryTitle={"Aksion"}
        />
        <ResponsiveSlider
          data={komedi}
          href={"/category/Komedi"}
          categoryTitle={"Komedi"}
        />
        <ResponsiveSlider
          data={horror}
          href={"/category/Horror"}
          categoryTitle={"Horror"}
        />
        <ResponsiveSlider
          data={drama}
          href={"/category/Dramë"}
          categoryTitle={"Drama"}
        />
        <ResponsiveSlider
          data={aventurë}
          href={"/category/Aventurë"}
          categoryTitle={"Aventurë"}
        />
        <ResponsiveSlider
          data={thriller}
          href={"/category/Thriller"}
          categoryTitle={"Thriller"}
        />
      </ResponsiveSliderList>
    </div>
  );
}

export async function getStaticProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection("movies");

  // function to get category movies call it in the props
  async function asyncGetCategory(categoryName) {
    const result = await data
      .find({ genre: categoryName })
      .sort({ _id: -1 })
      .limit(20)
      .toArray();
    return result;
    // console.log(result);
  }

  return {
    props: {
      aksion: JSON.parse(JSON.stringify(await asyncGetCategory("Aksion"))),
      drama: JSON.parse(JSON.stringify(await asyncGetCategory("Dramë"))),
      horror: JSON.parse(JSON.stringify(await asyncGetCategory("Horror"))),
      komedi: JSON.parse(JSON.stringify(await asyncGetCategory("Komedi"))),
      thriller: JSON.parse(JSON.stringify(await asyncGetCategory("Thriller"))),
      aventurë: JSON.parse(JSON.stringify(await asyncGetCategory("Aventurë"))),
    },
    revalidate: 82800,
  };
}
