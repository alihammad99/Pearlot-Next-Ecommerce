import React from "react";
import Container from "../Layout/Container";
import { PhotoContainer, Photo } from "./styles/Hero.style";
const Hero = () => {
  return (
    <Container>
      <PhotoContainer>
        <Photo src="/shop/hero-model.png" width={2294} height={974} />
      </PhotoContainer>
    </Container>
  );
};

export default Hero;
