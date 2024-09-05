import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import NavItem from "./NavItem";
import { useState } from "react";
import AuthModal from "../Auth/Modal";
export default function Navigation() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && (
        <AuthModal
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
        />
      )}
      <nav>
        <ul className={classes["navigation"]}>
          <NavItem> Home</NavItem>
          <NavItem>Books</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>
            <i className="bi bi-cart4"></i>
          </NavItem>
          <NavItem onClick={() => setOpenModal(true)}>
            <i className="bi bi-person-circle"></i>
          </NavItem>
        </ul>
      </nav>
    </>
  );
}
