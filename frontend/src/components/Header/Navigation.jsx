import classes from "./Header.module.css";
import NavItem from "./NavItem";
import { auth } from "../../../config/firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";
import AuthModal from "../Auth/Modal";
import { useSelector } from "react-redux";
import CartModal from "../Cart/CartModal";
import { Form, useLocation, useNavigate } from "react-router-dom";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
export default function Navigation({ setKey }) {
  const { scrollYProgress } = useScroll();

  const [openModal, setOpenModal] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useSelector((state) => state.cart.total);
  const location = useLocation();
  const navigate = useNavigate();

  const background = useTransform(
    scrollYProgress,
    [0, 0.076],
    ["#00000000", "#0000005c"]
  );
  const backdropFilter = useTransform(
    scrollYProgress,
    [0, 0.076],
    ["blur(0px)", "blur(20px)"]
  );

  async function logout() {
    try {
      await signOut(auth);
      if (location.pathname !== "/") navigate("/");
      else setKey((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {openModal && (
        <AuthModal
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
          setKey={setKey}
        />
      )}
      {isCartOpen && cart > 0 && (
        <CartModal
          isOpen={isCartOpen}
          closeModal={() => setIsCartOpen(false)}
        />
      )}
      <motion.nav
        className={classes["main-nav"]}
        style={{
          background,
          backdropFilter,
        }}
      >
        <ul className={classes["navigation"]}>
          <NavItem link="/">
            <i className="bi bi-book-half"></i> BOOKHOME
          </NavItem>
          <li className={classes["nav-search"]}>
            <Form method="get" action="/books">
              <button>
                <i class="bi bi-search"></i>
              </button>
              <input type="search" placeholder="Search books..." name="q" />
            </Form>
          </li>
          <NavItem className="big" link="books">
            Books
          </NavItem>
          <NavItem onClick={() => setIsCartOpen(true)}>
            <i className="bi bi-cart4"></i>
            {cart}
          </NavItem>
          {auth.currentUser && (
            <NavItem>
              <i className="bi bi-person-circle"></i>
            </NavItem>
          )}
          {!auth.currentUser && (
            <NavItem onClick={() => setOpenModal(true)}>
              <i className="bi bi-box-arrow-in-right"></i>
            </NavItem>
          )}
          {auth.currentUser && (
            <NavItem className="big" onClick={logout}>
              <i className="bi bi-box-arrow-left"></i>
            </NavItem>
          )}
        </ul>
      </motion.nav>
    </>
  );
}
