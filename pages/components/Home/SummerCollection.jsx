import React from "react";
import Container from "../Layout/Container";
import Primary from "../Buttons/Primary";
import {
  Section,
  SCContainer,
  ImageContainer,
  SCImage,
  RightSide,
  Paragraph,
  SCTitle,
} from "./styles/SummerCollection.style";

const SummerCollection = () => {
  return (
    <Section>
      <Container>
        <SCContainer>
          <ImageContainer>
            <SCImage src="/favorites/SCImage.png" width={520} height={700.5} />
          </ImageContainer>
          <RightSide>
            <SCTitle>
              Summer
              <br />
              Collection
            </SCTitle>
            <Paragraph>
              Pearlot summer collection is a classic and elegant staple everyone
              needs. Our modern designs give new life to this timeless gemstone.
              From pearl necklace sets, to earrings, we've got the pieces to add
              a dose of luxury to your looks.
            </Paragraph>
            <Primary text="Explore" left />
          </RightSide>
        </SCContainer>
      </Container>
    </Section>
  );
};

export default SummerCollection;
