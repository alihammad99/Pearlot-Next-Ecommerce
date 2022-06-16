import React from "react";
import Primary from "../Buttons/Primary";
import {
  CardImage,
  TitleContainer,
  CardTitle,
  CardPrice,
  Cards,
  Button,
  Item,
} from "./styles/Favorites.style";
import Container from "../Layout/Container";
const Favorites = ({ title }) => {
  return (
    <Container>
      <div>
        <TitleContainer>
          <h3>{title}</h3>
          <Primary text="See All" />
        </TitleContainer>
        <Cards>
          <Item style={{ position: "relative", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute",
                bottom: 54,
                left: 0,
                zIndex: 10,
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Button className="button">Add to Card</Button>
            </div>

            <div>
              <CardImage
                src="/favorites/earings.png"
                width="364"
                height="364"
              />
            </div>
            <CardTitle>Simple & Elegant Earings</CardTitle>
            <CardPrice>$42</CardPrice>
          </Item>
          <Item>
            <div
              style={{
                position: "absolute",
                bottom: 54,
                left: 0,
                zIndex: 10,
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Button className="button">Add to Card</Button>
            </div>
            <div>
              <CardImage
                src="/favorites/necklaces.jpg"
                width="364"
                height="364"
              />
            </div>
            <CardTitle>Luxury Necklace</CardTitle>
            <CardPrice>$42</CardPrice>
          </Item>
          <Item>
            <div
              style={{
                position: "absolute",
                bottom: 54,
                left: 0,
                zIndex: 10,
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Button className="button">Add to Card</Button>
            </div>
            <div>
              <CardImage src="/favorites/rings.jpg" width="364" height="364" />
            </div>
            <CardTitle>Fascinating Ring</CardTitle>
            <CardPrice>$42</CardPrice>
          </Item>
        </Cards>
      </div>
    </Container>
  );
};

export default Favorites;
