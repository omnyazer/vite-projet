import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo2.png";
import "./Header.scss";



function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
