import { useLoaderData, useParams } from "react-router-dom";
import classes from "../components/BookPage/Book.module.css";
import BookCover from "../components/UI/BookCover";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
export default function BookPage() {
  const book = useLoaderData();
  const dispatch = useDispatch();

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
            <button type="button" className={classes["add-toWishlist-btn"]}>
              <i className="bi bi-bookmark-fill"></i>To Wishlist
            </button>
          </div>
        </div>
      </div>
      <section className={classes["book-details"]}>
        <article className={classes.about}>
          <div className={classes["book-description"]}>
            <h3>About</h3>

            <p>{book.description}</p>
          </div>
        </article>
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
    book.genre_list = book.genre_list.split(',')
    return book;
  } catch (error) {
    return error;
  }
}
