import Slider from "../components/BooksSlider/Slider";
import { json, useLoaderData, useRouteLoaderData } from "react-router-dom";
import { generateBookPrice } from "../util/generateBookPrice";
import Banner from "../components/Header/Banner";

export default function HomePage() {
  const data = useLoaderData();
  console.log(data);

  return (
    <main>
        <Banner/>

      <Slider books={data} />
    </main>
  );
}
export async function loader({ request, params }) {
  try {
    const response = await fetch(
      "https://openlibrary.org/search.json?q=new&first_publish_year=2024"
      // 'https://openlibrary.org/search.json?q=publish_date:2023&limit=10'
      // 'https://openlibrary.org/search.json?q=publish_year=2024&limit=10'
    );
    if (!response.ok) {
      console.log("not okay");

      throw json({ message: "Bad request" }, { status: 404 });
    }
    const data = await response.json();
    console.log(data);
    const { docs } = data;
    const books = docs.filter(book=>book.cover_i).map((book) => ({
      id: book.key.replace('/works/',''),
      author: book.author_name,
      title: book.title,
      year: book.publish_year,
      ratings_average: book.ratings_average,
      ratings_count: book.ratings_count,
      cover_id: book.cover_i,
      cover_img:book.cover_i?`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`:'',
      price: generateBookPrice(),

    })).slice(0,10);
    // const { works } = data;

    // const books = works.map((book) => ({
    //   id: book.key.replace("/works/", ""),
    //   author: book.authors[0].name,
    //   title: book.title,
    //   year: book.publish_year,
    //   ratings_average: book.ratings_average,
    //   ratings_count: book.ratings_count,
    //   cover_id: book.cover_id,
    //   cover_img: book.cover_id
    //     ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
    //     : "",
    //   price: generateBookPrice(),
    // }));

   
    // if (!response) {
    //   throw json(
    //     {
    //       message: "Fetching failed",
    //     },
    //     { status: 401 }
    //   );
    // }
    return books;
  } catch (error) {
    console.log(error);
  }

  return books;
}
