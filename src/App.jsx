import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import "./index.css"; 

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="app-wrapper">
      <Header cartCount={cartCount} />
      <Home addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
