import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
export default function CartModal({ isOpen, closeModal }) {
  const cart = useSelector((state) => state.cart);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);
  return (
    <>
      {createPortal(
        <dialog
          className={classes.cart_modal}
          ref={dialogRef}
          onClose={closeModal}
          onCancel={closeModal}
        >
          <div className={classes.cart}>
            <ul>
              {cart.items.map((book) => (
                <CartItem key={book.id} book={book} />
              ))}
            </ul>
            <div className={classes.cart_footer}>
              <span onClick={closeModal}>
                <i class="bi bi-arrow-left-short"></i> Back to shopping
              </span>
              <div className={classes.order}>
              <p>
                Total:{" "}
                {new Intl.NumberFormat("uk-UA", {
                  style: "currency",
                  currency: "UAH",
                }).format(cart.sum)}
              </p>
              <button>checkout</button>
              </div>
            </div>
          </div>
        </dialog>,
        document.getElementById("dialog")
      )}
    </>
  );
}
