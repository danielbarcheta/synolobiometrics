import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Press from "./pages/Press";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
import Technology from "./pages/Technology";
import ContactFloatingButton from "./components/ContactFloatingButton";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ContactFloatingButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/press" element={<Press />} />
        <Route path="/blog" element={<Blog />} />
        {/* outras rotas */}
      </Routes>
    </Router>
  );
};

export default App;
