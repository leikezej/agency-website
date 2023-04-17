import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Industry from "./pages/Industry/Industry";
import About from "./pages/About/About";
import Testimonial from "./pages/Testimonial/Testimonial";
import Career from "./pages/Career/Career";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/industry" element={<Industry/>} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonial/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;