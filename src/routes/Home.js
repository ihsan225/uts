import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Product from "../routes/Product";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Product />
      <Footer />
    </div>
  )
}

export default Home