import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Accueil</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
