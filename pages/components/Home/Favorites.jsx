import React from "react";
import Primary from "../Buttons/Primary";
import {
  CardImage,
  TitleContainer,
  CardTitle,
  CardPrice,
  Cards
} from "./Favorites.style";
import Container from "../Layout/Container";
const Favorites = () => {
  return (
    <Container>
      <div>
        <TitleContainer>
          <h3>Our Favorites</h3>
          <Primary text="See All" />
        </TitleContainer>
        <Cards>
          <div>
            <div>
              <CardImage
                src="/favorites/earings.png"
                width="364"
                height="364"
              />
            </div>
            <CardTitle>Simple & Elegant Earings</CardTitle>
            <CardPrice>$42</CardPrice>
          </div>
          <div>
            <div>
              <CardImage
                src="/favorites/necklaces.jpg"
                width="364"
                height="364"
              />
            </div>
            <CardTitle>Luxury Necklace</CardTitle>
            <CardPrice>$42</CardPrice>
          </div>
          <div>
            <div>
              <CardImage
                src="/favorites/rings.jpg"
                width="364"
                height="364"
              />
            </div>
            <CardTitle>Fascinating Ring</CardTitle>
            <CardPrice>$42</CardPrice>
          </div>
        </Cards>
      </div>
    </Container>
  );
};

export default Favorites;
