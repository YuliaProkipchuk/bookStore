// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
export default function NavItem({ children, className, link = "", ...props }) {
  const styles = `${classes["navigation__item"]} ${classes[className]}`;
  return (
    <li className={styles} {...props} >
      {link === "" && (
        <span className={classes["navigation__item__link"]}>{children}</span>
      )}
      {link !== "" && (
        <NavLink to={link}>
          <span className={classes["navigation__item__link"]}>{children}</span>
        </NavLink>
      )}
    </li>
  );
}
