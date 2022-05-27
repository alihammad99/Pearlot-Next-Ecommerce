import React, { useState, createContext } from "react";
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

export const qn = createContext();
const Details = () => {
  const [quantityNumber, setQuantityNumber] = useState({quantity: 1});

  return (
    <>
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
              From pearl necklace sets, to earrings, we've got the pieces to add
              a dose of luxury to your looks.
            </Description>
            <Delivery>
              <span>Delivery</span>
              <br />
              summer collection is a classic and elegant staple everyone needs.
              Our modern designs give new life to this timeless gemstone. From
              pearl necklace sets, to earrings, we've got the pieces to add a
              dose of luxury to your looks.
            </Delivery>
            <qn.Provider value={quantityNumber}>
              <Quantity>
                <span>Quantity</span>
                <ButtonsContainer>
                  <Count value={quantityNumber} setValue={setQuantityNumber} />
                  <Secondary text="Add to Cart" />
                </ButtonsContainer>
              </Quantity>
            </qn.Provider>
          </RightSide>
        </FlexBox>
      </Container>
    </>
  );
};

export default Details;
