import React from "react";
import Primary from "../Buttons/Primary";
import Container from "../Layout/Container";
import {
  HeroContainer,
  LeftContainer,
  RightContainer,
  HeroPhotoContainer,
  HeroPhoto,
  Bio,
  Title,
} from "./Hero.style";
const Hero = () => {
  return (
    <Container>
      <HeroContainer>
        <LeftContainer>
          <Bio style={{ transform: "translateY(40px)" }}>
            Pearlot Vinader celebrates women by making them feel individual and
            confident every day.
          </Bio>
          <Title>STYLE</Title>
          <Primary text="Shop" />
        </LeftContainer>
        <HeroPhotoContainer>
          <HeroPhoto
            width={1920}
            height={3111}
            src="/hero-model.jpg"
            alt="Pearl Necklace Model Photo"
          />
        </HeroPhotoContainer>
        <RightContainer>
          <Title>PEARL</Title>
          <Bio style={{ transform: "translateY(-40px)" }}>
            Because luxury is a feeling no longer defined by expense or
            exclusivity, but by expression and exceptional quality of
            craftsmanship.
          </Bio>
        </RightContainer>
      </HeroContainer>
    </Container>
  );
};

export default Hero;
