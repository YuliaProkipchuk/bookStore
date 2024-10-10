import classes from "./Auth.module.css";
import AnimatedSection from "../UI/AnimatedSection";
import { auth, db } from "../../../config/firebase";
import { doc, setDoc } from "firebase/firestore"; 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Login from "./Login";
import SignUp from "./SignUp";
export default function AuthModal({ openModal, closeModal }) {
  const [isRegistered, setIsRegistered] = useState(true);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dialogRef = useRef(null);
  useEffect(() => {
    if (openModal) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [openModal]);

  function changeUserInput(e) {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  async function signUp() {
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const id = auth.currentUser.uid;
      await setDoc(doc(db, "users", id), {
        name:userData.username,
        email: userData.email,
        favorites:[]
        // password:userData.password
      });
    
      closeModal();

    } catch (error) {
      console.log(error);
    }
  }
  async function signIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const user = userCredential.user;
      console.log(user);
      closeModal();
      console.log('logged in');
      
      
    } catch (error) {
      const errorCode = error.code;
        const errorMessage = error.message;
    }
  }

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
              <p
                className={classes.sign_text}
                onClick={() => setIsRegistered((prev) => !prev)}
              >
                {isRegistered ? "Sign up" : "Log in"}
              </p>
            </div>

            <div>
              {isRegistered && <Login changeUserInput={changeUserInput} />}
              {!isRegistered && <SignUp changeUserInput={changeUserInput} />}
              <button
                type="button"
                className={classes.auth_btn}
                onClick={isRegistered ? signIn : signUp}
              >
                Continue
              </button>
            </div>
          </div>
        </dialog>,
        document.getElementById("dialog")
      )}
    </>
  );
}
