import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import { Route, Routes } from "react-router-dom";
import Maison from "./pages/Maison";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Saveurs from "./pages/Saveurs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/maison" element={<Maison />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/saveurs/:itemName" element={<Saveurs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
