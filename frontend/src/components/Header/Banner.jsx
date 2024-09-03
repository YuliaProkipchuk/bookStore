import classes from './Header.module.css'
export default function Banner(){
    return <>
    <section className={classes["sale"]}>
        <article className={classes["sale__offer"]}>
            <h2 className={classes["sale__offer__header"]}>Hot Sales!</h2>
            <p className={classes["sale__offer__paragraph"]}>Special offers for you. Discounts of up to 30% on all books of the KSD
                publishing house are valid until
                January 12, 2023. Buy now!</p>
            <a href="#" class={classes["sale__offer__button"]}>View more</a>
        </article>
        <img className={classes["sale__bookspic"]}
            src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/book-cover-maker/Book-Cover-Generator-with-Transparent-Background-o2jtzfj89rmaigho9txxxl8t13mdxlfs29kuid1zpc.png"
            alt="books"/>
    </section>
    </>
}