function Dish({ name, price, image }) {
    return (
      <div className="dish">
        <img src={image} alt={name} className="dish-image" />
        <h3>{name}</h3>
        <p className="dish-price">{price}€</p>
      </div>
    );
  }
  
  export default Dish;
  