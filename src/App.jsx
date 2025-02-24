import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import AboutPage from "./component/About";
import FoodLandingPage from "./component/Home";
import Navbar from "./component/Navbar";
import { Footer } from "./component/Footer";
import BrandPage from "./component/OurBrands";
import BlogPage from "./component/Blog";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FoodLandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="brand" element={<BrandPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
