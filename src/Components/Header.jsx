import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import "./Header.scss";

function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <div className="header-content">
          <a href="/" className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </a>

          <Nav className="nav-links">
            <Nav.Link href="/">Accueil</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
