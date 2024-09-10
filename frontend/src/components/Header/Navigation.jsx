import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import NavItem from "./NavItem";
import { useState } from "react";
import AuthModal from "../Auth/Modal";
import { useSelector } from "react-redux";
import CartModal from "../Cart/CartModal";
export default function Navigation() {
  const [openModal, setOpenModal] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useSelector((state) => state.cart.total);
  return (
    <>
      {openModal && (
        <AuthModal
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
        />
      )}
      {(isCartOpen && cart>0 )&& (
        <CartModal
          isOpen={isCartOpen}
          closeModal={() => setIsCartOpen(false)}
        />
      )}
      <nav>
        <ul className={classes["navigation"]}>
          <NavItem> Home</NavItem>
          <NavItem>Books</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem onClick={() => setIsCartOpen(true)}>
            <i className="bi bi-cart4"></i>
            {cart}
          </NavItem>
          <NavItem onClick={() => setOpenModal(true)}>
            <i className="bi bi-person-circle"></i>
          </NavItem>
        </ul>
      </nav>
    </>
  );
}
