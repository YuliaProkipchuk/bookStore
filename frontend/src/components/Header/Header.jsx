import Navigation from "./Navigation";
import classes from './Header.module.css'
import { useLocation } from "react-router-dom";
export default function Header(){
    let location = useLocation();
    const urlRegex = /books$/;
    console.log(location.pathname);
    
    return <header className={urlRegex.test(location.pathname)?classes['color-header']:''}>
        <Navigation />
    </header>
}