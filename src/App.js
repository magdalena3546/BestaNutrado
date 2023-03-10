import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NavBar from "./views/NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';
import Footer from "./views/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Partnership from "./pages/Partnership/Partnership";
import Post from "./pages/Post/Post";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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