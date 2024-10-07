import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import classes from "../components/BooksGrid/BooksGrid.module.css";
import Grid from "../components/BooksGrid/Grid";
import FilterBooks from "../components/BooksGrid/FilterBooks";
import { useEffect, useState } from "react";
import { GENRES } from "../data/genres";
export default function AllBooksPage() {
  const { books, currentPage, totalPages } = useLoaderData();
  const [pickedGenre, setPickedGenre] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  function openPrevPage() {
    if (currentPage > 1) {
      navigate(`/books?_page=${currentPage - 1}&q=${q || ""}`);
    }
  }
  function openNextPage() {
    if (currentPage < totalPages) {
      navigate(`/books?_page=${currentPage + 1}&q=${q || ""}`);
    }
  }
  return (
    <main className={classes.allbooks_main}>
      <FilterBooks genres={GENRES} setPickedGenre={setPickedGenre} />
      <Grid books={books} pickedGenre={pickedGenre} />
      <div className={classes.pagination_btns}>
        <button
          type="button"
          onClick={openPrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={openNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </main>
  );
}
export async function loader({ request, params }) {
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("q");
  const page = url.searchParams.get("_page") || 1;

  try {
    const response = await fetch(
      `https://example-data.draftbit.com/books?_page=${page}&_limit=12&q=${
        searchTerm || ""
      }`
    );
    if (!response.ok) {
      console.log("not okay");

      throw json({ message: "Bad request" }, { status: 404 });
    }
    const data = await response.json();
    const pricesRespponse = await fetch("http://localhost:8080/prices");
    const prices = await pricesRespponse.json();

    return {
      books: data
        .filter((book) => !book.genre_list.toLowerCase().includes("russia"))
        .map((book) => ({
          ...book,
          price: prices[book.id + 1],
        })),
      currentPage: +page,
      totalPages: 20,
    };
  } catch (error) {
    console.log(error);
  }

  return data;
}
