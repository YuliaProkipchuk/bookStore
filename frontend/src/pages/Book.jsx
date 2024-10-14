import { useLoaderData, useParams } from "react-router-dom";
import classes from "../components/BookPage/Book.module.css";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import BookCover from "../components/UI/BookCover";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import { useEffect, useState } from "react";
import SimilarBooksSection from "../components/BookPage/SimilarBooksSection";
import { auth, db } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
export default function BookPage() {
  const { book, similar } = useLoaderData();
  const dispatch = useDispatch();
  const [readMore, setReadMore] = useState(false);
  const [aBook, setABook] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user.uid);
        getUser();
      } else {
        console.log("No user is signed in");
        setABook({
          ...book,
          addedToFavorites:false
        });
      // setAddedToFavorites(false)

      }
      // setIsLoading(false);
    });

    async function getUser() {
      const userRef = doc(db, "users", auth?.currentUser?.uid);

      const user = await getDoc(userRef);
      if (user.exists()) {
        setABook({
          ...book,
          addedToFavorites:user.data().favorites.find((el) => el.id === book.id) ? true : false,
        })
      }
    }
    return () => unsubscribe();
  }, []);
  async function toggleFavorites(book) {
    setAddedToFavorites(prev=>!prev);

    try {
      const userRef = doc(db, "users", auth?.currentUser?.uid);

      const user = await getDoc(userRef);
      console.log(user.data());
      if (user.exists()) {
        if (!user.data().favorites.find((el) => el.id === book.id)) {
          console.log('not foound');
          
          await updateDoc(userRef, {
            favorites: arrayUnion(book),
          });

        } else {
          console.log('found');
          const arr = user.data().favorites;
          const index = arr.findIndex(el=>el.id === book.id)

          await updateDoc(userRef, {
            favorites: arrayRemove(arr[index]),
          });

        }

      }
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
              onClick={() => toggleFavorites(book)}
            >
              <i className="bi bi-bookmark-fill"></i>{aBook?.addedToFavorites?'From':'To'} Wishlist
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
