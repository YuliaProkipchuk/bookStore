import classes from "./Auth.module.css";
import AnimatedSection from "../UI/AnimatedSection";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Login from "./Login";
import SignUp from "./SignUp";
export default function AuthModal({ openModal, closeModal }) {
  const [isRegistered, setIsRegistered] = useState(true)
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
              <p className={classes.sign_text} onClick={()=>setIsRegistered(prev=>!prev)}>{isRegistered?'Sign up':'Log in'}</p>
            </div>

            <form action="">
              {isRegistered && <Login/>}
              {!isRegistered && <SignUp/>}
              <button className={classes.auth_btn}>Continue</button> 
            </form>
          </div>
        </dialog>,
        document.getElementById("dialog")
      )}
    </>
  );
}
