import classes from './Book.module.css';
export default function SimilarBookCard({book}){
    return <div className={classes.similar_book}>
        <img src={book.image_url} alt={book.title} />
        <p>{book.title}</p>
        <span>{new Intl.NumberFormat("uk-UA", {
                style: "currency",
                currency: "UAH",
              }).format(book.price)}</span>
    </div>
}