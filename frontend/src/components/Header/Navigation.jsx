import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
export default function Navigation() {
  return (
    <nav>
      <ul className={classes["navigation"]}>
        <li className={classes["navigation__item"]}>
          <NavLink className={classes["navigation__item__link"]}> Home</NavLink>
        </li>
        <li className={classes["navigation__item"]}>
          <NavLink className={classes["navigation__item__link"]}>
            {" "}
            Books
          </NavLink>
        </li>
        <li className={classes["navigation__item"]}>
          <NavLink className={classes["navigation__item__link"]}>
            {" "}
            About Us
          </NavLink>
        </li>
        <li className={classes["navigation__item"]}>
          <NavLink className={classes["navigation__item__link"]}>
            {" "}
            Contact
          </NavLink>
        </li>
        <li className={classes["navigation__item"]}>
          <NavLink className={classes["navigation__item__link"]}>
            {" "}
            <i className="bi bi-cart4"></i>
          </NavLink>
        </li>
        <li className={classes["navigation__item"]}>
          <NavLink className={classes["navigation__item__link"]}>
            {" "}
            <i className="bi bi-person-circle"></i>
           
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
