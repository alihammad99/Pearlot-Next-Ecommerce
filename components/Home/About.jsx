import React from "react";
import Primary from "../Buttons/Primary";
import Container from "../Layout/Container";
import {
  Section,
  SCContainer,
  ImageContainer,
  SCImage,
  RightSide,
  Paragraph,
  SCTitle,
} from "./styles/SummerCollection.style";
const About = () => {
  return (
    <section>
      <Section>
        <Container>
          <SCContainer justify>
            <RightSide>
              <SCTitle>About Us</SCTitle>
              <Paragraph>
                Our jewellery is 'touched by a thousand thumbs' before it makes
                its way to you. Skilled gem cutters in Jaipur, master craftsmen
                in Thailand and our very own design team in Norfolk inject their
                unique artistry to make every piece unique. Art, architecture
                and the world around us constantly inspire us, as do our
                customers. We love seeing how you mix, match, stack and layer
                your favourite MV pieces.
                <br />
                <br />
                Pearlot designs jewellery that empowers, uplifts and endures
                using only recycled gold vermeil, sterling silver and
                sustainably sourced natural gemstones, diamonds and pearls.
              </Paragraph>
              <Primary text="More" left />
            </RightSide>
            <ImageContainer>
              <SCImage
                src="/favorites/SCImage.png"
                width={520}
                height={700.5}
              />
            </ImageContainer>
          </SCContainer>
        </Container>
      </Section>
    </section>
  );
};

export default About;
