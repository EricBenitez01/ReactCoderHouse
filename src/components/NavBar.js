import "./navBar.css";
import CardWidget from "./CardWidget";

function NavBar(props) {
    return (
        <nav>  
            <ul class="roberto">
                <li>Home</li>
                <li>Galeria</li>
                <li>Info</li>
                <li>Contactos</li>
                <li><CardWidget/></li>
            </ul>
        </nav>
    );
}


export default NavBar; 