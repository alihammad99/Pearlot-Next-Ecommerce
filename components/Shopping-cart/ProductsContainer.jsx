import React from "react";
import {
  Photo,
  PhotoContainer,
  Price,
  Product,
  ProductCard,
  ProductCategory,
  ProductContainer,
  ProductTitle,
  Quantity,
  TextContainer,
} from "./styles/ProductsContainer.style";
const ProductsContainer = () => {
  return (
    <div>
      <ShoppingCartContainer>
        <Title>Shopping Cart</Title>
        <BarContainer>
          <p>Products</p>
          <p>Price</p>
          <p>Quanitity</p>
          <p>Total</p>
        </BarContainer>
        <ProductsContainer />
      </ShoppingCartContainer>
      <ProductContainer>
        <ProductCard>
          <Product>
            <PhotoContainer>
              <Photo src="/categories/rings.png" width={300} height={300} />
            </PhotoContainer>
            <TextContainer>
              <ProductTitle>Modern Collection</ProductTitle>
              <ProductCategory>Princess Collection</ProductCategory>
            </TextContainer>
          </Product>
          <Price>$95.6</Price>
          <Quantity>5</Quantity>
          <Total>$460</Total>
          <Delete>X</Delete>
        </ProductCard>
      </ProductContainer>
    </div>
  );
};

export default ProductsContainer;
