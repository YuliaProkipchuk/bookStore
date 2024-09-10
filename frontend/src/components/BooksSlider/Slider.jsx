import SliderItem from "./SliderItem";
import classes from "./Slider.module.css";
import { useState } from "react";
const SIZE = 10;
const WIDTH = 376;
export default function Slider({books}) {
  const [x, setX] = useState(0);

  return (
    <section className={classes["slider"]}>
      <div className={classes["slider-heading"]}>
        <h2>Popular</h2>
        <div className={classes["slider-heading_controlls"]}>
          <button
            onClick={() => setX((x) => x + WIDTH)}
            disabled={x === 0}
          >
            <i className="bi bi-arrow-left-circle"></i>
          </button>
          <button
            onClick={() => setX((x) => x - WIDTH)}
            disabled={x === -WIDTH * (SIZE - 4)}
          >
            <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </div>
      <article className={classes["slider-container"]} style={{ "--x": `${x}px` }}>
        {books.map(book=><SliderItem key={book.id} book={book}/>)}
      </article>
    </section>
  );
}
