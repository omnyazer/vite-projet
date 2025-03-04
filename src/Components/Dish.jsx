import { Card } from "react-bootstrap";
import "./Dish.scss";

function Dish({ name, price, image }) {
  return (
    <Card className="dish-card">
      <Card.Img variant="top" src={image} alt={name} className="dish-image" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="dish-price">{price}€</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dish;
