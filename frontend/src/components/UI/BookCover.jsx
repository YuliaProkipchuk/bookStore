import classes from './UI.module.css'
export default function BookCover({rating, rating_count}){
    return <div className={classes.book}>
        <div className={classes.book_img} style={{'--rating':rating}}></div>
    </div>
}