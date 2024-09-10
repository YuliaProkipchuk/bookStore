import classes from './UI.module.css'
export default function BookCover({img}){
    return <div className={classes.book}>
        <div className={classes.book_img} style={{'--url':`url(${img})`}}></div>
    </div>
}