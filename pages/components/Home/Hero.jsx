import React from "react";
import Primary from "../Buttons/Primary";

import {
  HeroContainer,
  LeftContainer,
  RightContainer,
  HeroPhotoContainer,
  HeroPhoto,
} from "./Hero.style";
const Hero = () => {
  return (
    <HeroContainer>
      <LeftContainer>
        <p>
          Pearlot Vinader celebrates women by making them feel individual and
          confident every day.
        </p>
        <h2>STYLE</h2>
        <Primary text="Shop" />
      </LeftContainer>
      <HeroPhotoContainer>
        <HeroPhoto width={1920} height={3111} src="/hero-model.jpg" alt="Pearl Necklace Model Photo" />
      </HeroPhotoContainer>
      <RightContainer>
        <h2>pearl</h2>
        <p>
          Because luxury is a feeling no longer defined by expense or
          exclusivity, but by expression and exceptional quality of
          craftsmanship.
        </p>
      </RightContainer>
    </HeroContainer>
  );
};

export default Hero;
