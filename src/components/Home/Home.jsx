import { useState } from "react";
import Dish from "../Dish/Dish";
import { Container, Row, Col, Button } from "react-bootstrap";

const dishes = [
  {
    id: 1,
    name: "Tacos à l’unité",
    price: 3,
    image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
    isNew: true,
    stock: 12
  },
  {
    id: 2,
    name: "Enchiladas",
    price: 12,
    image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
    isNew: false,
    stock: 0
  },
  {
    id: 3,
    name: "Mole poblano",
    price: 15,
    image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
    isNew: false,
    stock: 5
  }
];

function Home() {
  const [showNewOnly, setShowNewOnly] = useState(false);

  const handleShowNewOnly = () => {
    setShowNewOnly(prevState => !prevState);
  };

  const filteredDishes = dishes.filter(dish => {
    return dish.stock > 0 && (!showNewOnly || dish.isNew);
  });
  
  return (
    <main className="main-container">
      <div className="filter-container">
        <Button variant="secondary" onClick={handleShowNewOnly}>
          {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
        </Button>
      </div>

      <Container>
        <Row>
          {filteredDishes.map(dish => (
            <Col key={dish.id} lg={4} md={4} sm={12}>
              <Dish 
                name={dish.name}
                price={dish.price}
                image={dish.image}
                isNew={dish.isNew}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}

export default Home;
