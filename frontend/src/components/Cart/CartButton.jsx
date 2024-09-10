import classes from './Cart.module.css'
export default function CartButton({ editCart, children }) {
  return <button className={classes.item_btn} onClick={editCart}>{children}</button>;
}
