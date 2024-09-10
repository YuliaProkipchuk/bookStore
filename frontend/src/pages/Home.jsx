import Slider from "../components/BooksSlider/Slider";
import { json, useLoaderData, useRouteLoaderData } from "react-router-dom";
import { generateBookPrice } from "../util/generateBookPrice";

export default function HomePage() {
  const data = useLoaderData();
  console.log(data);

  return (
    <main>
      <Slider books={data} />
    </main>
  );
}
export async function loader({ request, params }) {
  const response = await fetch(
    "https://openlibrary.org/subjects/fiction.json?sort=editions&limit=10"
    // 'https://openlibrary.org/search.json?q=publish_date:2023&limit=10'
    // 'https://openlibrary.org/search.json?q=publish_year=2024&limit=10'
  );
  if (response.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  const data = await response.json();
  if (!data) {
    throw json(
      {
        message: "Fetching failed",
      },
      { status: 401 }
    );
  }
  console.log(data);
  const { docs } = data;
  // const books = docs.map((book) => ({
  //   id: book.key.replace('/works/',''),
  //   author: book.author_name,
  //   title: book.title,
  //   year: book.publish_year,
  //   ratings_average: book.ratings_average,
  //   ratings_count: book.ratings_count,
  //   cover_id: book.cover_i,
  //   cover_img:book.cover_i?`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`:''
  // }));
  const { works } = data;

  const books = works.map((book) => ({
    id: book.key.replace("/works/", ""),
    author: book.authors[0].name,
    title: book.title,
    year: book.publish_year,
    ratings_average: book.ratings_average,
    ratings_count: book.ratings_count,
    cover_id: book.cover_id,
    cover_img: book.cover_id
      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
      : "",
    price: generateBookPrice(),
  }));
  return books;
}
