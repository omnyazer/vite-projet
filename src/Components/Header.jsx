import logo from "../assets/logo.png"; // Supprimé "react-router-dom"
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/">Accueil</a> 
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
