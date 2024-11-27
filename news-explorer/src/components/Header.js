import line from '../images/header_line.png'
import Navigation from "./Navigation";

function Header() {
    return(
    <header className="header">
    <img className="header__line" src={line} alt="Imagem linha horizontal"/>
    <Navigation/>
    </header>   
)}

export default Header;