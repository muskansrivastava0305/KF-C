import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import AboutPage from "./component/About";
import FoodLandingPage from "./component/Home";
import Navbar from "./component/Navbar";
import { Footer } from "./component/Footer";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FoodLandingPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
