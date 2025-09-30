import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { auth, db } from "../../../config/firebase";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

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

  async function createOrder() {
    const order = {
      userID: auth?.currentUser?.uid || doc(collection(db, "orders")).id,
      date: new Date(),
      status: "payed",
      ...cart,
    };
    try {
      fetch(`http://localhost:8080/create-checkout-session`, {
        method: "POST",
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.url) {
            window.location.href = res.url;
          }
        }).catch(err=>console.log(err));

    } catch (error) {
      console.log(error);
    }
  }
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
                <i className="bi bi-arrow-left-short"></i> Back to shopping
              </span>
              <div className={classes.order}>
                <p>
                  Total:{" "}
                  {new Intl.NumberFormat("uk-UA", {
                    style: "currency",
                    currency: "UAH",
                  }).format(cart.sum)}
                  <br />
                  <span>This is a test payment, no real transactions will occur.</span>
                </p>
                <button type="button" onClick={createOrder}>
                  checkout
                </button>
              </div>
            </div>
          </div>
        </dialog>,
        document.getElementById("dialog")
      )}
    </>
  );
}
