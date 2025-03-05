import { Card, Badge, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 
import "./Dish.scss";

function Dish({ name, price, image, isNew }) {
  const { dispatch } = useContext(CartContext); 

  return (
    <Card className="dish-card">
      <div className="dish-img-container">
        {isNew && <Badge bg="danger" className="new-badge">Nouveau</Badge>}  
        <Card.Img variant="top" src={image} alt={name} className="card-img-top" />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}€</Card.Text>
        <Button variant="primary" onClick={() => dispatch({ type: "increment" })}>
          Ajouter au panier
        </Button>
        <Button variant="danger" onClick={() => dispatch({ type: "decrement" })} style={{ marginLeft: "10px" }}>
          Retirer du panier
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Dish;
