import qs from "qs";
import { useRouter } from "next/router";
import CategoryList from "../components/CategoryList";
import { API_URL } from "../config/index";

export default function SearchPage({ movies }) {
  // console.log(movies);
  const router = useRouter();

  return (
    <>
      <CategoryList
        data={movies}
        resSearchTitle={`Rezultatet e kërkimit për "${router.query.term.toLocaleUpperCase()}"`}
      />
    </>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { title_contains: term },
        { actors_contains: term },
        { genre_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/api/search?term=${query}`);

  const movies = await res.json();
  //   console.log(movies);

  return {
    props: { movies },
  };
}
