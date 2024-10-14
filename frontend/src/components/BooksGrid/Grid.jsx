import SliderItem from "../BooksSlider/SliderItem";
import classes from "./BooksGrid.module.css";
export default function Grid({ books, pickedGenre }) {
  
  return (
    <div className={classes.books_grid}>
      {books
        .filter((book) =>
          pickedGenre ? book.genre_list.includes(pickedGenre) : book
        )
        .map((book) => (
          <SliderItem key={book.id} book={book} />
        ))}
    </div>
  );
}
