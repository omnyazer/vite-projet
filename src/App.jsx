import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"; 

function Home() {
  return <h1>Bienvenue sur la page d'accueil</h1>;
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
