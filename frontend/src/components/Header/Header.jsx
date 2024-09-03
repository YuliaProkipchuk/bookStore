import Banner from "./Banner";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header(){
    return <header>
        <Logo/>
        <Navigation/>
        <Banner/>
    </header>
}