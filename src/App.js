import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Header from "./views/Header/Header";
import NavBar from "./views/NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';
import Footer from "./views/Footer/Footer";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <About /> */}
    </>
  );
};

export default App;