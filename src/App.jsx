import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"; // se quiser navbar em todas páginas

// exemplo de outras páginas
  import About from "./pages/About";
// import Technology from "./pages/Technology";
// import Events from "./pages/Events";
// import Partnering from "./pages/Partnering";

const App = () => {
  return (
    <Router>
      {/* Navbar fora das rotas, aparece em todas as páginas */}
      <div className="relative z-20">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/technology" element={<Technology />} />
        <Route path="/events" element={<Events />} />
        <Route path="/partnering" element={<Partnering />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
