import React from "react";
import Container from "./components/Layout/Container";
import Nav from "./components/Layout/Nav";
import ProductsContainer from "./components/Shopping-cart/ProductsContainer";
const shoppingCart = () => {
  return (
    <Container>
      <Nav />
      <ProductsContainer />
    </Container>
  );
};

export default shoppingCart;
