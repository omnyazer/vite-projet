import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"; 
import Footer from "./Components/Footer";

function Home() {
  return (
    <div className="main-container">
      <h1>Bienvenue sur mon site</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer /> {/* Ajout du pied de page */}
    </Router>
  );
}

export default App;