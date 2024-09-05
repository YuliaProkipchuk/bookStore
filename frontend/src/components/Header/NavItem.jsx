import { NavLink } from "react-router-dom";
import classes from './Header.module.css'
export default function NavItem({children, ...props}){
    return   <li className={classes["navigation__item"]} {...props}>
    <NavLink className={classes["navigation__item__link"]}>
      {children}
    </NavLink>
  </li>
}