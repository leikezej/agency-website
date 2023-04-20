import './App.css';

import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Technology from "./pages/Technology/Technology";
import Portfolio from './pages/Portfolio/Portfolio';
import Services from './pages/Services/Services';
import Industry from "./pages/Industry/Industry";
import About from "./pages/About/About";
import Testimonial from "./pages/Testimonial/Testimonial";
import Career from "./components/Office/Office";
import Contact from "./pages/Contact/Contact";

import Process from "./components/Process/Process";

function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/technology" element={<Technology/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/industry" element={<Industry/>} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="/process" element={<Process/>} />
      </Routes>
      <ScrollToTop smooth color="#00d0f9" />
      <Footer />
    </>
  );
}

export default App;