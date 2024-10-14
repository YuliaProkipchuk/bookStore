import Slider from "../components/BooksSlider/Slider";
import { json, useLoaderData, useRouteLoaderData } from "react-router-dom";
import Banner from "../components/Header/Banner";
import { auth, db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
export default function HomePage() {
  const data = useLoaderData();
  const [allBooks, setAllBooks] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getUser();
      } else {
        setAllBooks(() =>
          data.map((book) => ({
            ...book,
            addedToFavorites: false,
          }))
        );
      }
      setIsLoading(false);
    });

    async function getUser() {
      const userRef = doc(db, "users", auth?.currentUser?.uid);

      const user = await getDoc(userRef);
      if (user.exists()) {
        setAllBooks(() =>
          data.map((book) => ({
            ...book,
            addedToFavorites: user
              .data()
              .favorites.find((el) => el.id === book.id)
              ? true
              : false,
          }))
        );
      }
    }
    return () => unsubscribe();
  }, []);
  return (
    <main>
      <Banner />
      <section>
        <h3 className='home-slider-title' >Popular</h3>
        <hr />
        {isloading || allBooks.length === 0 ? (
          <p>Loading</p>
        ) : (
          <Slider books={allBooks} />
        )}
        <h3 className='home-slider-title' >Fantasy</h3>
        <hr />
        {isloading || allBooks.length === 0 ? (
          <p>Loading</p>
        ) : (
          <Slider books={allBooks} />
        )}
        <h3 className='home-slider-title' >Detective</h3>
        <hr />
        {isloading || allBooks.length === 0 ? (
          <p>Loading</p>
        ) : (
          <Slider books={allBooks} />
        )}
      </section>
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
