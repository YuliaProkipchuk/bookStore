import SliderItem from "./SliderItem";
import classes from "./Slider.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Slider({ books }) {  
 
  const responsive = {
    superLargeDesktop: {
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
 
  );
}
