import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NavBar from "./views/NavBar/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./views/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Partnership from "./pages/Partnership/Partnership";
import Post from "./pages/Post/Post";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import BestaSummary from "./pages/BestaSummary/BestaSummary";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#fff");
  return (
    <>
      <NavBar color={color} />
      <Routes>
        <Route path="/" element={<Home setColor={setColor} />} />
        <Route path="/about" element={<About setColor={setColor} />} />
        <Route
          path="/products"
          element={<ProductsPage setColor={setColor} />}
        />
        <Route path="/contact" element={<Contact setColor={setColor} />} />
        <Route
          path="/partnership"
          element={<Partnership setColor={setColor} />}
        />
        <Route path="/post/:id" element={<Post setColor={setColor} />} />
        <Route
          path="/bestaArticle"
          element={<BestaSummary setColor={setColor} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
