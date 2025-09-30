import { useEffect, useState } from "react";
import { auth, db } from "../../../config/firebase";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import classes from "./Slider.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { Link } from "react-router-dom";
import BookRating from "./BookRating";
export default function SliderItem({ book }) {
  const dispatch = useDispatch();
  const [addedToFavorites, setAddedToFavorites] = useState(
    book.addedToFavorites
  );

  async function toggleFavorites(book) {
    try {
      const userRef = doc(db, "users", auth?.currentUser?.uid);

      const user = await getDoc(userRef);
      if (user.exists()) {
        if (!user.data().favorites.find((el) => el.id === book.id)) {

          await updateDoc(userRef, {
            favorites: arrayUnion(book),
          });
        } else {
          const arr = user.data().favorites;
          const index = arr.findIndex((el) => el.id === book.id);

          await updateDoc(userRef, {
            favorites: arrayRemove(arr[index]),
          });
        }
      }
      setAddedToFavorites((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={classes.book_card}>
      <Link to={`/books/${book.id}`}>
        <img src={book?.image_url} alt={book?.title} />
      </Link>
      <div className={classes.book_card_info}>
        <Link to={`/books/${book.id}`}>
          <p className={classes.book_title}>{book.title}</p>
        </Link>
        <span className={classes.book_author}>{book.authors}</span>
        <BookRating rating={book.rating}/>
        <span className={classes["price-tag"]}>
          {new Intl.NumberFormat("uk-UA", {
            style: "currency",
            currency: "UAH",
          }).format(book.price)}
        </span>
        <div className={classes.action_btns}>
          <div
            className={classes["buy-btn"]}
            onClick={() => dispatch(addToCart(book))}
          >
            <i className="bi bi-cart4"></i> Add to cart
          </div>
          <i
            className="bi bi-heart-fill"
            style={{
              "--color": `${
                addedToFavorites ? "var(--accent-color)" : "#585858"
              }`,
            }}
            onClick={() => toggleFavorites(book)}
          ></i>
        </div>
      </div>
    </div>
  );
}
