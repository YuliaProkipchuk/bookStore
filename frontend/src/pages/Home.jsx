import Slider from "../components/BooksSlider/Slider";
import { json, useLoaderData, useRouteLoaderData } from "react-router-dom";
import Banner from "../components/Header/Banner";

export default function HomePage() {
  const data = useLoaderData();

  return (
    <main>
      <Banner />

      <Slider books={data} />
    </main>
  );
}
export async function loader({ request, params }) {
  try {
    const response = await fetch(
      "https://example-data.draftbit.com/books?_limit=10"
    );
    if (!response.ok) {
      console.log("not okay");

      throw json({ message: "Bad request" }, { status: 404 });
    }
    const data = await response.json();
    console.log(data);
    const pricesRespponse = await fetch("http://localhost:8080/prices");
    const prices = await pricesRespponse.json();
    const books = data.map((book) => ({
      ...book,
      price: prices[book.id + 1],
    }));

    return books;
  } catch (error) {
    console.log(error);
  }

  return data;
}
