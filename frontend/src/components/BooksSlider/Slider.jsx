import SliderItem from "./SliderItem";
import classes from "./Slider.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Slider({ books }) {
  console.log(books);
  
 
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1300 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1300, min: 1024 },
      items: 2,
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

  return (
    <section className={classes.carousel}>
      <Carousel responsive={responsive}>
        {books.map((book) => (
          <SliderItem key={book.id} book={book} />
        ))}
      </Carousel>
    </section>
  //   <section >
  //   <Carousel responsive={responsive}>
  //     {books.map((book) => (
  //       <SliderItem key={book.id} book={book} />
  //     ))}
  //   </Carousel>
  // </section>
          // <SliderItem key={books[0].id} book={books[0]} />

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
