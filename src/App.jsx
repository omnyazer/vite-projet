import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import "./index.css"; 

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
