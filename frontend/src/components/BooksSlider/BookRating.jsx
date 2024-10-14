import classes from './Slider.module.css'
export default function BookRating({rating}) {
    function getBookRating(rating, starNumber){
        if(rating/starNumber>=1) return 1;
        if(rating/starNumber<1&&(starNumber==1 ||rating/(starNumber-1)>=1)) return parseFloat((rating%1).toFixed(2))
        return 0;
      }
  return (
    <div className={classes.book_rating_back}>
      <div>
        <div className={classes.rating}>
          <i className="bi bi-star-fill"></i>
        </div>
      </div>
      <div>
        <div className={classes.rating}>
          <i className="bi bi-star-fill"></i>
        </div>
      </div>
      <div>
        <div className={classes.rating}>
          <i className="bi bi-star-fill"></i>
        </div>
      </div>
      <div>
        <div className={classes.rating}>
          <i className="bi bi-star-fill"></i>
        </div>
      </div>
      <div>
        <div className={classes.rating}>
          <i className="bi bi-star-fill"></i>
        </div>
      </div>
      <div className={classes.book_rating}>
        <div>
          <div
            style={{ "--rating": getBookRating(rating, 1) }}
            className={classes.rating}
          >
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
        <div>
          <div
            style={{ "--rating": getBookRating(rating, 2) }}
            className={classes.rating}
          >
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
        <div>
          <div
            style={{ "--rating": getBookRating(rating, 3) }}
            className={classes.rating}
          >
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
        <div>
          <div
            style={{ "--rating": getBookRating(rating, 4) }}
            className={classes.rating}
          >
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
        <div>
          <div
            style={{ "--rating": getBookRating(rating, 5) }}
            className={classes.rating}
          >
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
