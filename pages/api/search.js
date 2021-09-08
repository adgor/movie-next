import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const term = req.query.term;

  const data = await db
    .collection("movies")
    .aggregate([
      {
        $search: {
          search: {
            query: term,
            path: ["title", "actors", "genre"],
          },
        },
      },
      // {
      //   $limit: 20,
      // },
    ])
    .toArray();

  res.json(data);
  // console.log(data);
}
