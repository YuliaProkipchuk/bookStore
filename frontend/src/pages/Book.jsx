import { useLoaderData, useParams } from "react-router-dom";
import classes from "../components/BookPage/Book.module.css";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import BookCover from "../components/UI/BookCover";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import { useState } from "react";
import SimilarBooksSection from "../components/BookPage/SimilarBooksSection";
import { auth, db } from "../../config/firebase";
export default function BookPage() {
  const { book, similar } = useLoaderData();
  const dispatch = useDispatch();
  const [readMore, setReadMore] = useState(false);

  async function addToWishList(book) {
    try {
      const user = doc(db, "users", auth?.currentUser?.uid);
      // await addDoc(collection(db,''))
      console.log(user);

      await updateDoc(user, {
        favorites: arrayUnion(book),
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main>
      <div className={classes["blur-background"]}>
        <img src={book.image_url} alt="" />
        <div className={classes["blur-mask"]}></div>
        <div className={classes.content}>
          <div className={classes["coverImg-wrapper"]}>
            <img src={book.image_url} alt="" />
          </div>

          <div className={classes["book-credits"]}>
            <h1>{book.title}</h1>
            <p>{book.authors}</p>
            <div className={classes.rating}>
              <BookCover
                rating={book.rating}
                rating_count={book.rating_count}
              />
              <span>{book.rating_count}</span>
            </div>
          </div>
          <div className={classes["bookpage-btns"]}>
            <button
              type="button"
              className={classes["buy-btn"]}
              onClick={() => dispatch(addToCart(book))}
            >
              Buy{" "}
              {new Intl.NumberFormat("uk-UA", {
                style: "currency",
                currency: "UAH",
              }).format(book.price)}
            </button>
            <button
              type="button"
              className={classes["add-toWishlist-btn"]}
              onClick={() => addToWishList(book)}
            >
              <i className="bi bi-bookmark-fill"></i>To Wishlist
            </button>
          </div>
        </div>
      </div>
      <section className={classes["book-details"]}>
        <article className={classes.about}>
          <div className={classes["book-description"]}>
            <h3>About</h3>
            <p>
              {book.description.length > 500 && !readMore
                ? book.description.substring(0, 500) + "..."
                : book.description}
              <span
                className={classes.readMore}
                onClick={() => setReadMore((prev) => !prev)}
              >
                Read {readMore ? "less" : "more"}
              </span>
            </p>
            <div className={classes.genres_list}>
              {book.genre_list.map((genre) => (
                <span className={classes.genre}>{genre}</span>
              ))}
            </div>
          </div>
        </article>
        <SimilarBooksSection books={similar} />
      </section>
    </main>
  );
}

export async function loader({ params, request }) {
  try {
    let response = await fetch(
      `https://example-data.draftbit.com/books/${params.bookId}`
    );
    const pricesRespponse = await fetch("http://localhost:8080/prices");
    const prices = await pricesRespponse.json();
    const book = await response.json();

    book.price = prices[book.id + 1];
    book.genre_list = book.genre_list.split(",");
    let similar = await fetch(
      `https://example-data.draftbit.com/books/?_limit=6&q=${book.genre_list[0]}&q=${book.genre_list[1]}`
    );
    similar = await similar.json();

    similar = similar.filter((b) => b.id !== book.id);
    similar.forEach((book) => (book.price = prices[book.id + 1]));
    console.log(similar);

    return { book, similar };
  } catch (error) {
    return error;
  }
}
