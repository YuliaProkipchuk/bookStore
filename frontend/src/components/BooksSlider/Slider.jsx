import SliderItem from "./SliderItem";
import classes from "./Slider.module.css";
import { useState } from "react";
const SIZE = 10;
export default function Slider() {
  const [x, setX] = useState(0);

  return (
    <section className={classes["slider"]}>
      <div className={classes["slider-heading"]}>
        <h2>Popular</h2>
        <div className={classes["slider-heading_controlls"]}>
          <button
            onClick={() => setX((x) => x + 380)}
            disabled={x === 0}
          >
            <i className="bi bi-arrow-left-circle"></i>
          </button>
          <button
            onClick={() => setX((x) => x - 380)}
            disabled={x === -380 * (SIZE - 4)}
          >
            <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </div>
      <article class={classes["slider-container"]} style={{ "--x": `${x}px` }}>
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        {/* <div class="slider-container-bookbox">
          <img
            src="https://book-ye.com.ua/upload/iblock/086/a647692b_f913_11e6_80c5_000c29ae1566_4822e5a8_c6b3_11ea_813b_000c29ae1566.jpg"
            alt=""
            class="slider-container-bookbox-pic"
          />
          <span class="slider-container-bookbox-title">
            The Witcher. 6. The Tower of the Swallow
          </span>
          <span class="slider-container-bookbox-author">
            Andrzej Sapkowski
          </span>
          <div class="slider-container-bookbox-price-container">
            <span class="slider-container-bookbox-price-container-price-tag">
              300 uah
            </span>
            <div class="slider-container-bookbox-price-container-buy-btn">
              <a
                href="#"
                class="slider-container-bookbox-price-container-buy-btn-link"
              >
                <i class="bi bi-cart4"></i> Add to cart
              </a>
            </div>
          </div>
        </div>
        <div class="slider-container-bookbox">
          <img
            src="https://book-ye.com.ua/upload/iblock/2a5/7a5f8111_78c4_11e6_80be_000c29ae1566_97c6059e_6fbb_11e7_80ca_000c29ae1566.jpg"
            alt=""
            class="slider-container-bookbox-pic"
          />
          <span class="slider-container-bookbox-title">
            A Storm of Swords. Part 2: Blood and Gold
          </span>
          <span class="slider-container-bookbox-author">
            George R. R. Martin
          </span>
          <div class="slider-container-bookbox-price-container">
            <span class="slider-container-bookbox-price-container-price-tag">
              300 uah
            </span>
            <div class="slider-container-bookbox-price-container-buy-btn">
              <a
                href="#"
                class="slider-container-bookbox-price-container-buy-btn-link"
              >
                <i class="bi bi-cart4"></i> Add to cart
              </a>
            </div>
          </div>
        </div>
        <div class="slider-container-bookbox">
          <img
            src="https://book-ye.com.ua/upload/iblock/bfa/cdd52478_7e44_11e6_80c0_000c29ae1566_09c186e4_59bb_11ec_815d_0050568ef5e6.jpg"
            alt=""
            class="slider-container-bookbox-pic"
          />
          <span class="slider-container-bookbox-title">The Shining</span>
          <span class="slider-container-bookbox-author">Stephen King</span>
          <div class="slider-container-bookbox-price-container">
            <span class="slider-container-bookbox-price-container-price-tag">
              300 uah
            </span>
            <div class="slider-container-bookbox-price-container-buy-btn">
              <a
                href="#"
                class="slider-container-bookbox-price-container-buy-btn-link"
              >
                <i class="bi bi-cart4"></i> Add to cart
              </a>
            </div>
          </div>
        </div>
        <div class="slider-container-bookbox">
          <img
            src="https://book-ye.com.ua/upload/iblock/4cd/7d46405f_364a_11eb_8141_000c29ae1566_47de2d47_364c_11eb_8141_000c29ae1566.jpg"
            alt=""
            class="slider-container-bookbox-pic"
          />
          <span class="slider-container-bookbox-title">Cloud Atlas</span>
          <span class="slider-container-bookbox-author">
            David Mitchell
          </span>
          <div class="slider-container-bookbox-price-container">
            <span class="slider-container-bookbox-price-container-price-tag">
              300 uah
            </span>
            <div class="slider-container-bookbox-price-container-buy-btn">
              <a
                href="#"
                class="slider-container-bookbox-price-container-buy-btn-link"
              >
                <i class="bi bi-cart4"></i> Add to cart
              </a>
            </div>
          </div>
        </div>
        <div class="slider-container-bookbox">
          <img
            src="https://book-ye.com.ua/upload/resize_cache/iblock/642/230_355_1/7ff56b5c_8e97_11e8_8100_000c29ae1566_dbac64d4_8e97_11e8_8100_000c29ae1566.jpg"
            alt=""
            class="slider-container-bookbox-pic"
          />
          <span class="slider-container-bookbox-title">
            A Street Cat Named Bob
          </span>
          <span class="slider-container-bookbox-author">James Bowen</span>
          <div class="slider-container-bookbox-price-container">
            <span class="slider-container-bookbox-price-container-price-tag">
              300 uah
            </span>
            <div class="slider-container-bookbox-price-container-buy-btn">
              <a
                href="#"
                class="slider-container-bookbox-price-container-buy-btn-link"
              >
                <i class="bi bi-cart4"></i> Add to cart
              </a>
            </div>
          </div>
        </div>
        <div class="slider-container-bookbox">
          <img
            src="https://book-ye.com.ua/upload/resize_cache/iblock/1cf/230_355_1/91d420c6_c57d_11e9_811d_000c29ae1566_1c04aa86_1125_11ea_8124_000c29ae1566.jpg"
            alt=""
            class="slider-container-bookbox-pic"
          />
          <span class="slider-container-bookbox-title">
            Nine Perfect Strangers
          </span>
          <span class="slider-container-bookbox-author">
            Liane Moriarty
          </span>
          <div class="slider-container-bookbox-price-container">
            <span class="slider-container-bookbox-price-container-price-tag">
              300 uah
            </span>
            <div class="slider-container-bookbox-price-container-buy-btn">
              <a
                href="#"
                class="slider-container-bookbox-price-container-buy-btn-link"
              >
                <i class="bi bi-cart4"></i> Add to cart
              </a>
            </div>
          </div>
        </div>
        <div class="slider-container-bookbox">
          <img
            src="https://book-ye.com.ua/upload/resize_cache/iblock/909/230_355_1/20cb26ef_960e_11e6_80c0_000c29ae1566_88024340_51a9_11eb_8144_000c29ae1566.jpg"
            alt=""
            class="slider-container-bookbox-pic"
          />
          <span class="slider-container-bookbox-title">The Green Mile</span>
          <span class="slider-container-bookbox-author">Stephen King</span>
          <div class="slider-container-bookbox-price-container">
            <span class="slider-container-bookbox-price-container-price-tag">
              300 uah
            </span>
            <div class="slider-container-bookbox-price-container-buy-btn">
              <a
                href="#"
                class="slider-container-bookbox-price-container-buy-btn-link"
              >
                <i class="bi bi-cart4"></i> Add to cart
              </a>
            </div>
          </div>
        </div>
        <div class="slider-container-bookbox">
          <img
            src="https://book-ye.com.ua/upload/resize_cache/iblock/0f3/230_355_1/6a9ecdd6_e050_11e9_8121_000c29ae1566_cee6be9b_e050_11e9_8121_000c29ae1566.jpg"
            alt=""
            class="slider-container-bookbox-pic"
          />
          <span class="slider-container-bookbox-title">
            Unnatural Causes
          </span>
          <span class="slider-container-bookbox-author">
            Dr Richard Shepherd
          </span>
          <div class="slider-container-bookbox-price-container">
            <span class="slider-container-bookbox-price-container-price-tag">
              300 uah
            </span>
            <div class="slider-container-bookbox-price-container-buy-btn">
              <a
                href="#"
                class="slider-container-bookbox-price-container-buy-btn-link"
              >
                <i class="bi bi-cart4"></i> Add to cart
              </a>
            </div>
          </div>
        </div>
        <div class="slider-container-bookbox">
          <img
            src="https://book-ye.com.ua/upload/resize_cache/iblock/f13/230_355_1/333b35e8_7a72_11e6_80be_000c29ae1566_750e59f0_c6b0_11ea_813b_000c29ae1566.jpg"
            alt=""
            class="slider-container-bookbox-pic"
          />
          <span class="slider-container-bookbox-title">
            The Witcher. 2. Sword of Destiny
          </span>
          <span class="slider-container-bookbox-author">
            Andrzej Sapkowski
          </span>
          <div class="slider-container-bookbox-price-container">
            <span class="slider-container-bookbox-price-container-price-tag">
              300 uah
            </span>
            <div class="slider-container-bookbox-price-container-buy-btn">
              <a
                href="#"
                class="slider-container-bookbox-price-container-buy-btn-link"
              >
                <i class="bi bi-cart4"></i> Add to cart
              </a>
            </div>
          </div>
        </div>
        <div class="slider-container-bookbox">
          <img
            src="https://book-ye.com.ua/upload/resize_cache/iblock/da6/230_355_1/dbfb24ed_bee6_11ec_816d_0050568ef5e6_94932e7f_beef_11ec_816d_0050568ef5e6.jpg"
            alt=""
            class="slider-container-bookbox-pic"
          />
          <span class="slider-container-bookbox-title">
            The Ocean at the End of The Lane
          </span>
          <span class="slider-container-bookbox-author">Neil Gaiman</span>
          <div class="slider-container-bookbox-price-container">
            <span class="slider-container-bookbox-price-container-price-tag">
              300 uah
            </span>
            <div class="slider-container-bookbox-price-container-buy-btn">
              <a
                href="#"
                class="slider-container-bookbox-price-container-buy-btn-link"
              >
                <i class="bi bi-cart4"></i> Add to cart
              </a>
            </div>
          </div>
        </div> */}
      </article>
    </section>
  );
}
