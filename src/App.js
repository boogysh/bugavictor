import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error404 from "./components/errors/Error404";
import Home from "./pages/home/Home";
import Architecture from "./pages/architecture/Architecture";
import Developpement from "./pages/developpement/Developpement";
//import About from "./pages/about/About";
import OneProject from "./pages/oneProject/OneProject";
import Building from "./pages/building/Building";

import "./App.css";

function App() {
  return (
    // <Router basename="/cv/">
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/batiment" element={<Building />} />
        <Route path="/batiment/:id" element={<OneProject />} />
        <Route path="/architecture/:id" element={<OneProject />} />
        <Route path="/developpement" element={<Developpement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
