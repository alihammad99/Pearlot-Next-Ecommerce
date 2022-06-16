import React from "react";
import Container from "../Layout/Container";
import {
  Bg,
  ProductsGrid,
  ProductContainer,
  PhotoContainer,
  Photo,
  Title,
  Price,
  SecTitle,
} from "./styles/Products.style";

const Products = () => {

  return (
    <Bg>
      <Container>
        <SecTitle>Necklaces</SecTitle>
        <ProductsGrid>
          <ProductContainer>
            <PhotoContainer>
              <Photo src="/shop/necklace.png" width={812} height={812} />
            </PhotoContainer>
            <Title>Title</Title>
            <Price>$45</Price>
          </ProductContainer>

          <ProductContainer>
            <PhotoContainer>
              <Photo src="/shop/necklace.png" width={812} height={812} />
            </PhotoContainer>
            <Title>Title</Title>
            <Price>$45</Price>
          </ProductContainer>

          <ProductContainer>
            <PhotoContainer>
              <Photo src="/shop/necklace.png" width={812} height={812} />
            </PhotoContainer>
            <Title>Title</Title>
            <Price>$45</Price>
          </ProductContainer>

          <ProductContainer>
            <PhotoContainer>
              <Photo src="/shop/necklace.png" width={812} height={812} />
            </PhotoContainer>
            <Title>Title</Title>
            <Price>$45</Price>
          </ProductContainer>

          <ProductContainer>
            <PhotoContainer>
              <Photo src="/shop/necklace.png" width={812} height={812} />
            </PhotoContainer>
            <Title>Title</Title>
            <Price>$45</Price>
          </ProductContainer>

          <ProductContainer>
            <PhotoContainer>
              <Photo src="/shop/necklace.png" width={812} height={812} />
            </PhotoContainer>
            <Title>Title</Title>
            <Price>$45</Price>
          </ProductContainer>

          <ProductContainer>
            <PhotoContainer>
              <Photo src="/shop/necklace.png" width={812} height={812} />
            </PhotoContainer>
            <Title>Title</Title>
            <Price>$45</Price>
          </ProductContainer>

          <ProductContainer>
            <PhotoContainer>
              <Photo src="/shop/necklace.png" width={812} height={812} />
            </PhotoContainer>
            <Title>Title</Title>
            <Price>$45</Price>
          </ProductContainer>

          <ProductContainer>
            <PhotoContainer>
              <Photo src="/shop/necklace.png" width={812} height={812} />
            </PhotoContainer>
            <Title>Title</Title>
            <Price>$45</Price>
          </ProductContainer>
        </ProductsGrid>
      </Container>
    </Bg>
  );
};

export default Products;
