import { Link } from 'react-router-dom';
import classes from './Book.module.css';
import SimilarBookCard from './SimilarBookCard';
export default function SimilarBooksSection({books}){
    return <section className={classes.similar_section}>
        <p className={classes.similar_section_title}>You may also Like</p>
        <div className={classes.similar_slider}>
            {books.map(book=><Link to={`/books/${book.id}`}><SimilarBookCard key={book.id} book={book}/></Link>)}
        </div>
    </section>
}