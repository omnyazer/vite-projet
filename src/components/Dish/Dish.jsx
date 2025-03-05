import { Card, Badge, Button } from "react-bootstrap";
import "./Dish.scss";

function Dish({ name, price, image, isNew }) {
  const handleAddToCart = () => {
    alert(`Le plat ${name} a été ajouté à votre panier`);
  };

  return (
    <Card className="dish-card">
      <div className="dish-img-container">
        {isNew && <Badge bg="danger" className="new-badge">Nouveau</Badge>}  
        <Card.Img variant="top" src={image} alt={name} className="card-img-top" />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}€</Card.Text>
        <Button variant="primary" onClick={() => handleAddToCart(name)}>
        Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Dish;
