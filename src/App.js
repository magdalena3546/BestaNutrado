import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NavBar from "./views/NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';
import Footer from "./views/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Partnership from "./pages/Partnership/Partnership";
import Post from "./pages/Post/Post";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/BestaNutrado" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/post/:id" element={<Post />}/>
      </Routes>
      <Footer />
      {/* <About /> */}
    </>
  );
};

export default App;