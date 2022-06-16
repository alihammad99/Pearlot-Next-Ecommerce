import React from "react";
import Details from "../components/card/Details";
import { Bg } from "../components/card/styles/Details.style";
import Nav from "../components/Layout/Nav";
import Favorites from "../components/Home/Favorites";
import Footer from "../components/Layout/Footer";
const card = () => {
  return (
    <>
      <Nav />
      <Details />
      <Bg>
        <Favorites title="You may also like" />
      </Bg>
      <Footer />
    </>
  );
};

export default card;
