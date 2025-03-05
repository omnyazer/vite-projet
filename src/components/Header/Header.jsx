import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./Header.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 

function Header() {
  const { cartCount } = useContext(CartContext); 

  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/" className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            {/* ✅ Affichage dynamique du panier */}
            <Nav.Link href="#">Panier ({cartCount})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
