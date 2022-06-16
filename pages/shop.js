import React from "react";
import Nav from "../components/Layout/Nav";
import Hero from "../components/Shop/Hero";
import CategoriesNav from "../components/Shop/CategoriesNav";
import Products from "../components/Shop/Products";
import Footer from "../components/Layout/Footer";

const Shop = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <CategoriesNav />
      <Products />
      <Footer />
    </div>
  );
};

export default Shop;
