import { useState } from "react";
import classes from "./Slider.module.css";
import bookImg from "../../assets/bike-guy-wattpad-book-cover.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
export default function SliderItem({ book }) {
  const dispatch = useDispatch()
  return (
    <div className={classes["slider-item"]}>
      <div className={classes["pic-wrapper"]}>
        <img
          src={book?.cover_img || bookImg}
          alt=""
          className={classes["bookpic"]}
        />
      </div>
      <div className={classes["item-info"]}>
        <h3 className={classes["book-title"]}>
          {book?.title || " The Witcher. 2. Sword of Destiny"}
        </h3>
        <span className={classes["book-author"]}>
          {book?.author }
              {/* {(book?.author && book?.author.length > 1
            ? book?.author.map((a) => `${a}, `)
            : book?.author[0]) || "Andrzej Sapkowski"} */}
        </span>
        <div className={classes["price-container"]}>
          <span className={classes["price-tag"]}>{new Intl.NumberFormat("uk-UA" , {style: "currency" , currency: "UAH" }).format(book.price)}</span>
          <div className={classes["buy-btn"]} onClick={()=>dispatch(addToCart(book))}>
            <i className="bi bi-cart4"></i> Add to cart
          </div>
        </div>
      </div>
    </div>
  );
}
