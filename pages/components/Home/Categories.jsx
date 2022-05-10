import React from "react";
import {
  GridContainer,
  Item,
  Border,
  DetailsContainer,
  CategImage,
  Title,
  Arrow,
} from "./styles/Categories.style";
import Container from "../Layout/Container";

const Categories = () => {
  return (
    <Container>
      <h3>Categories</h3>
      <GridContainer className="rounded">
        <Item>
          <Border>
            <DetailsContainer>
              <CategImage
                fullRounded
                src="/categories/rings.png"
                width={755.01}
                height={1005}
                layout="responsive"
              />
              <div className="titleContainer">
                <Title>Rings</Title>
                <div className="arrow-master-container">
                  <div className="arrow-container">
                    <Arrow
                      className="arrow"
                      src="/sm-arrow.svg"
                      width={27}
                      height={7}
                    />
                    <Arrow
                      className="arrow"
                      src="/sm-arrow.svg"
                      width={27}
                      height={7}
                    />
                  </div>
                </div>
              </div>
            </DetailsContainer>
          </Border>
        </Item>
        <Item>
          <Border>
            <DetailsContainer>
              <CategImage
                fullRounded
                top
                src="/categories/braceletes.png"
                width={755.01}
                height={1005}
                layout="responsive"
              />
              <div className="titleContainer">
                <Title>Braceletes</Title>
                <div className="arrow-master-container">
                  <div className="arrow-container">
                    <Arrow
                      className="arrow"
                      src="/sm-arrow.svg"
                      width={27}
                      height={7}
                    />
                    <Arrow
                      className="arrow"
                      src="/sm-arrow.svg"
                      width={27}
                      height={7}
                    />
                  </div>
                </div>
              </div>
            </DetailsContainer>
          </Border>
        </Item>
        <Item>
          <Border>
            <DetailsContainer>
              <CategImage
                fullRounded
                src="/categories/earings.png"
                width={755.01}
                height={1005}
                layout="responsive"
              />
              <div className="titleContainer">
                <Title>Rings</Title>
                <div className="arrow-master-container">
                  <div className="arrow-container">
                    <Arrow
                      className="arrow"
                      src="/sm-arrow.svg"
                      width={27}
                      height={7}
                    />
                    <Arrow
                      className="arrow"
                      src="/sm-arrow.svg"
                      width={27}
                      height={7}
                    />
                  </div>
                </div>
              </div>
            </DetailsContainer>
          </Border>
        </Item>
        <Item wide>
          <Border style={{ borderColor: "hsla(28, 44%, 92%, 0.5)" }}>
            <DetailsContainer>
              <div className="imageContainer">
                <CategImage
                  src="/princessCollection2.jpg"
                  width={1280}
                  height={854}
                  placeholder="blur"
                  blurDataURL="/princessCollection-blure"
                  layout="responsive"
                  className="princeCollectionImg"
                />
              </div>
              <div className="titleContainer">
                <Title style={{ color: "#F3E9E0" }}>Rings</Title>
                <div className="arrow-master-container">
                  <div className="arrow-container">
                    <Arrow
                      className="arrow"
                      src="/sm-arrow-white.svg"
                      width={27}
                      height={7}
                    />
                    <Arrow
                      className="arrow"
                      src="/sm-arrow-white.svg"
                      width={27}
                      height={7}
                    />
                  </div>
                </div>
              </div>
            </DetailsContainer>
          </Border>
        </Item>
        <Item>
          <Border>
            <DetailsContainer>
              <CategImage
                topRounded
                top
                src="/categories/necklaces.png"
                width={714}
                height={1005}
                layout="responsive"
              />
              <div className="titleContainer">
                <Title>Rings</Title>
                <div className="arrow-master-container">
                  <div className="arrow-container">
                    <Arrow
                      className="arrow"
                      src="/sm-arrow.svg"
                      width={27}
                      height={7}
                    />
                    <Arrow
                      className="arrow"
                      src="/sm-arrow.svg"
                      width={27}
                      height={7}
                    />
                  </div>
                </div>
              </div>
            </DetailsContainer>
          </Border>
        </Item>
      </GridContainer>
    </Container>
  );
};

export default Categories;
