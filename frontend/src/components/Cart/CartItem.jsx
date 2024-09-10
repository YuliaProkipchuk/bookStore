import { useDispatch } from "react-redux";
import classes from "./Cart.module.css";
import CartButton from "./CartButton";
import { addToCart, deleteFromCart, removefromCart } from "../../store/cart";
export default function CartItem({ book }) {
  const dispatch = useDispatch();
  return (
    <li className={classes.cart_item}>
      <button className={classes.delItem_btn} onClick={() => dispatch(deleteFromCart(book))}>
        -
      </button>
      <div className={classes.item_img_wrapper}>
        <img src={book?.cover_img} alt="" />
      </div>
      <div className={classes.cart_item_info}>
        <p>{book.title}</p>
        <span className={classes.item_author}>{book?.author}</span>
        <span className={classes.item_price}>
          {new Intl.NumberFormat("uk-UA", {
            style: "currency",
            currency: "UAH",
          }).format(book.totalPrice)}
        </span>{" "}
        <div>
          <CartButton editCart={() => dispatch(removefromCart(book))}>
            -
          </CartButton>
          <span className={classes.item_quantity}>{book.quantity}</span>
          <CartButton editCart={() => dispatch(addToCart(book))}>+</CartButton>
        </div>
      </div>
    </li>
  );
}
