import SliderItem from "./SliderItem";
import classes from "./Slider.module.css";
// import { useEffect, useState } from "react";
// const SIZE = 10;
// const WIDTH = 378;
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Slider({ books }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1300 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1300, min: 1024 },
      items: 3,
    },
    smallTablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  // const [x, setX] = useState(0);
  // const [windowSize, setWindowSize] = useState( window.innerWidth);
  // const [size, setSize] = useState(windowSize>=1496?4:2);

  // useEffect(() => {
  //   // Функція для оновлення розмірів вікна
  //   const handleResize = () => {
  //     setWindowSize(window.innerWidth);
  //   };

  //   // Додаємо слухача події на зміну розмірів вікна
  //   window.addEventListener("resize", handleResize);

  //   // Видаляємо слухача при розмонтуванні компонента
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []); // Порожній масив залежностей означає, що цей ефект виконається тільки після першого рендеру

  return (
    <section className={classes.carousel}>
      <Carousel responsive={responsive}>
        {books.map((book) => (
          <SliderItem key={book.id} book={book} />
        ))}
      </Carousel>
     </section>
    // <section className={classes["slider"]}>
    //   <div className={classes["slider-heading"]}>
    //     <h2>Popular </h2>
    //     <div className={classes["slider-heading_controlls"]}>
    //       <button
    //         onClick={() => setX((x) => x + WIDTH)}
    //         disabled={x === 0}
    //       >
    //         <i className="bi bi-arrow-left-circle"></i>
    //       </button>
    //       <button
    //         onClick={() => setX((x) => x - WIDTH)}
    //         disabled={x === -WIDTH * (SIZE - 4)}
    //       >
    //         <i className="bi bi-arrow-right-circle"></i>
    //       </button>
    //     </div>
    //   </div>
    //   <article className={classes["slider-container"]} style={{ "--x": `${x}px` }}>
    //     {books.map(book=><SliderItem key={book.id} book={book}/>)}
    //   </article>
    // </section>
  );
}
