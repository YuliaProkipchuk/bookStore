import classes from './UI.module.css';
import bookMockUp from '../../assets/book-mockup.png';
export default function AnimatedSection(){
    return <div className={classes.animated_box}>
        <p >Literature is my Utopia</p>
        <div className={classes.box}>
        <div className={classes.bookMockUp}>
            <img src={bookMockUp} alt="" />
        </div>
        <div className={classes.bookMockUp}>
            <img src={bookMockUp} alt="" />
        </div>
        <div className={classes.bookMockUp}>
            <img src={bookMockUp} alt="" />
        </div>
        </div>
    </div>
}