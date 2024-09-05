import classes from "./Auth.module.css";
import AnimatedSection from "../UI/AnimatedSection";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export default function AuthModal({ openModal, closeModal }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (openModal) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [openModal]);
  return (
    <>
      {createPortal(
        <dialog
          ref={dialogRef}
          onClose={closeModal}
          onCancel={closeModal}
          className={classes.auth_modal}
        >
          <AnimatedSection />
          <div className={classes.auth_form}>
          <i class="bi bi-x-lg" onClick={closeModal}></i>
            <div className={classes.text_div}>
              <h2>welcome back</h2>
              <p className={classes.sign_text}>Sign up</p>
            </div>

            <form action="">
              <div className={classes.auth_input}>
                <input type="text" name="login" id="login" placeholder="" />
                <label htmlFor="login"> Login</label>
              </div>
              <div className={classes.auth_input}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                />
                <label htmlFor="password"> Password</label>
              </div>
              <button className={classes.auth_btn}>Continue</button>
            </form>
          </div>
        </dialog>,
        document.getElementById("dialog")
      )}
    </>
  );
}
