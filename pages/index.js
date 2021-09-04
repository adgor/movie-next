import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
// import Kot from "../components/Kot";
// import KotSlide from "../components/KotSlide";
// import { SwiperSlide } from "swiper/react";
// import Link from "next/link";
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
      {/* <main className="flex flex-col px-6 py-10 mx-auto text-white "> */}
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
      {/* Category Slider - Aksion*/}
      {/* <>
            <div className="relative">
              <div>
                <Link href={"/category/Aksion"}>
                  <a className="inline-block pl-1 text-xl font-semibold tracking-wider transition duration-700 hover:text-transparent bg-clip-text bg-gradient-to-tl hover:from-blue-700 hover:via-red-700 hover:to-yellow-500 mt-7">
                    Aksion
                  </a>
                </Link>
              </div>
              <Kot>
                {aksion.map((movie, i) => (
                  <SwiperSlide key={i}>
                    <KotSlide
                      href={movie.titURL}
                      img={movie.image}
                      quality={movie.quality}
                      title={movie.title}
                      year={!movie.year ? "" : `(${movie.year}) •`}
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
                  </SwiperSlide>
                ))}
              </Kot>
              <span className="absolute w-full border-b border-gray-300 border-opacity-10"></span>
            </div>
          </> */}

      {/* Category Slider - Drama*/}
      {/* <>
            <div className="relative ">
              <div>
                <Link href={"/category/Dramë"}>
                  <a className="inline-block pl-1 text-xl font-semibold tracking-wider transition duration-700 hover:text-transparent bg-clip-text bg-gradient-to-tl hover:from-blue-700 hover:via-red-700 hover:to-yellow-500 mt-7">
                    Drama
                  </a>
                </Link>
              </div>
              <Kot>
                {drama.map((movie, i) => (
                  <SwiperSlide key={i}>
                    <KotSlide
                      key={movie.title}
                      href={movie.titURL}
                      img={movie.image}
                      quality={movie.quality}
                      title={movie.title}
                      year={!movie.year ? "" : `(${movie.year}) •`}
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
                  </SwiperSlide>
                ))}
              </Kot>
              <span className="absolute w-full border-b border-gray-300 border-opacity-10"></span>
            </div>
          </> */}

      {/* Category Slider - Komedi*/}
      {/* <>
            <div className="relative ">
              <div>
                <Link href={"/category/Komedi"}>
                  <a className="inline-block pl-1 text-xl font-semibold tracking-wider transition duration-700 hover:text-transparent bg-clip-text bg-gradient-to-tl hover:from-blue-700 hover:via-red-700 hover:to-yellow-500 mt-7">
                    Komedi
                  </a>
                </Link>
              </div>
              <Kot>
                {komedi.map((movie, i) => (
                  <SwiperSlide key={i}>
                    <KotSlide
                      key={movie}
                      href={movie.titURL}
                      img={movie.image}
                      quality={movie.quality}
                      title={movie.title}
                      year={!movie.year ? "" : `(${movie.year}) •`}
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
                  </SwiperSlide>
                ))}
              </Kot>
              <span className="absolute w-full border-b border-gray-300 border-opacity-10"></span>
            </div>
          </> */}
      {/* </main> */}
    </div>
  );
}

export async function getStaticProps() {
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

    // expected output: "resolved"
  }

  // working this method with below function
  // const drama = await data
  // .find({ genre: "Dramë" }, { projection: { _id: 0 } })
  // .toArray();

  // let makeGamePlayer = (title, image, quality, year) => {
  //   return title, image, quality, year;
  // };

  // aksion.map(makeGamePlayer);
  // drama.map(makeGamePlayer);

  // const aksion = await data
  //   .find({ genre: "Aksion" })
  //   .sort({ _id: -1 })
  //   .limit(20)
  //   .toArray();

  // const drama = await data
  //   .find({ genre: "Dramë" })
  //   .sort({ _id: -1 })
  //   .limit(20)
  //   .toArray();
  // const horror = await data
  //   .find({ genre: "Horror" })
  //   .sort({ _id: -1 })
  //   .limit(20)
  //   .toArray();
  // const komedi = await data
  //   .find({ genre: "Komedi" })
  //   .sort({ _id: -1 })
  //   .limit(20)
  //   .toArray();
  // const thriller = await data
  //   .find({ genre: "Thriller" })
  //   .sort({ _id: -1 })
  //   .limit(20)
  //   .toArray();

  // const aksion = getAksion.map((movie) => {
  //   return {
  //     _id: movie._id.toString(),
  //     titURL: movie.title.toString().replace(/ /g, "-"),
  //     title: movie.title,
  //     image: movie.image,
  //     year: movie.year,
  //     len: movie.len,
  //     quality: movie.quality,
  //     genre: movie.genre,
  //   };
  // });

  // const drama = getDrama.map((movie) => {
  //   return {
  //     _id: movie._id.toString(),
  //     titURL: movie.title.toString().replace(/ /g, "-"),
  //     title: movie.title,
  //     image: movie.image,
  //     year: movie.year,
  //     len: movie.len,
  //     quality: movie.quality,
  //     genre: movie.genre,
  //   };
  // });
  // const horror = getHorror.map((movie) => {
  //   return {
  //     _id: movie._id.toString(),
  //     titURL: movie.title.toString().replace(/ /g, "-"),
  //     title: movie.title,
  //     image: movie.image,
  //     year: movie.year,
  //     len: movie.len,
  //     quality: movie.quality,
  //     genre: movie.genre,
  //   };
  // });
  // const komedi = getKomedi.map((movie) => {
  //   return {
  //     _id: movie._id.toString(),
  //     titURL: movie.title.toString().replace(/ /g, "-"),
  //     title: movie.title,
  //     image: movie.image,
  //     year: movie.year,
  //     len: movie.len,
  //     quality: movie.quality,
  //     genre: movie.genre,
  //   };
  // });
  // const thriller = getThriller.map((movie) => {
  //   return {
  //     _id: movie._id.toString(),
  //     titURL: movie.title.toString().replace(/ /g, "-"),
  //     title: movie.title,
  //     image: movie.image,
  //     year: movie.year,
  //     len: movie.len,
  //     quality: movie.quality,
  //     genre: movie.genre,
  //   };
  // });
  return {
    props: {
      aksion: JSON.parse(JSON.stringify(await asyncGetCategory("Aksion"))),
      drama: JSON.parse(JSON.stringify(await asyncGetCategory("Dramë"))),
      horror: JSON.parse(JSON.stringify(await asyncGetCategory("Horror"))),
      komedi: JSON.parse(JSON.stringify(await asyncGetCategory("Komedi"))),
      thriller: JSON.parse(JSON.stringify(await asyncGetCategory("Thriller"))),
      aventurë: JSON.parse(JSON.stringify(await asyncGetCategory("Aventurë"))),
    },
    revalidate: 36000,
  };
}
