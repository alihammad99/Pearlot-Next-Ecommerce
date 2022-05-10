import React from "react";
import Container from "../Layout/Container";
import Count from "../Buttons/Count";
import Secondary from "../Buttons/Secondary";
import {
  FlexBox,
  LeftSide,
  PhotoContainer,
  Photo,
  RightSide,
  TitleContainer,
  Title,
  Price,
  Description,
  Delivery,
  ButtonsContainer,
  Quantity,
} from "./styles/Details.style";

const Details = () => {
  return (
    <Container>
      <FlexBox>
        <LeftSide>
          <PhotoContainer className="a">
            <Photo src="/hero-model.jpg" width={500} height={500} />
          </PhotoContainer>
          <PhotoContainer className="b">
            <Photo src="/hero-model.jpg" width={500} height={500} />
          </PhotoContainer>
          <PhotoContainer className="c">
            <Photo src="/hero-model.jpg" width={500} height={500} />
          </PhotoContainer>
          <PhotoContainer className="d">
            <Photo src="/hero-model.jpg" width={500} height={500} />
          </PhotoContainer>
        </LeftSide>
        <RightSide>
          <TitleContainer>
            <Title>Summer Collection</Title>
            <Price>$45</Price>
          </TitleContainer>
          <Description>
            Pearlot summer collection is a classic and elegant staple everyone
            needs. Our modern designs give new life to this timeless gemstone.
            From pearl necklace sets, to earrings, we've got the pieces to add a
            dose of luxury to your looks.
          </Description>
          <Delivery>
            <span>Delivery</span>
            <br />
            summer collection is a classic and elegant staple everyone needs.
            Our modern designs give new life to this timeless gemstone. From
            pearl necklace sets, to earrings, we've got the pieces to add a dose
            of luxury to your looks.
          </Delivery>
          <Quantity>
            <span>Quantity</span>
            <ButtonsContainer>
              <Count />
              <Secondary text="Add to Cart" />
            </ButtonsContainer>
          </Quantity>
        </RightSide>
      </FlexBox>
    </Container>
  );
};

export default Details;
