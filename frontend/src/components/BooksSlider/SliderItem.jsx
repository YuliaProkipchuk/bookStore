import { useState } from "react";
import classes from "./Slider.module.css";
import bookImg from '../../assets/bike-guy-wattpad-book-cover.png';
export default function SliderItem() {
  return (
    <div className={classes["slider-item"]}>
      <div className={classes["pic-wrapper"]}>
        <img
          src={bookImg}
          alt=""
          className={classes["bookpic"]}
        />
      </div>
      <div className={classes["item-info"]}>
        <h3 className={classes["book-title"]}>
          The Witcher. 2. Sword of Destiny
        </h3>
        <span className={classes["book-author"]}>Andrzej Sapkowski</span>
        <div className={classes["price-container"]}>
          <span className={classes["price-tag"]}>300 uah</span>
          <div className={classes["buy-btn"]}>
            <i className="bi bi-cart4"></i> Add to cart
          </div>
        </div>
      </div>
    </div>
  );
}
