import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dish from "./Components/Dish";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css"; 

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-container">
        <h1>Bienvenue sur mon site</h1>
        <Container>
          <Row className="dish-row">
            <Col className="d-flex justify-content-center">
              <Dish 
                name="Tacos à l’unité" 
                price={3} 
                image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <Dish 
                name="Enchiladas" 
                price={12} 
                image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <Dish 
                name="Mole poblano" 
                price={15} 
                image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
